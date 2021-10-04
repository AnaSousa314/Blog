const { Op } = require('sequelize');
const {New, sequelize} = require('../models');

const SearchController = {
  teste: async (req,res)=>{

    let {word} =  req.query;

    let news = await New.findAll({
      where:{
        title:{
          [Op.like]: `%${word}%`
        }
      },
      attributes:[
        'id',
        'title',
        'subtitle',
        'content',
        [sequelize.fn('date_format',sequelize.col('date'),'%d de %b, %Y'),'date']
      ]
    });

    console.log(news);

    res.render('pages/home',{news});

  }
}

module.exports = SearchController;