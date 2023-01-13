const express = import('express');
const morgan = import("morgan");
const cors = import('cors');
const {sequelize} = import('./database/database');
const tasksRouts = import('./routes/tasks');
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