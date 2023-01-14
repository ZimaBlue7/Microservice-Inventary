const {Router} = require('express');
const { deleted,select,insert,update } = require('../controllers/crudController');

const router = Router();


router.get('/seleccionar', select)

router.post('/insertar',insert)

router.delete('/eliminar',deleted)

router.put('/actualizar',update)



module.exports = router;