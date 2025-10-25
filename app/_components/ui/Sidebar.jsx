"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import MountAnim from "./MountAnim";
import { usePathname } from "next/navigation";

const Sidebar = ({ handleClose }) => {
  const pathname = usePathname();

  const transition = {
    duration: 1,
    ease: [0.45, 0, 0.55, 1],
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/Portfolio", label: "Portfolio" },
    { href: "/AboutUs", label: "About Us" },
    { href: "/Services", label: "Services" },
    { href: "/Pricing", label: "Pricing" },
    { href: "/BookACall", label: "Book A Call" },
    { href: "/OurBlogs", label: "Our Blogs" },
    { href: "/FAQ", label: "FAQ's" },
  ];

  const Icons = [
    { href: "/", src: "/icons/dribble.svg", alt: "dribble" },
    { href: "/", src: "/icons/linkedin.svg", alt: "linkedin" },
    { href: "/", src: "/icons/instagram.svg", alt: "instagram" },
  ];

  return (
    <motion.div
      key={"Navbar"}
      className="sm:hidden pointer-events-auto absolute w-full h-screenS left-0 top-0 z-[999]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        onClick={handleClose}
        className="absolute inset-0 bg-dark/50"
      ></motion.div>
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
        <div className="rounded-b-2xl p-6 pt-10 flex flex-col gap-[0.75rem] xs:gap-[1rem] items-start h-screenS w-[100vw]">
          <MountAnim margin="0px" delay={0.25}>
            <p className="text-xl xs:text-2xl w-full text-gray-800">Menu</p>
          </MountAnim>
          <div className="flex flex-col w-full">
            {links
              .filter((link) => pathname !== link.href)
              .map((link, idx) => (
                <MountAnim margin="0px" delay={0.5 + idx * 0.025}>
                  <Link
                    onClick={handleClose}
                    key={idx}
                    href={link.href}
                    className="block w-full hover:text-dark text-gray-700 border-b border-gray-bb hover:border-transparent transition-all duration-300 hover:shadow-[0_-4px_0_0_#fff]"
                  >
                    <Button
                      className={
                        "px-5 sm:px-4 h-[3.6rem] xs:h-[4.15rem] text-lg xs:text-xl rounded-xl whitespace-nowrap bg-transparent text-gray-500 hover:text-dark hover:bg-yellow-light border-none justify-between w-full"
                      }
                      iconClass={
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      }
                    >
                      {link.label}
                    </Button>
                  </Link>
                </MountAnim>
              ))}
          </div>
          <MountAnim className={"w-full mt-[0.5rem]"} margin="0px" delay={0.5}>
            <div className="flex w-full justify-between items-center gap-4 px-5 py-3 bg-[#FAF8F6]">
              <p className="text-lg text-gray-500 leading-[1.25]">
                Made by Sherry
              </p>
              <div className="flex gap-4">
                {Icons.map((icon, index) => (
                  <motion.div key={index}>
                    <Link
                      onClick={handleClose}
                      className="block hover:opacity-100 opacity-80 transition-opacity duration-500 rounded-xl"
                      href={icon.href}
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </MountAnim>

          <MountAnim className={"w-full"} margin="0px" delay={0.6}>
            <div className="w-full flex gap-4 justify-between text-gray-500 hover:text-dark transition-colors duration-300">
              <Link onClick={handleClose} href={"/"}>
                Privacy
              </Link>
              <Link onClick={handleClose} href={"/"}>
                Terms & Conditions
              </Link>
            </div>
          </MountAnim>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
