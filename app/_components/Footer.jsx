'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import StickyButton from "@/components/ui/StickyButton";

const Marquee = dynamic(() => import("../_components/ui/Marquee"));

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <>
      <Marquee direction="left" speed={0.7} />
      <footer id="contact" className="overflow-hidden relative z-10 px-con py-10 sm:py-20 flex flex-col gap-12 sm:gap-16">
         <form
          onSubmit={handleSubmit}
          className="relative grid grid-cols-1 sm:grid-cols-[67rem_1fr] gap-3 sm:gap-8 pt-8"
        >
          
        {status && (
          <p className="absolute top-0 w-full text-center text-sm text-gray">{status}</p>
        )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex flex-col gap-3">
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 sm:p-3 bg-[#33333310] hover:bg-white/5 focus:bg-white/5 border border-gray/20 rounded-lg outline-none"
                type="text"
                placeholder="Name"
              />
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 sm:p-3 bg-[#33333310] hover:bg-white/5 focus:bg-white/5 border border-gray/20 rounded-lg outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="sm:col-span-2 p-4 sm:p-3 bg-[#33333310] hover:bg-white/5 focus:bg-white/5 border border-gray/20 rounded-lg outline-none"
              rows={2}
              placeholder="Message"
            ></textarea>
          </div>

          <div className="flex justify-center sm:justify-end">
            <button type="submit">
              <StickyButton
                parentClass={"text-dark"}
                text={"reach out to book"}
                theme="light"
              />
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Address</h3>
            <p className="text-lg text-gray">
              Unit 4 Marbridge Houser Harolds Road, Harlow, United Kingdom
            </p>
          </div>
          <div className="space-y-1 sm:space-y-2">
            {" "}
            <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
            <p className="text-lg text-gray">info@amlegacysports.com</p>
          </div>
          <div className="space-y-1 sm:space-y-2">
            {" "}
            <h3 className="text-lg font-semibold text-foreground">
              Talk To An Expert
            </h3>
            <p className="text-lg text-gray">
              +44 7708 321 576
            </p>
          </div>
          <div className="flex justify-end items-start gap-3">
            <button
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/20 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Previous feedback"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/20 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Previous feedback"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/20 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Previous feedback"
            >
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
      <section className="overflow-hidden bg-accent px-con py-4">
        <div className="max-w-con max-sm:flex-col max-sm:text-center flex-wrap text-gray text-base flex justify-between items-center gap-1">
          <p>All copyrights reserved © AM LEGACY SPORTS</p>
          <p>Made By: Sheharyar Saeed</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
