// @ts-ignore <>
import { Request, Response } from "npm:express@4.18.2";
import ClientModelType from "../db/clients.ts";

const getClients = async (_req: Request, res: Response) => {
    try {
      const client = await ClientModelType.find().exec();
      res.status(200).send(client);
    } catch{
      res.status(404).send("Client not Found");
      return;
    }
  };
  
  export default getClients;