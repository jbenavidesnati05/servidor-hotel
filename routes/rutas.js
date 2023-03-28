import express from 'express'
// voy a separar y personalizar las rutas de cada servicio 
export let rutas = express.Router()
// HABITACIONES 
rutas.get('/buscarhabitacion', function (req, res) {res.send('estoy buscando habitacion')})
rutas.get('/buscarhabitaciones', function (req, res) {res.send('estoy buscando habitaciones')})
rutas.post('/registrarhabitacion', function (req, res) {res.send('estoy registrando una habitacion')})
rutas.put('/editarabitacion', function (req, res) {res.send('estoy editando una habitacion')})
// RESERVAS 
rutas.get('/buscarreserva', function (req, res) {res.send('estoy buscando reserva')})
rutas.get('/buscarreservas', function (req, res) {res.send('estoy buscando reservas')})
rutas.post('/crearreserva', function (req, res) {res.send('estoy creando reservas')})
rutas.post('/eliminarreserva', function (req, res) {res.send('estoy eliminando reserva')})
rutas.post('/editarreserva', function (req, res) {res.send('estoy editando reserva')})