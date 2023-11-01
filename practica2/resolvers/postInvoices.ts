// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import InvoiceModelType from "../db/invoices.ts";
import  ClientModelType  from "../db/clients.ts";

const addClient = async (req: Request, res: Response) => {
  try {
    const {client, products, total} = req.body;
    
    if (!client || !products || !total) {
      res.status(400).send("Missing details in body");
      return;
    }
    const _id = client
    const exist_client = await ClientModelType.findOne({_id});

    if (!exist_client){res.status(400).send("Client not Found");}
    else{
      const newInvoice = new InvoiceModelType({client, products, total});
      await newInvoice.save();

      res.status(200).send(newInvoice);
    }
  } catch{
    res.status(500).send("Error");
    return;
  }
};

export default addClient;