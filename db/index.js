const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  port: process.env.DB_PORT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    throw new Error('Unable to connect to the database:', error);
  }
}

const sync = async () => {
  try {
    await sequelize.sync()
    console.log('Sync OK.');
  } catch (error) {
    throw new Error('Cannot sync', error);
  }
}



module.exports = {
  sequelize,
  connection,
  sync
}