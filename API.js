import express from 'express'
import { rutas } from './routes/rutas.js'

export class API {
    constructor(){
         this.app = express()
         this.enrutarPeticiones()
    }
    levantarServidor(){
        
            this.app.listen(3000,function(){console.log("servidor encendido");})
    }
    enrutarPeticiones(){
        this.app.use(express.json())
        this.app.use('/', rutas)
    }
    conectarBD(){}

}