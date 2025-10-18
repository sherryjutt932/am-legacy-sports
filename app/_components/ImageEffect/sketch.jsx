"use client";

import * as THREE from "three";
import { TimelineMax, Power2 } from "gsap";

export class Sketch {
  constructor(opts) {
    this.scene = new THREE.Scene();
    this.vertex = `varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}`;
    this.fragment = opts.fragment;
    this.uniforms = opts.uniforms || {};
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1);
    this.duration = opts.duration || 1;
    this.debug = opts.debug || false;
    this.easing = opts.easing || "easeInOut";
    this.autoPlay = opts.autoPlay || false;
    this.autoPlayDuration = opts.autoPlayDuration || 3000;
    this.loop = opts.loop !== undefined ? opts.loop : true;
    this.autoPlayTimer = null;
    this.delay = opts.delay || 0; // Added delay option for initial auto-play delay

    this.clicker = document.getElementById("content");
    this.container = document.getElementById("slider");

    this.images = opts.images || [];

    if (this.container) {
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.container.appendChild(this.renderer.domElement);
    }

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 2);
    this.time = 0;
    this.current = 0;
    this.textures = [];
    this.paused = true;
    this.isRunning = false;
    this.settings = { progress: 0.5 };

    this.initiate(() => {
      this.setupResize();
      this.addObjects();
      this.resize();
      this.clickEvent();
      this.play();
    });
  }

  initiate(cb) {
    const promises = [];

    this.images.forEach((url, i) => {
      const promise = new Promise((resolve) => {
        this.textures[i] = new THREE.TextureLoader().load(url, () => resolve());
      });
      promises.push(promise);
    });

    Promise.all(promises).then(() => {
      cb();
    });
  }

  clickEvent() {
    this.clicker?.addEventListener("click", () => {
      if (this.autoPlay) {
        this.resetAutoPlay();
      }
      this.next();
    });
  }

  setupResize() {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() {
    if (!this.container) return;

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    this.imageAspect =
      this.textures[0].image.height / this.textures[0].image.width;
    let a1, a2;

    if (this.height / this.width > this.imageAspect) {
      a1 = (this.width / this.height) * this.imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = this.height / this.width / this.imageAspect;
    }

    this.material.uniforms.resolution.value.x = this.width;
    this.material.uniforms.resolution.value.y = this.height;
    this.material.uniforms.resolution.value.z = a1;
    this.material.uniforms.resolution.value.w = a2;

    const dist = this.camera.position.z;
    const height = 1;
    this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

    this.plane.scale.x = this.camera.aspect;
    this.plane.scale.y = 1;

    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    const customUniforms = this.uniforms || {};
    const defaultUniforms = {
      time: { value: 0 },
      progress: { value: 0 },
      border: { value: 0 },
      intensity: { value: 0 },
      scaleX: { value: 40 },
      scaleY: { value: 40 },
      transition: { value: 40 },
      swipe: { value: 0 },
      width: { value: 0 },
      radius: { value: 0 },
      texture1: { value: this.textures[0] },
      texture2: { value: this.textures[1] },
      displacement: { value: new THREE.TextureLoader().load("/img/disp1.jpg") },
      resolution: { value: new THREE.Vector4() },
    };

    const mergedUniforms = { ...defaultUniforms };
    Object.keys(customUniforms).forEach((key) => {
      if (customUniforms[key].value !== undefined) {
        mergedUniforms[key] = { value: customUniforms[key].value };
      }
    });

    this.material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      uniforms: mergedUniforms,
      vertexShader: this.vertex,
      fragmentShader: this.fragment,
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  stop() {
    this.paused = true;
  }

  play() {
    this.paused = false;
    if (this.autoPlay) {
      this.startAutoPlay();
    }
    this.render();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.next();
    }, this.autoPlayDuration);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  next() {
    if (this.isRunning) return;

    const len = this.textures.length;
    const isLastImage = this.current === len - 1;

    if (isLastImage && !this.loop) {
      // Stop auto-play when reaching the last image without loop
      this.stopAutoPlay();
      return;
    }

    this.isRunning = true;

    const nextTexture = this.textures[(this.current + 1) % len];
    this.material.uniforms.texture2.value = nextTexture;

    const tl = new TimelineMax();
    tl.to(this.material.uniforms.progress, this.duration, {
      value: 1,
      ease: Power2[this.easing],
      onComplete: () => {
        this.current = (this.current + 1) % len;
        this.material.uniforms.texture1.value = nextTexture;
        this.material.uniforms.progress.value = 0;
        this.isRunning = false;
      },
    });
  }

  render() {
    if (this.paused) return;
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;

    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    this.stop();
    this.stopAutoPlay();
    window.removeEventListener("resize", this.resize.bind(this));
    this.clicker?.removeEventListener("click", () => {});
    this.geometry.dispose();
    this.material.dispose();
    this.textures.forEach((texture) => texture.dispose());
    this.renderer.dispose();
  }
}
