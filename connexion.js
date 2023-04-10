import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
// console.log('PORT', dotenv.config())
const ENV = dotenv.config().parsed

const connexion = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
  });

// Verification que la connexion marche
//   try {
//     await connexion.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

  //

export default connexion