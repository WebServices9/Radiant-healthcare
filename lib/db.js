// lib/db.js
import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectModule: mysql2,
  logging: false, // set to console.log to see raw SQL
  benchmark: true,
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected');
    await sequelize.sync({ alter: true }); // or force: true for full reset
    console.log('✅ All models synced');
  } catch (err) {
    console.error('❌ Error syncing DB:', err);
  }
})();

export default sequelize;
