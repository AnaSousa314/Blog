const {New, sequelize} = require('../models');

const HomeController = {
  index: async (req,res)=>{
    let news = await New.findAll({
      attributes:[
        'id',
        'title',
        'subtitle',
        'content',
        [sequelize.fn('date_format',sequelize.col('date'),'%d de %b,%Y'),'date']
      ]
    })

    console.log(news);
    res.render('pages/home',{news});
  }
}

module.exports = HomeController;