import React from "react";
import { motion } from "framer-motion";
import MountAnim from "./MountAnim";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Facebook } from "lucide-react";

const Sidebar = ({ handleClose, NavItems }) => {
  const transition = {
    duration: 1,
    ease: [0.45, 0, 0.55, 1],
  };

  return (
    <motion.div
      key="Sidebar"
      className="sm:hidden pointer-events-auto absolute w-full h-screen left-0 top-0 z-[999]"
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        onClick={handleClose}
        className="absolute inset-0 bg-black/50"
      ></motion.div>

      {/* Sidebar Body */}
      <motion.div
        initial={{
          width: "2rem",
          height: "2rem",
          scaleY: 0.3,
          scaleX: 0.6,
          right: "1.5rem",
          top: "2.375rem",
          borderRadius: "2rem",
        }}
        animate={{
          width: "100%",
          height: "100%",
          scaleY: 1,
          scaleX: 1,
          right: "0rem",
          top: "0rem",
          borderRadius: "0rem",
        }}
        exit={{
          width: "2rem",
          height: "2rem",
          scaleY: 0.3,
          scaleX: 0.6,
          right: "1.5rem",
          top: "2.375rem",
          borderRadius: "2rem",
        }}
        transition={transition}
        className="origin-top-right absolute right-0 top-0 z-10 bg-white text-dark h-full w-full overflow-hidden flex"
      >
        <div className="rounded-b-2xl px-4 pt-8 flex flex-col gap-3 xs:gap-4 items-start h-screen w-full">
          <MountAnim className={"w-full"} margin="0px" delay={0.25}>
            <p className="px-4 py-2 text-2xl text-gray-800 w-full bg-primary/20 rounded-lg">Menu</p>
          </MountAnim>

          {/* Links */}
          <div className="flex flex-col w-full">
            {NavItems.map((link, idx) => (
              <MountAnim key={idx} margin="0px" delay={0.5 + idx * 0.025}>
                <Link
                  href={link.src}
                  key={link.id}
                  onClick={handleClose}
                  className="text-md py-6 px-5 block w-full hover:text-dark text-gray-700 border-b border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-[0_-4px_0_0_#fff]"
                >
                  {link.label}
                </Link>
              </MountAnim>
            ))}
          </div>

          {/* Footer Section */}
          <MountAnim className="w-full mt-2" margin="0px" delay={0.5}>
            <div className="flex w-full justify-center items-center gap-4 px-5 py-3 rounded-lg">
              <div className="flex gap-4 text-background">
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
          </MountAnim>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
