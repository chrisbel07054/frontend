import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import swaggerOpenAPI from "swagger-ui-express";
dotenv.config()

import router from "./routes/routes.js";
import { mongoDB } from "./db/conectarMongo.js";
import specs from "./openapi-spec.js";


const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use('/api/agencia', router)
app.use('/api-docs', swaggerOpenAPI.serve, swaggerOpenAPI.setup(specs));

mongoDB()
app.listen(port, () => {
    console.log(`Servidor levantado en http://localhost:${port}/`)
})