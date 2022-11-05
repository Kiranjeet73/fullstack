import {Sequelize} from "sequelize";
//connnect database
const db = new Sequelize('mern_db', 'root','',{
    host:"localhost",
    dialect:"mysql"
});
export default db;