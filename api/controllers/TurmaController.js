const database = require('../models')

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async findByOneTurma(req, res){ //find one person for id
      const {id} = req.params;
          try{
              const umaTurma = await database.Turmas
                  .findOne(
                      {where: 
                          {id: Number(id)}
                      });
              return res.status(200).json(umaTurma)
          }catch(error){
              return res.status(500).json(error.message);
          }
  }

  static async createTurma(req, res){ //create one person
      const newturma = req.body;

      try{
          const newTurmaCreate = await database.Turmas.create(newturma);
          return res.status(200).json(newTurmaCreate);
      }catch(error){
          return res.status(500).json(error.message);
      }
  }

  static async updateTurma(req,res){ //update a person
      const {id} = req.params;
      const novasInfos = req.body;

      try{
          await database.Turmas.update(novasInfos, {where: {id: Number(id)}})
          const turmaUpdate = await database.Turmas
          .findOne(
              {where: 
                  {id: Number(id)}
              });
          return res.status(200).json(turmaUpdate);
      }catch(error){
          return res.status(500).json(error.message);
      }
  }

  static async deleteTurma(req, res) {
      const {id} = req.params;
      try{
          await database.Turmas.destroy({where: {id: Number(id)}});
          return res.status(200).json({mensagem: `id ${id} deletado`});
      }catch(error){
          return res.status(500).json(error.message);
      }
  }
}

module.exports = TurmaController;
