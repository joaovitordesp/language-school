const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController.js')

const router = Router();

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.findByOneTurma)
router.post('/turmas', TurmaController.createTurma)
router.put('/turmas/:id', TurmaController.updateTurma)
router.delete('/turmas/:id', TurmaController.deleteTurma)


module.exports = router;