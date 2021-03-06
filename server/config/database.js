require("dotenv").config();

module.exports = {
  dialect: process.env.DB_DIALECT || "postgres",
  host: process.env.DB_HOST || "localhost",
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  port: process.env.DB_PORT || 5432,
  define: {
    timestamps: true,
    underscored: true,
  },
};
