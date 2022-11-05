import { DataTypes, Sequelize } from "sequelize";
import db from "../config/database.js";

const { Datatypes } = Sequelize;

const Product = db.define('products', {
    title:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.DOUBLE
    }
    },{
        freezeTableName: true
    });
    export default Product;