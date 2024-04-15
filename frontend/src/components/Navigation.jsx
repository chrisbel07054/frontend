import React from "react";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-black"
      {...props}
    >
      {children}
    </Popover.Button>
  );
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navigation() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 z-30 mx-auto w-full animate__animated animate__backInUp">
      <nav className="flex items-center justify-between w-full px-2 py-2 border-b border-gray-100 shadow-sm navigation">
      <div className="flex flex-grow items-center">
          <Link to="/" className="flex items-center cursor-pointer">
            <img src="/logo.png" alt="Bali Glam" width="70" height="70" />
          </Link>
        </div>
        <div className="hidden lg:grid grid-flow-col gap-2 items-center text-xs sm:text-sm">
          <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="py-2 px-3 rounded-md text-green-700 hover:opacity-100 transition-opacity duration-150 ease-in-out">Sobre Nosotros</a>
          <a href="#ubicacion" onClick={(e) => { e.preventDefault(); scrollToSection('ubicacion'); }} className="py-2 px-3 rounded-md text-green-700 hover:opacity-100 transition-opacity duration-150 ease-in-out">Ubicación</a>
          <a href="#proyecto" onClick={(e) => { e.preventDefault(); scrollToSection('proyecto'); }} className="py-2 px-3 rounded-md text-green-700 hover:opacity-100 transition-opacity duration-150 ease-in-out">Nuestro Proyecto</a>
          <a href="#propiedades" onClick={(e) => { e.preventDefault(); scrollToSection('propiedades'); }} className="py-2 px-3 rounded-md text-green-700 hover:opacity-100 transition-opacity duration-150 ease-in-out">Propiedades</a>
          <a href="#experiencia" onClick={(e) => { e.preventDefault(); scrollToSection('experiencia'); }} className="py-2 px-3 rounded-md text-green-700 hover:opacity-100 transition-opacity duration-150 ease-in-out">Experiencia</a>
          <a href="#opinion" onClick={(e) => { e.preventDefault(); scrollToSection('opinion'); }} className="px-3 py-2 rounded-lg text-white bg-primary-800 hover:bg-primary-600 transition-all duration-150 ease-in-out">Tu Opinión</a>
        </div>
        <Popover className="lg:hidden z-[99999999]">
          {({ open }) => (
            <>
              <Popover.Button
                className={`relative z-[99999999] -m-2 p-2 inline-flex items-center rounded-lg ${open ? 'bg-gray-200/50' : ''} stroke-gray-900 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 dark:stroke-slate-50`}
                aria-label="Toggle site navigation"
              >
                {open ? <ChevronUpIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
              </Popover.Button>
              <AnimatePresence initial={false}>
                {open && (
                  <>
                    <Popover.Overlay
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-0"
                    />
                    <Popover.Panel
                      as={motion.div}
                      initial={{ opacity: 0, y: -32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: -32,
                        transition: { duration: 0.2 },
                      }}
                      className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-16 shadow-2xl shadow-gray-900/20"
                    >
                      <div className="space-y-4">
                        <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="block text-base leading-7 tracking-tight text-black">Sobre Nosotros</a>
                        <a href="#ubicacion" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="block text-base leading-7 tracking-tight text-black">Ubicacion</a>
                        <a href="#proyecto" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }} className="block text-base leading-7 tracking-tight text-black">Nuestro Proyecto</a>
                        <a href="#propiedades" onClick={(e) => { e.preventDefault(); scrollToSection('propiedades'); }} className="block text-base leading-7 tracking-tight text-black">Propiedades</a>
                        <a href="#experiencia" onClick={(e) => { e.preventDefault(); scrollToSection('experiencia'); }} className="block text-base leading-7 tracking-tight text-black">Experiencia</a>
                        <a href="#opinion" onClick={(e) => { e.preventDefault(); scrollToSection('opinion'); }} className="block text-base leading-7 tracking-tight text-blackt">Tu Opinión</a>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </nav>
    </header>
  );
}

export default Navigation;
