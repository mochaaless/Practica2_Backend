import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import getProduct from "./resolvers/getProduct.ts";
import postProduct from "./resolvers/postProduct.ts";
import deleteProductsbyID from "./resolvers/deleteProductsbyID.ts";

import addClient from "./resolvers/postClients.ts";
import getClients from "./resolvers/getClients.ts"
import deleteClientsbyID from "./resolvers/deleteClientsbyID.ts";

import postInvoices from "./resolvers/postInvoices.ts";
import getInvoicesbyID from "./resolvers/getInvoicesbyID.ts";

import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts"
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
.post("/products", postProduct)
.get("/products", getProduct)
.delete("/products/:id", deleteProductsbyID)

.post("/client", addClient)
.get("/client", getClients)
.delete("/client/:id", deleteClientsbyID)

.post("/invoice", postInvoices)
.get("/invoice/:id", getInvoicesbyID)

app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });