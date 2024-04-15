import React, { useState, useEffect } from "react";

const Propiedades = () => {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/agencia/propiedades")
      .then((response) => response.json())
      .then((data) => setPropiedades(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="animate__animated animate__backInLeft"> 
      <p id="propiedades" className="mt-4 mb-16 text-center text-4xl font-semibold  text-primary-900 sm:text-5xl lg:text-6xl">
        Propiedades - Glam
      </p>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {propiedades.map((propiedad, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg bg-white">
            <img src={propiedad.imagen || "/proyecto1.png"} alt={propiedad.nombre} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{propiedad.nombre}</h3>
                <p className="mb-4">{propiedad.descripcion}</p>
                <div className="mb-2 font-medium">Precio por noche: ${propiedad.precioPorNoche}</div>
                <div className="mb-2">Características: {propiedad.caracteristicas.join(", ")}</div>
                <div className="font-medium">Máximo de huéspedes: {propiedad.maximoHuespedes}</div>
            </div>
            </div>
        ))}
      </div>
    </div> 
  );
};

export default Propiedades;
