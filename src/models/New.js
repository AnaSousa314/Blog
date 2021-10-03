
module.exports = (sequelize,DataTypes)=>{
  const New = sequelize.define('New',{
    title:{
      type: DataTypes.STRING,
    },
    subtitle:{
      type: DataTypes.TEXT,
    },
    content:{
      type: DataTypes.TEXT,
    },
    date:{
      type: DataTypes.DATE,
    }
  },{
    tableName: 'news',
    createdAt: false,
    updatedAt: false
  });

  return New;
}

