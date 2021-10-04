const { Op } = require('sequelize');
const {New, sequelize} = require('../models');

const SearchController = {
  search: async (req,res)=>{

    let {word} =  req.query;

    if(!word){
      return res.redirect('/')
    }

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

    if(news.length < 0){
      let 
    }

    console.log(news);

    res.render('pages/home',{news,word});

  }
}

module.exports = SearchController;