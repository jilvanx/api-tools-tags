import Tool from '../models/Tool';
import Tag from '../models/Tag';

class ToolController {
  async index(req, res) {
    const { tag } = req.query;

    let tools = await Tool.findAll({
      include: {
        association: 'tagsTool',
        attributes: ['name'],
      },
      order: ['id'],
    });

    if (tag) {
      tools = tools.filter(tool => tool.tags.includes(tag));
    }

    return res.json(tools);
  }

  async store(req, res) {
    const tool = await Tool.create(req.body);

    let { tags } = req.body;

    if (!tags) {
      tags = [];
    }

    const promisesTag = tags.map(async tag =>
      Tag.findOrCreate({
        where: { name: tag },
      })
    );

    Promise.all(promisesTag).then(_tags => {
      _tags.map(async value => tool.addTagsTool(value[0]));
    });

    const { id, title, link, description } = tool;

    return res.status(201).json({
      title,
      link,
      description,
      tags,
      id,
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    const tool = await Tool.findByPk(id);

    if (!tool) {
      return res.status(400).json({ error: 'Tool not found.' });
    }

    await tool.destroy();

    return res.status(204).json();
  }
}

export default new ToolController();
