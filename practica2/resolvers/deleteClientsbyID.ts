// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import ClientModelType from "../db/clients.ts";

const deleteClientsbyID = async (req: Request, res: Response) => {
  const _id = req.params.id;

  try {
    const client = await ClientModelType.findByIdAndRemove({_id}).exec();

    if (!client) {
      res.status(404).send("Product not Found");
      return;
    }

    res.status(200).send("Client deleted correctly");
  } catch{
    res.status(500).send("Error");
  }
};

export default deleteClientsbyID;