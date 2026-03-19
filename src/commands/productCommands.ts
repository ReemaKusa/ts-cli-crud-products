import { Product } from "../models/product";

// product commands implementation
export async function listProducts() {
  const products = await Product.findAll();
  console.log(products);
}

// to add a product
export async function addProduct(name: string, price: number, description?: string) {
  const product = await Product.create({
    name,
    price,
    description
  });

  console.log("Product added:", product.toJSON());
}


// to get the product by id

export async function getProduct(id: number) {
  const product = await Product.findByPk(id);

  if (!product) {
    console.log("Product not found");
    return;
  }

  console.log(product.toJSON());
}

// to update the product by id

export async function updateProduct(id: number, name: string, price: number) {
  const product = await Product.findByPk(id);

  if (!product) {
    console.log("Product not found");
    return;
  }

  product.set({
    name,
    price
  });

  await product.save();

  console.log("Product updated");
}

// to delete the product by id
export async function deleteProduct(id: number) {
  const product = await Product.findByPk(id);

  if (!product) {
    console.log("Product not found");
    return;
  }

  await product.destroy();

  console.log("Product deleted");
}