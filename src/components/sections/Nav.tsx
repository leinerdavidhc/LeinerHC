"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(getCurrentPath());
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(getCurrentPath());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function getCurrentPath() {
    return window.location.hash;
  }

  const LinkHref = [
    { href: "#inicio", text: "inicio" },
    { href: "#experiencia", text: "Experiencia" },
    { href: "#proyectos", text: "Proyectos" },
    { href: "#sobremi", text: "Sobre mí" },
  ];
  return (
    <nav className="flex w-full justify-between items-center px-2 h-14 sticky top-0 left-0 z-50 rounded-b-md transition-all duration-500">
       <a href="#inicio">
      <img src="/LOGO CLARO.png" alt="logo" className="h-12 w-24 block dark:hidden" />
      <img
        src="/LOGO OSCURO.png"
        alt="logo"
        className="h-12 w-24 hidden dark:block"
      />
    </a>

      <div
        className={`w-full md:w-max absolute md:static ${
          isOpen ? "top-14" : "top-[-1000px]"
        } duration-500 left-0 w-full flex flex-col md:flex-row gap-5 p-2.5 bg-background md:bg-transparent transition-all z-10`}
      >
        <ul className="flex flex-col md:flex-row gap-4 self-center">
          {LinkHref.map((link, key) => (
            <li
              key={key}
              className={`block text-nowrap w-max h-max p-2 cursor-pointer border-b ${
                activeLink === link.href
                  ? "border-tertiary"
                  : "border-transparent"
              } hover:border-tertiary transition-all`}
            >
              <a
                href={link.href}
                className="text-nowrap text-primary-foreground font-semibold md:text-lg text-xl"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 border w-max rounded-md border-secondary shadow-md cursor-pointer md:px-0 md:border-none  md:rounded-none md:shadow-none">
          <ModeToggle />
        </div>
      </div>

      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="flex md:hidden justify-center items-center relative size-5"
      >
        <Menu
          className={`${
            isOpen ? "scale-0" : "scale-100"
          } transition-all absolute`}
        />
        <X
          className={`${
            isOpen ? "scale-100" : "scale-0"
          } transition-all absolute`}
        />
      </button>
    </nav>
  );
}
