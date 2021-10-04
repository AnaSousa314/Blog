const {New, sequelize} = require('../models');

const NewController = {
  index: async (req,res)=>{

    let id =  req.params.id;

    console.log(id);

    let newData = await New.findByPk(id,{
      attributes:[
        'id',
        'title',
        'subtitle',
        'content',
        [sequelize.fn('date_format',sequelize.col('date'),'%d de %b, %Y'),'date']
      ]
    })

    console.log(newData);
    res.render('pages/new',{newData});
  }
}

module.exports = NewController;