import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="overflow-hidden relative z-10 px-20 py-24 flex flex-col gap-16">
        <div className="grid grid-cols-[67rem_1fr] gap-8">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-3">
              <input
                className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 focus:bg-white/5 border border-gray/20 rounded-lg transition-all outline-none"
                type="text"
                placeholder="Name"
              />
              <input
                className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 focus:bg-white/5 border border-gray/20 rounded-lg transition-all outline-none"
                type="Email"
                placeholder="Email"
              />
            </div>
            <textarea
              className="col-span-2 p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 focus:bg-white/5 border border-gray/20 rounded-lg transition-all outline-none"
              name="Message"
              id="message"
              rows={2}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-end">a</div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Address</h3>
            <p className="text-lg text-gray">
              Unit 4 Marbridge Houser Harolds Road, Harlow, United Kingdom
            </p>
          </div>
          <div className="space-y-2">
            {" "}
            <h3 className="text-lg font-semibold text-foreground">Email Us</h3>
            <p className="text-lg text-gray">info@amlegacysports.com</p>
          </div>
          <div className="space-y-2">
            {" "}
            <h3 className="text-lg font-semibold text-foreground">
              Talk To An Expert
            </h3>
            <p className="text-lg text-gray">+47708321578</p>
          </div>
          <div className="flex justify-end items-start gap-3">
            <button
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Previous feedback"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Previous feedback"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              className="p-3 cursor-pointer bg-[#33333310] hover:bg-white/5 active:bg-primary/10 border border-gray/20 rounded-lg transition-all"
              aria-label="Previous feedback"
            >
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
      <section className="overflow-hidden bg-accent px-20 py-4">
        <div className="max-w-con text-gray text-base flex justify-between items-center">
          <p>All copyrights reserved © AM LEGACY SPORTS</p>
          <p>By: Sheharyar Saeed</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
