// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import ProductModelType from "../db/products.ts";

const deleteProductsbyID = async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    const product = await ProductModelType.findByIdAndRemove({_id}).exec();

    if (!product) {
      res.status(404).send("Product not Found");
      return;
    }

    res.status(200).send("Product deleted correctly");
  } catch{
    res.status(500).send("Error");
  }
};

export default deleteProductsbyID;