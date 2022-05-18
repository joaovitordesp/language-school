const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = new Router();

router.get('/pessoas', PessoaController.pegarTodasPessoas);
router.get('/pessoas/:id', PessoaController.findByOnePerson);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.findByOneMatricula);
router.post('/pessoas', PessoaController.createPerson);
router.post('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.createMatricula);
router.put('/pessoas/:id', PessoaController.updatePerson);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/:id', PessoaController.deletePerson);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deleteMatricula);

module.exports = router;