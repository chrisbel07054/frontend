import { propiedades } from '../models/propiedades.js';

export const getPropiedades = async (req, res) => {
    try {
        const propiedadesList = await propiedades.find();
        res.status(200).json(propiedadesList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPropiedad = async (req, res) => {
    const propiedad = req.body;
    const newPropiedad = new propiedades(propiedad);
    try {
        await newPropiedad.save();
        res.status(201).json(newPropiedad);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePropiedad = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precioPorNoche, caracteristicas, maximoHuespedes } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No existe una propiedad con ese ID');
    const updatedPropiedad = { nombre, descripcion, precioPorNoche, caracteristicas, maximoHuespedes, _id: id };
    await propiedades.findByIdAndUpdate(id, updatedPropiedad, { new: true });
    res.json(updatedPropiedad);
    
}

export const deletePropiedad = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No existe una propiedad con ese ID');
    await propiedades.findByIdAndRemove(id);
    res.json({ message: 'Propiedad eliminada exitosamente' });
}