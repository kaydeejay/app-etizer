module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    spoonId: {
      type: DataTypes.INTEGER,
      allowNull: false
      // validate: {
      //   validate: { isInteger: { msg: "Invalid Number" } }
      // }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   len: {
      //     args: [1],
      //     msg: "Must be greater than 1 character."
      //   }
      // }
    },
    imageLink: {
      type: DataTypes.STRING,
      allowNull: true
      // validate: {
      //   validate: { isUrl: { msg: "Invalid Url" } }
      // }
    }
  });

  Recipe.associate = function(models) {
    // We're saying that a Recipe should belong to an Usdr
    // A Recipe can't be created without an User due to the foreign key constraint
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipe;
};
