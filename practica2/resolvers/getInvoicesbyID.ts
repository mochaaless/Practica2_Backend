// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import InvoiceModelType from "../db/invoices.ts";

const getInvoicesbyID = async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    const invoice = await InvoiceModelType.findOne({_id}).exec();

    if (!invoice) {
      res.status(404).send("Product not Found");
      return;
    }

    res.status(200).send(invoice);
  } catch{
    res.status(500).send("Error");
  }
};

export default getInvoicesbyID;