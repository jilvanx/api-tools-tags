module.exports = {
  up: async queryInterface => {
    return queryInterface.bulkInsert(
      'tool_tags',
      [
        {
          tool_id: 1,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 1,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 1,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 1,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 1,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 2,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 2,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 2,
          tag_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 2,
          tag_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 2,
          tag_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 2,
          tag_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 3,
          tag_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 3,
          tag_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 3,
          tag_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 3,
          tag_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 3,
          tag_id: 15,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tool_id: 3,
          tag_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('tool_tags', null, {});
  },
};
