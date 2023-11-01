// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import ProductModelType from "../db/products.ts";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, stock, description, price } = req.body;
    
    if (!name || !price) {
      res.status(400).send("Name and price are required");
      return;
    }

    const newProduct = new ProductModelType({name, stock, description,price});
    await newProduct.save();

    res.status(200).send(newProduct);
  } catch{
    res.status(500).send("Error");
    return;
  }
};

export default addProduct;