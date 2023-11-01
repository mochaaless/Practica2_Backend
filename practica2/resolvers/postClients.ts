// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import ClientModelType from "../db/clients.ts";

const addClient = async (req: Request, res: Response) => {
  try {
    const {name, cif} = req.body;
    
    if (!name || !cif) {
      res.status(400).send("Missing details in body");
      return;
    }
    const newClient = new ClientModelType({name, cif});
    await newClient.save();

    res.status(200).send(newClient);
  } catch{
    res.status(500).send("Error");
    return;
  }
};

export default addClient;