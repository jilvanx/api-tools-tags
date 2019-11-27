module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'tags',
      [
        {
          id: 1,
          name: 'organization',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'planning',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'collaboration',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'writing',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'calendar',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: 'api',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: 'json',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: 'schema',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          name: 'node',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          name: 'github',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          name: 'rest',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          name: 'web',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          name: 'framework',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 14,
          name: 'http2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 15,
          name: 'https',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 16,
          name: 'localhost',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('tags', null, {});
  },
};
