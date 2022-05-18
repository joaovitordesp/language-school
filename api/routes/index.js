const bodyParser = require('body-parser')
const pessoas = require('./pessoasRouter.js')
const niveis = require('./niveisRouter.js')
const turmas = require('./turmasRouter.js')

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
    app.use(niveis);
    app.use(turmas);
    
}