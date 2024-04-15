import React, { useState } from "react";

const FormularioResena = () => {
    const [resena, setResena] = useState({
        nombreHuesped: "",
        tipoGlamReservado: "",
        calificacion: "",
        comentario: "",
        recomendacion: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setResena({
            ...resena,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!resena.nombreHuesped || !resena.tipoGlamReservado || !resena.calificacion || !resena.comentario || !resena.recomendacion) {
            setError("Por favor, completa todos los campos.");
            return;
        }

        if (resena.calificacion < 1 || resena.calificacion > 5) {
            setError("La calificación debe estar entre 1 y 5.");
            return;
        }

        setError("");

        try {
            const response = await fetch("http://localhost:3000/api/agencia/resenas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombreHuesped: resena.nombreHuesped,
                    tipoGlamReservado: resena.tipoGlamReservado,
                    calificacion: parseInt(resena.calificacion, 10),
                    comentario: resena.comentario,
                    recomendacion: resena.recomendacion,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log("Reseña enviada con éxito:", result);

            setError("");
            setResena({
                nombreHuesped: "",
                tipoGlamReservado: "",
                calificacion: "",
                comentario: "",
                recomendacion: "",
            });
        } catch (error) {
            console.error("Error enviando la reseña:", error);
            setError("Hubo un problema al enviar tu reseña. Por favor, intenta de nuevo.");
        }
    };

    return (
        <div id="opinion" className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md animate__animated animate__backInLeft">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tu opinión</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="nombreHuesped"
                    placeholder="Nombre del Huésped"
                    value={resena.nombreHuesped}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
                <input
                    type="text"
                    name="tipoGlamReservado"
                    placeholder="Tipo de Glam reservado"
                    value={resena.tipoGlamReservado}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
                <input
                    type="number"
                    name="calificacion"
                    placeholder="Calificación (1-5)"
                    value={resena.calificacion}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
                <textarea
                    name="comentario"
                    placeholder="Comentario"
                    value={resena.comentario}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
                <input
                    type="text"
                    name="recomendacion"
                    placeholder="Recomendación"
                    value={resena.recomendacion}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                />
                <button type="submit" className="w-full p-3 bg-green-700 text-white rounded-md hover:bg-green-600">Enviar Reseña</button>
            </form>
        </div>
    );
};

export default FormularioResena;
