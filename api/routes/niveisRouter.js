const { Router } = require('express')
const NivelController = require('../controllers/NivelController.js')

const router = new Router();

router.get('/niveis', NivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegaUmNivel);
router.post('/niveis', NivelController.createNivel);
router.put('/niveis/:id', NivelController.updateNivel);
router.delete('/niveis/:id', NivelController.deleteNivel);


module.exports = router;