import express from "express";

import {
  getPropiedades,
  createPropiedad,
  updatePropiedad,
  deletePropiedad,
} from "./../controllers/propiedadesController.js";

import {
    getResenas,
    createResena,
    updateResena,
    deleteResena,
} from "./../controllers/resenasController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Propiedad:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *         - precioPorNoche
 *         - maximoHuespedes
 *       properties:
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         precioPorNoche:
 *           type: number
 *         caracteristicas:
 *           type: array
 *           items:
 *             type: string
 *         maximoHuespedes:
 *           type: number
 *     Error:  # Definido dentro del mismo nivel de 'schemas' como 'Propiedad'
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *   responses:
 *     PropiedadNotFound:
 *       description: La propiedad no fue encontrada
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Resena:
 *       type: object
 *       required:
 *         - nombreHuesped
 *         - tipoGlamReservado
 *         - calificacion
 *         - comentario
 *         - recomendacion
 *       properties:
 *         nombreHuesped:
 *           type: string
 *           description: Nombre del huésped que deja la reseña.
 *         tipoGlamReservado:
 *           type: string
 *           description: El tipo de glam reservado por el huésped.
 *         calificacion:
 *           type: number
 *           description: Calificación dada al glam, en una escala de 1 a 5.
 *           minimum: 1
 *           maximum: 5
 *         comentario:
 *           type: string
 *           description: Comentario o feedback proporcionado por el huésped.
 *         recomendacion:
 *           type: string
 *           description: Recomendaciones adicionales proporcionadas por el huésped.
 */

/**
 * @swagger
 * /propiedades:
 *   get:
 *     summary: Obtiene una lista de todas las propiedades
 *     tags: [Propiedades]
 *     responses:
 *       200:
 *         description: Lista de propiedades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Propiedad'
 */
router.get("/propiedades", getPropiedades);
/**
 * @swagger
 * /propiedades:
 *   post:
 *     summary: Crea una nueva propiedad
 *     tags: [Propiedades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Propiedad'
 *     responses:
 *       201:
 *         description: Propiedad creada exitosamente
 */

router.post("/propiedades", createPropiedad);
/**
 * @swagger
 * /propiedades/{id}:
 *   patch:
 *     summary: Actualiza una propiedad existente
 *     tags: [Propiedades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la propiedad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Propiedad'
 *     responses:
 *       200:
 *         description: Propiedad actualizada exitosamente
 */

router.patch("/propiedades/:id", updatePropiedad);
/**
 * @swagger
 * /propiedades/{id}:
 *   delete:
 *     summary: Elimina una propiedad
 *     tags: [Propiedades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la propiedad
 *     responses:
 *       204:
 *         description: Propiedad eliminada exitosamente
 */
router.delete("/propiedades/:id", deletePropiedad);

/**
 * @swagger
 * /resenas:
 *   get:
 *     summary: Obtiene una lista de todas las reseñas
 *     tags: [Reseñas]
 *     responses:
 *       200:
 *         description: Lista de reseñas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resena'
 */

router.get("/resenas", getResenas);

/**
 * @swagger
 * /resenas:
 *   post:
 *     summary: Crea una nueva reseña
 *     tags: [Reseñas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resena'
 *     responses:
 *       201:
 *         description: Reseña creada exitosamente
 */

router.post("/resenas", createResena);

/**
 * @swagger
 * /resenas/{id}:
 *   patch:
 *     summary: Actualiza una reseña existente
 *     tags: [Reseñas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reseña
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resena'
 *     responses:
 *       200:
 *         description: Reseña actualizada exitosamente
 */
router.patch("/resenas/:id", updateResena);

/**
 * @swagger
 * /resenas/{id}:
 *   delete:
 *     summary: Elimina una reseña
 *     tags: [Reseñas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la reseña
 *     responses:
 *       204:
 *         description: Reseña eliminada exitosamente
 */
router.delete("/resenas/:id", deleteResena);

export default router;
