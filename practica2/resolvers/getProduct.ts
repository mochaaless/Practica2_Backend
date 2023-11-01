// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import ProductModelType from "../db/products.ts";

const getProduct = async (_req: Request, res: Response) => {
  try {
    const product = await ProductModelType.find().exec();
    res.status(200).send(product);
  } catch{
    res.status(404).send("Product not found");
    return;
  }
};

export default getProduct;