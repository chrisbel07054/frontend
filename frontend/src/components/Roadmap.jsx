import React from "react";
import Container from "./Container";
import { motion, useReducedMotion } from "framer-motion";

function Roadmap() {
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
      className="container mx-auto h-full w-full animate__animated animate__backInLeft"
    >
      <p id="experiencia" className="mt-4 mb-16 text-center text-4xl font-semibold  text-primary-900 sm:text-5xl lg:text-6xl">
        Experiencias
      </p>
      <ol className="ml-12">
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />
            <div className="ml-6 block   max-w-md p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                En Bali Glam, no solo estamos construyendo propiedades; estamos creando un ecosistema único donde cada experiencia está diseñada para enriquecer su vida. Desde el lanzamiento de nuestra página web hasta el evento de lanzamiento en 2024, cada hito es una invitación a ser parte de algo transformador.{" "}
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="-mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />
            <div className="ml-6 block   max-w-md p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="-mt-4 text-lg font-semibold text-slate-800 ">
                  Redes sociales
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />

            <div className="ml-6 block   max-w-md p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                Nuestra página web se convierte en el portal hacia una nueva visión de lujo y sostenibilidad. Aquí comienza tu viaje. <br />
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-11 items-center justify-center rounded-full bg-[#33CB66] lg:w-6" />

            <div className="ml-6 block  max-w-[74ch]  p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                La primera oportunidad de inversión se abre con nuestra preventa de NFTs. Convertirse en propietario en Bali Glam significa unirse a una comunidad exclusiva con beneficios de ingresos residuales.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />

            <div className="ml-6 block  max-w-[74ch]  p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                Un encuentro digital para sumergirse en lo que Bali Glam promete ser: una mezcla de lujo, sostenibilidad y comunidad hotelera.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="-mt-5 -ml-3.5 flex h-6 w-11 items-center justify-center rounded-full bg-[#33CB66] lg:w-6" />
            <div className="ml-6 block   max-w-[84ch] p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="-mt-8 text-lg font-semibold text-slate-800 ">
                  Detalles y expectativas con Bali Glam, ¿quiénes somos? y ¿a
                  dónde queremos llegar?
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />

            <div className="ml-6 block   max-w-md p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                Seguimos expandiendo nuestra comunidad con una segunda preventa, ofreciendo una nueva serie de NFTs.<br />
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />

            <div className="ml-6 block  max-w-[74ch]  p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                  Primer evento Presencial
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="-mt-5 -ml-3.5 flex h-6 w-11 items-center justify-center rounded-full bg-[#33CB66] lg:w-6" />
            <div className="ml-6 block   max-w-[84ch] p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="-mt-8 text-lg font-semibold text-slate-800 ">
                  Presentación del equipo de Bali Glam, todo acerca de nuestro
                  proyecto.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />

            <div className="ml-6 block   max-w-md p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                  Comienzo de obra 1 de marzo 2023
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />
            <div className="ml-6 block   max-w-md p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                  Evento Recurrente Virtual (cada 3 meses)
                  La oportunidad de conocer al equipo detrás de Bali Glam y conectarse con futuros vecinos y compañeros visionarios.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="-mt-5 -ml-3.5 flex h-6 w-11 items-center justify-center rounded-full bg-[#33CB66] lg:w-6" />
            <div className="ml-6 block   max-w-[84ch] p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="-mt-8 text-lg font-semibold text-slate-800 ">
                  Seguimiento de Bali Glam, recorrido para demostrar los avances
                  del proyecto
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />
            <div className="ml-6 block   max-w-lg p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                Una celebración de prelanzamiento para marcar el comienzo de la fase final antes de la apertura oficial. Este evento podría incluir una cena exclusiva en las instalaciones del proyecto, permitiéndote experimentar el lugar y la comunidad de primera mano.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="-mt-5 -ml-3.5 flex h-6 w-11 items-center justify-center rounded-full bg-[#33CB66] lg:w-6" />
            <div className="ml-6 block   max-w-[74ch] p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="-mt-8 text-lg font-semibold text-slate-800 ">
                  Esto podría ser una cena, preferiblemente en las instalaciones
                  del proyecto y con un coste por participar.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="border-l-4 border-[#33CB66]">
          <div className="flex">
            <div className="mt-2 -ml-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#33CB66]" />
            <div className="ml-6 block   max-w-lg p-2 ">
              <div className="mb-4 flex justify-between">
                <p className="text-lg font-semibold text-slate-800 ">
                  Lanzamiento Bali Glam enero 2024
                  El lanzamiento oficial de Bali Glam. Este momento señalará la culminación de años de planificación, construcción y comunidad, presentando Bali Glam no solo como un lugar para vivir, sino como un estilo de vida.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </Container>
  );
}

export default Roadmap;
