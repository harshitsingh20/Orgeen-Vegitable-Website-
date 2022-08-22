import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Products = db.define('product', {
    name: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    },
    parent_category: {
        type: DataTypes.STRING
    },
    ProductStocks: {
        type: DataTypes.STRING
    },
    regular: {
        type: DataTypes.NUMBER
    },
    sale: {
        type: DataTypes.NUMBER
    },
    description: {
        type: DataTypes.TEXT
    }
    ,
    image: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Products;