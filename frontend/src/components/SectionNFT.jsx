import React from "react";
import Container from "./Container";
import { motion, useReducedMotion } from "framer-motion";

function SectionNFT() {
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

  const childVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 1 } },
  };

  return (
    <Container
      initial="initial"
      whileInView="visible"
      variants={containerMotion}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center overflow-hidden px-5 animate__animated animate__backInLeft"
    >
      <div className="relative z-10 mt-2 flex w-full max-w-screen-xl flex-col items-center text-[#33CB66] lg:min-h-[10vh] lg:flex-row">
        <div className="relative z-10 max-w-3xl pb-10 lg:py-12 lg:pb-20">
          <h1 className="font-heading mt-20 w-full max-w-[14ch] text-4xl font-normal leading-[1.25] sm:text-5xl  sm:leading-[1.15] lg:mt-0 lg:text-5xl lg:leading-[1.15] xl:text-7xl xl:leading-[1.15]">
           Beneficios
          </h1>
          <h2 className=" max-w-[53ch] pt-0 text-lg font-normal text-slate-700">
            Se convocarán alrededor de 4500 miembros, los cuales obtendrán su
            membresía por medio de un NFT, que pueden usar, alquilar o vender a
            terceros por medio de un mercado secundario.
          </h2>
          <h3 className="mt-3 max-w-[53ch] pt-0 text-4xl font-semibold  text-slate-700 ">
            Colecciones
          </h3>

          <section>
            <h4 className=" max-w-[53ch] pt-0 text-2xl font-semibold  ">
              Coleccion 1
            </h4>
            <p className="text-slate-800">• Aliados Comerciales, 10 piezas en total </p>
            <p className=" max-w-[53ch] text-slate-800">
              • Colección destinada para asociados estratégicos enfocados en el
              crecimiento de nuestro proyecto.
            </p>
            <p className="text-slate-800">• Grandes beneficios</p>
            <p className="text-slate-800">• Para más información contactanos.</p>
          </section>
          <section>
            <h4 className=" mt-4 max-w-[53ch] text-2xl font-semibold  ">
              Coleccion 2
            </h4>
            <p className="text-slate-800">• Se venderán un total de 4.500 NFT </p>
            <div>
              <p className="mt-4 ">• Preventa anticipada </p>
              <p className="ml-2 font-extrabold text-slate-800"> 500 NFT a 250 USDT</p>
            </div>
            <div>
              <p className="mt-4">• Segunda Preventa </p>
              <p className="ml-2 font-extrabold text-slate-800"> 4.500 NFT a 500 USDT</p>
            </div>
          </section>
          <section>
            <h4 className=" mt-5 max-w-[53ch] text-4xl font-semibold ">
              Beneficios
            </h4>
            <div>
              <p className="text-slate-800 ">
                • Los dueños de los NFT obtendrán un 50% de descuento permanente
                para ingresar a Bali Glam.
              </p>
              <p className="text-slate-800 ">
                • Al utilizar tu NFT para vender acceso a Bali Glam obtendrás
                50% de comisión sobre el precio de entrada.
              </p>
              <p className="text-slate-800 ">
                • Acceso exclusivo a las noticias sobre nuestras próximas sedes
                a nivel global.
              </p>
              <p className="text-slate-800 ">
                • Podrás vender tu NFT en cualquier momento que lo desees
              </p>
              <p className="text-slate-800 ">
                • Con 10 accesos comercializados a Bali Glam recuperas el 100%
                de tu inversión.
              </p>
              <p className="text-slate-800 ">
                • Se otorgará a cada miembro un plan de acción y herramientas de
                marketing, para hacer de su inversión algo muy rentable y
                sostenible en el tiempo.
              </p>
            </div>
          </section>
        </div>
        <div className="pointer-events-none -right-1 mt-16 flex-shrink-0 scale-150 select-none sm:scale-100 lg:absolute lg:mt-20">
        </div>
      </div>
      <Container
        initial="initial"
        whileInView="visible"
        variants={childVariants}
        viewport={{ once: true }}
      >
        <p className="mx-auto lg:mt-1 mt-32 mb-12  max-w-6xl text-center text-lg text-slate-700">
          Bali Glam iniciará sus Actividades en Colombia, construyendo su
          primera sede para darle paso a sus siguientes proyectos a nivel
          Global.
          <br />
          Bienes Raíces y Blockchain
        </p>
      </Container>
    </Container>
  );
}

export default SectionNFT;
