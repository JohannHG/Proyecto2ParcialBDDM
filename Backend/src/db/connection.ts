
import mysql from "mysql2/promise";
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;


const poll = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
})

export default poll;