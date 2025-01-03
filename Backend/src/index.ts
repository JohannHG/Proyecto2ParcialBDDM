import "dotenv/config";
import  Express  from "express";
import morgan from "morgan";
import cors  from "cors"
import { querys } from "./controllers/querys.ctrl";
const app = Express();
const PORT = process.env.PORT || 3001;
// npm run dev (para correr proyecto)
//configuracion de middlewares
app.use(morgan('dev'));


app.use(cors({
  origin: '*', // Dirección de tu frontend Angular
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(Express.json())


//rutas del backend
app.post('/querys',querys)

//servidores creados
app.listen(PORT ,()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`)
})

