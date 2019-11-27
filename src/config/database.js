module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: 'jilvanx',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
