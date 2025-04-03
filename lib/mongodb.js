import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI nicht gesetzt!");
}

if (process.env.NODE_ENV === "development") {
  // 🔁 Reuse MongoClient in Dev, um Hot-Reload-Probleme zu vermeiden
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // ✅ In Production: normal verbinden
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
