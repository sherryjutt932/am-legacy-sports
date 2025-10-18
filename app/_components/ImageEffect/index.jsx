"use client";

import { useEffect, useRef } from "react";
import { Sketch } from "./sketch";

export default function ImageEffect({ config, controls = false }) {
  const containerRef = useRef(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize the sketch with demo4 configuration
    // sketchRef.current = new Sketch({
    //   fragment: demo5Config.fragmentShader,
    //   uniforms: demo5Config.uniforms,
    //   debug: demo5Config.debug,
    //   images: demo4Config.images,
    //   duration: demo4Config.duration,
    //   easing: demo4Config.easing,
    // });

    // sketchRef.current = new Sketch({
    //   fragment: demo4Config.fragmentShader,
    //   images: demo4Config.images,
    //   duration: demo4Config.duration,
    //   easing: demo4Config.easing,
    // });

    sketchRef.current = new Sketch({
      fragment: config.fragment,
      images: config.images,
      duration: config.duration,
      easing: config.easing,
      debug: config.debug,
      uniforms: config.uniforms,
      autoPlay: config.autoPlay,
      autoPlayDuration: config.autoPlayDuration,
      loop: config.loop,
    });

    // sketchRef.current = new Sketch({
    //   fragment: demo6Config.fragment,
    //   images: demo6Config.images,
    //   debug: demo6Config.debug,
    //   uniforms: demo6Config.uniforms,
    // });

    // Cleanup on unmount
    return () => {
      if (sketchRef.current) {
        sketchRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="overflow-hidden relative w-full h-full">
      {/* WebGL container */}
      <div id="slider" ref={containerRef} className="w-full h-full" />
      {controls && (
        <div
          id="content"
          className="absolute inset-0 cursor-pointer z-10"
          aria-label="Click to advance to next image"
        />
      )}
    </div>
  );
}
