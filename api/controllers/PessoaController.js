const database = require('../models')

class PessoaController{
    static async pegarTodasPessoas(req, res){ //read all people
        try{
            const todasPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasPessoas);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async findByOnePerson(req, res){ //find one person for id
        const {id} = req.params;
            try{
                const umaPessoa = await database.Pessoas
                    .findOne(
                        {where: 
                            {id: Number(id)}
                        });
                return res.status(200).json(umaPessoa)
            }catch(error){
                return res.status(500).json(error.message);
            }
    }

    static async createPerson(req, res){ //create one person
        const newPerson = req.body;

        try{
            const newPersonCreate = await database.Pessoas.create(newPerson);
            return res.status(200).json(newPersonCreate);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updatePerson(req,res){ //update a person
        const {id} = req.params;
        const novasInfos = req.body;

        try{
            await database.Pessoas.update(novasInfos, {where: {id: Number(id)}})
            const personUpdate = await database.Pessoas
            .findOne(
                {where: 
                    {id: Number(id)}
                });
            return res.status(200).json(personUpdate);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        const {id} = req.params;
        try{
            await database.Pessoas.destroy({where: {id: Number(id)}});
            return res.status(200).json({mensagem: `id ${id} deletado`});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    //http://localhost:3000/pessoas/1/matricula/5
    //http://localhost:3000/pessoas/estudanteId/matricula/matriculaId
    static async findByOneMatricula(req, res){ //find one person for id
        const {estudanteId, matriculaId} = req.params;
            try{
                const umaMatricula = await database.Matriculas
                    .findOne(
                        {where: 
                            {id: Number(matriculaId),
                            estudante_id: Number(estudanteId)}
                        });
                return res.status(200).json(umaMatricula)
            }catch(error){
                return res.status(500).json(error.message);
            }
    }

    static async createMatricula(req, res){ //create one person
        const {estudanteId} = req.params;
        const newMatricula = {...req.body, estudante_id: Number(estudanteId)};

        try{
            const newMatriculaCreate = await database.Matriculas.create(newMatricula);
            return res.status(200).json(newMatriculaCreate);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateMatricula(req,res){ //update a person
        const {estudanteId, matriculaId} = req.params;
        const novasInfos = req.body;

        try{
            await database.Matriculas.update(novasInfos, {where: 
                {id: Number(matriculaId), 
                estudante_id: Number(estudanteId)}
            })
            const matriculaUpdate = await database.Matriculas
            .findOne(
                {where: 
                    {id: Number(matriculaId)}
                });
            return res.status(200).json(matriculaUpdate);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteMatricula(req, res) {
        const {estudanteId, matriculaId} = req.params;
        try{
            await database.Matriculas.destroy({where: {id: Number(matriculaId)}});
            return res.status(200).json({mensagem: `id ${matriculaId} deletado`});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController