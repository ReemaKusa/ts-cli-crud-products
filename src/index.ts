import { Command } from "commander";
import { sequelize } from "./config/database";
import {
  listProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct
} from "./commands/productCommands";

const program = new Command();

async function start() {
  await sequelize.sync();

  program
  //to list all the products
    .command("list")
    .description("List all products")
    .action(listProducts);

  program
    //to add a product
    .command("add <name> <price> [description]")
    .description("Add product")
    .action((name, price, description) => {
      addProduct(name, parseFloat(price), description);
    });

  program
    //to get the product by id  
    .command("get <id>")
    .description("Get product by id")
    .action((id) => {
      getProduct(parseInt(id));
    });

  program

    //to update the product by id  
    .command("update <id> <name> <price>")
    .description("Update product")
    .action((id, name, price) => {
      updateProduct(parseInt(id), name, parseFloat(price));
    });

  program
  //to delete the product by id    
    .command("delete <id>")
    .description("Delete product")
    .action((id) => {
      deleteProduct(parseInt(id));
    });

  program.parse(process.argv);
}

start();