const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const {sequelize} = require('./database/db');
const tasksRouts = require('./routes/tasks');
const categoria = require('./models/categoria');
const inventario = require('./models/inventario');
const product = require('./models/product');


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(tasksRouts)

async function main() {
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(4000);
        console.log('server on port 4000');
    } catch (error) {
        console.error('unable to conecte to database', error);
    }
}

main();