import React from "react";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Container from "./Container";

function Carousel() {
  const [carousel, setCarousel] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  const containerMotion = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 80,
      transition: { duration: 0 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.5 },
    },
  };

  const childSequential = {
    initial: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 1, transition: { duration: 1 } },
  };

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 1 } },
  };


  const NextButton = () => {
    if (carousel === -2) {
      return null;
    } else {
      setCarousel(carousel - 1);
    }
  };

  const PrevButton = () => {
    if (carousel === 2) {
      return null;
    } else {
      setCarousel(carousel + 1);
    }
  };
  return (
    <Container
      initial="initial"
      whileInView="visible"
      variants={containerMotion}
    >
      <p id="proyecto" className="mt-36 text-center text-4xl font-semibold	tracking-[.15em] text-primary-900 sm:text-5xl lg:text-6xl">
        Nuestro Proyecto
      </p>
      <motion.div className="mt-[270px]" id="carousel" >
        <div
          className={clsx("", {
            prevLeftSecond: carousel === 0,
            prev: carousel === 1,
            selected: carousel === 2,
            next: carousel === 3,
            hidden: carousel === -1,
            hideLeft: carousel === -2,
          })}
        >
          <img
            src="/proyecto4.png"
            alt=""
            title=""
            width={600}
            height={600}
            className="aspect-[4/4]  bg-green-800 p-1"
          />
        </div>
        <div
          className={clsx("", {
            prev: carousel === 0,
            selected: carousel === 1,
            next: carousel === 2,
            nextRightSecond: carousel === 3,
            prevLeftSecond: carousel === -1,
            hideRight: carousel === -2,
          })}
        >
          <img
            src="/proyecto2.png"
            alt=""
            title=""
            width={600}
            height={600}
            className="aspect-[4/4]  bg-green-800 p-1"
          />
        </div>
        <div
          className={clsx("", {
            selected: carousel === 0,
            next: carousel === 1,
            nextRightSecond: carousel === 2,
            hideRight: carousel === 3,
            prev: carousel === -1,
            prevLeftSecond: carousel === -2,
          })}
        >
          <img
            src="/proyecto1.png"
            alt=""
            title=""
            width={600}
            height={600}
            className="aspect-[4/4] bg-green-800 p-1"
          />
        </div>
        <div
          className={clsx("", {
            next: carousel === 0,

            nextRightSecond: carousel === 1,
            hideRight: carousel === 2,
            selected: carousel === 3,
            selected: carousel === -1,
            prev: carousel === -2,
            prevLeftSecond: carousel === -3,
          })}
        >
          <img
            src="/proyecto3.png"
            alt=""
            title=""
            width={600}
            height={600}
            className="aspect-[4/4] bg-green-800 p-1"
          />
        </div>
        <div
          className={clsx("", {
            nextRightSecond: carousel === 0,
            next: carousel === -1,
            selected: carousel === -2,
            hidden: carousel === 1,
          })}
        >
          <img
            alt=""
            title=""
            width={600}
            height={600}
            className={clsx("aspect-[4/4] bg-green-800 p-1", {
              hidden: carousel === 2,
            })}
            src="/proyecto4.png"
          />
        </div>
      </motion.div>
      <div className="-mt-40 flex justify-center">
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={PrevButton}
            className="relative inline-flex items-center rounded-l-md border border-primary-800 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon
              className="h-5 w-5 text-primary-900"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            onClick={NextButton}
            className="relative -ml-px inline-flex items-center rounded-r-md border border-primary-800 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon
              className="h-5 w-5 text-primary-900"
              aria-hidden="true"
            />
          </button>
        </span>
      </div>
      <Container
        initial="initial"
        whileInView="visible"
        variants={childVariants}
        viewport={{ once: true }}
      >
        <p className="mx-auto mt-5 max-w-5xl text-center text-lg text-slate-700">
          Area comun para que todos nuestros visitantes disfruten de unas vistas
          soñadas, atardeceres realmente maravillosos.
          <br />
          Una piscina infinita con espacios separados, para que vivas una
          experiencia del total relajacion.
        </p>
        <p className="mx-auto mt-5 max-w-4xl text-center text-lg text-slate-700">
          Un mirador panoramico ubicado en la parte alta del complejo que nos
          brindara lo mejor de la cocina colombiana y asiatica
        </p>
      </Container>
    </Container>
  );
}

export default Carousel;
