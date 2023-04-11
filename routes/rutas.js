import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

let controladorHabitaciones = new ControladorHabitaciones()
let controladorReservas     = new ControladorReservas()


// voy a separar y personalizar las rutas de cada servicio 
export let rutas = express.Router()
// HABITACIONES 
rutas.get('/buscarhabitaciones', controladorHabitaciones.buscandoHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitaciones.buscandoHabitacion)
rutas.post('/registrarhabitacion',controladorHabitaciones.registrandohabitacion)
rutas.put('/editarabitacion/:idhabitacion', controladorHabitaciones.editandoHabitacion)
// RESERVAS 
rutas.get('/buscarreserva', controladorReservas.buscandoReserva)
rutas.get('/buscarreservas',controladorReservas.buscandoReservas)
rutas.post('/crearreserva', controladorReservas.registrandoReserva )
rutas.post('/eliminarreserva', function (req, res) {res.send('estoy eliminando reserva')})
rutas.post('/editarreserva', controladorReservas.editandoReserva)