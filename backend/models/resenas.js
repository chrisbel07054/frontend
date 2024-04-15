import { Schema, model } from "mongoose";

const resenasSchema = new Schema({
  nombreHuesped:{ type: String, required: true}, 
  tipoGlamReservado:{ type: String, required: true}, 
  calificacion: { type: Number, required: true },
  comentario: { type: String, required: true },
  recomendacion: {type: String, required: true}
});

export const resenas = model("resenas", resenasSchema);
