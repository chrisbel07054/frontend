import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.DB
export const mongoDB = () => {
  mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  }).then(() => {
    console.log('Conectado a MongoDB Atlas');
  }).catch(error => {
    console.error('Error con MongoDB Atlas:', error);
  });

  const connection = mongoose.connection;

  connection.on('connected', () => {
    console.log('Mongoose conectado a ', URL);
  });

  connection.on('error', (err) => {
    console.log('Mongoose tiene un error: ' + err);
  });

  connection.on('disconnected', () => {
    console.log('Mongoose se ha desconectado');
  });

  process.on('SIGINT', () => {
    connection.close(() => {
      console.log('Mongoose se ha desconectado debido a la cancelacion de la aplicación');
      process.exit(0);
    });
  });
};