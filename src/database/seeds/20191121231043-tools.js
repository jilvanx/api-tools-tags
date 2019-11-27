module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'tools',
      [
        {
          id: 1,
          title: 'Notion',
          link: 'https://notion.so',
          description:
            'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'json-server',
          link: 'https://github.com/typicode/json-server',
          description:
            'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: 'fastify',
          link: 'https://www.fastify.io/',
          description:
            'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('tools', null, {});
  },
};
