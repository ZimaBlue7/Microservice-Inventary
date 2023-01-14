const { Router } = require('express')
const {Inventario} = require('../models/inventario')


const select = async (req, res) => {
    try {
        const inventario = await pool.query('SELECT * FROM inventario')
    console.log(usuarios)
    res.send('lista de tareas');

    } catch (error) {
        console.log(error.message)
    }
}

const insert = async (req, res) => {
    try {
        
        const { id, idProducto, cantidad } = req.body
        res.send('insertar datos');

        const result = await Inventario.create({
            id,
            idProducto,
            cantidad
    })

        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}

const deleted = async (req, res) => {
    res.send('borrar datos');
}

const update = async (req, res) => {
    res.send('actualizar datos');
}


module.exports = {

    select,
    insert,
    deleted,
    update
}