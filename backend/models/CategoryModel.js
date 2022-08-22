import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Categories = db.define('category', {
    name: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.NUMBER
    },
    parent_category: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Categories;