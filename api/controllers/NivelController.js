const database = require('../models')

class NivelController {

    static async pegaTodosOsNiveis(req, res) {
      try {
        const todosOsNiveis = await database.Niveis.findAll()
        return res.status(200).json(todosOsNiveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmNivel(req, res){ //find one level for id
        const {id} = req.params;
            try{
                const umNivel = await database.Niveis
                    .findOne(
                        {where: 
                            {id: Number(id)}
                        });
                return res.status(200).json(umNivel)
            }catch(error){
                return res.status(500).json(error.message);
            }
    }

    static async createNivel(req, res){ //create one person
        const newNevel = req.body;

        try{
            const newNevelCreate = await database.Niveis.create(newNevel);
            return res.status(200).json(newNevelCreate);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateNivel(req,res){ //update a person
        const {id} = req.params;
        const novasInfos = req.body;

        try{
            await database.Niveis.update(novasInfos, {where: {id: Number(id)}})
            const nivelUpdate = await database.Niveis
            .findOne(
                {where: 
                    {id: Number(id)}
                });
            return res.status(200).json(nivelUpdate);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteNivel(req, res) {
        const {id} = req.params;
        try{
            await database.Niveis.destroy({where: {id: Number(id)}});
            return res.status(200).json({mensagem: `id ${id} deletado`});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NivelController