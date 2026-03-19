
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

// product model definition
// each product fields are id, price, name , and description

export const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
});
