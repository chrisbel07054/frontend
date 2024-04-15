import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from "./components/Layout"; 
import SectionNFT from "./components/SectionNFT";
import Roadmap from "./components/Roadmap";
import Container from "./components/Container";
import Propiedades from "./components/Propiedades"
import Carousel from "./components/Carousel";
import FormularioResena from "./components/FormResenas"


function App() {
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

  const childSequential = {
    initial: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: [25, -15, 0], transition: { duration: 1 } },
  };

  return (
    <Router>
      <Layout>
        <div className="">
          <div className="mx-auto">
            <Container
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              className=" sm:overflow-hidden animate__animated animate__backInLeft"
            >
              <div className="lg:mt-0 mt-8">
                <img src="/header.jpg" alt="" title="" className="max-w-1220 max-h-1080 w-full"/>
              </div>
              <motion.div variants={childVariants} className="mx-auto flex max-w-7xl justify-center">
                <img src="/decoracion.svg" className="w-3/4" />
              </motion.div>
            </Container>
          </div>
          <div className="mb-12">
          <Container
            initial="initial"
            whileInView="visible"
            variants={containerMotion}
            viewport={{ once: true }}
            className="mx-auto mt-32 max-w-7xl px-6 lg:px-8"
          >
            <motion.div variants={containerMotion} className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 animate__animated animate__backInLeft">
              <motion.div variants={childSequential}>
                <img id="nosotros" src="/title.png" alt="" title="" className="max-w-600 max-h-600"/>
              </motion.div>
              <motion.div variants={childSequential} className="text-center">
                <p className="mx-auto mt-5 max-w-4xl text-lg text-slate-700">
                  Es un proyecto en bienes raices, en el campo turistico, que
                  aplica la tecnologia blockchain a su estructura, aqui
                  encontraras espacios magicos llenos de lujo, idelaes para una
                  escapada romantica, te encontraras en armonia con la naturaleza,
                  podras recargar alma, cuerpo y mente, aprovechando todas las
                  bondades del lugar. <br />
                  Ubicado en el departamento Del Valle en el municipio de Pradera,
                  a tan solo 1 hora 30 minutos de la ciudad de Cali y a un paso
                  del parque tematico porton del cielo.
                </p>
              </motion.div>
            </motion.div>
            </Container>
            <Container
            initial="initial"
            whileInView="visible"
            variants={containerMotion}
            viewport={{ once: true }}
            className="animate__animated animate__backInLeft"
          >
            <p id="ubicacion" className="mt-36 text-center text-4xl font-semibold	 tracking-[.15em] text-primary-900 sm:text-5xl lg:text-6xl ">
              Ubicacion
            </p>
          </Container>
            <section className="relative animate__animated animate__backInLeft">
              <div style={{ backgroundImage: `url(/ubicacion.png)` }} className="bg-ubicacion bg-green-800 bg-center bg-no-repeat" />
            </section>
            <Carousel/>
            <div className="bg-containt mt-12 animate__animated animate__backInLeft" />
            <SectionNFT/>
            <Propiedades/>
            <Roadmap />
            <FormularioResena/>
            <div className="flex justify-center animate__animated animate__backInLeft">
              <img src="/logo.png" alt="" title="" className="max-w-200 max-h-00" />
            </div>
          </div>
        </div>
      </Layout>
    </Router>
  );
}

export default App;

