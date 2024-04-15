import { Schema, model } from "mongoose";

const propiedadesLocalesSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precioPorNoche: { type: Number, required: true },
  caracteristicas: [{ type: String }],
  maximoHuespedes: { type: Number, required: true },
});

export const propiedades = model("propiedades", propiedadesLocalesSchema);