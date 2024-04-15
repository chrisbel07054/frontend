import { resenas } from "../models/resenas.js";

export const getResenas = async (req, res) => {
    try {
        const resenasList = await resenas.find();
        res.status(200).json(resenasList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createResena = async (req, res) => {
    const resena = req.body;
    const newResena = new resenas(resena);
    try {
        await newResena.save();
        res.status(201).json(newResena);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}   

export const updateResena = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, puntuacion, fecha } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No existe una reseña con ese ID');
    const updatedResena = { nombre, descripcion, puntuacion, fecha, _id: id };
    await resenas.findByIdAndUpdate(id, updatedResena, { new: true });
    res.json(updatedResena);
    
}

export const deleteResena = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No existe una reseña con ese ID');
    await resenas.findByIdAndRemove(id);
    res.json({ message: 'Reseña eliminada exitosamente' });
}