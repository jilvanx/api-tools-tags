import Sequelize, { Model } from 'sequelize';

class Tool extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING(150),
        link: Sequelize.STRING(150),
        description: Sequelize.STRING,
        tags: {
          type: Sequelize.VIRTUAL,
          get() {
            const arrayTag = [];
            if (this.tagsTool) {
              this.tagsTool.map(tag => arrayTag.push(tag.name));
            }
            return arrayTag;
          },
        },
      },
      {
        defaultScope: {
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },

        sequelize,
        tableName: 'tools',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Tag, {
      as: 'tagsTool',
      through: 'tool_tags',
      foreignKey: 'tool_id',
    });
  }

  toJSON() {
    let values = { ...this.get() };
    delete values.tagsTool;

    values = JSON.parse(
      JSON.stringify(values, ['id', 'title', 'link', 'description', 'tags'])
    );

    return values;
  }
}

export default Tool;
