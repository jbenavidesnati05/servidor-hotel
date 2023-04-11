export class ControladorReservas{
    constructor(){}

    registrandoReserva(peticion,respuesta){
        try{
            let datosReserva = peticion.body
            console.log(datosReserva);
            respuesta.status(200).json({
                "mensaje":"Reserva con exito"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos haciendo la reserva"
        })
    }
}

    buscandoReserva(peticion,respuesta){
        try{
            let idReserva = peticion.params.idReserva
            console.log(idReserva);
            respuesta.status(200).json({
                "mensaje":"exito agregando datos"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos agregando datos"
        })
    }
    }

    buscandoReservas(peticion,respuesta){
        try{
            respuesta.status(200).json({
                "mensaje":"exito agregando datos"
            })
        }
        catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos agregando datos"
        })
    }
    }

    editandoReserva(peticion,respuesta){        
        let idReserva = peticion.params.idreserva
        let datosReserva = peticion.body
        console.log(idReserva);
        console.log(datosReserva);
        try{
        respuesta.status(200).json({
            "mensaje":"exito agregando datos"
        })
    }
    catch(error){
        respuesta.status(400).json({
            "mensaje":"fallamos agregando datos"
        })
        }
    }
}