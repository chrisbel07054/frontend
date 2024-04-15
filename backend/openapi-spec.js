import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Propiedades y Reseñas',
      version: '1.0.0',
      description: 'Una API simple para gestionar propiedades y reseñas de un sistema de bienes raíces.',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/agencia/',
        description: 'Servidor de Desarrollo',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);

export default specs;