export class ControladorHabitaciones{
    constructor(){}
    registrandohabitacion(peticion,respuesta){
        try{
            let datosHabitacion = peticion.body
            console.log(datosHabitacion);
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

    buscandoHabitacion(peticion,respuesta){
        try{
            let idHabitacion = peticion.params.idhabitacion
            console.log(idHabitacion);
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
    buscandoHabitaciones(peticion,respuesta){
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
    editandoHabitacion(peticion,respuesta){        
        let idHabitacion = peticion.params.idhabitacion
        let datosHabitacion = peticion.body
        console.log(idHabitacion);
        console.log(datosHabitacion);
        try{
        respuesta.status(200).json({
            "mensaje":"exito agregando datos"
        })
    }
    catch(error){
        respuesta.status(400).json({
            "mensaje":"fallamos agregando datos"
    })
}}
    
}