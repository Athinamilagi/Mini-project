import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export default async function main(data) {
  const client = new MongoClient(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    const db = client.db(data.username);
    const collection = db.collection("Login Credentials");
    createDocument(collection);
  } catch (e) {
    console.error(e);
  }

  async function createDocument(collection) {
    try {
      const result = await collection.insertOne({
        name: "Mohan KumarG",
        description: "Bad ASS,GHOST,G",
        Password: "MGSQUAD",
      });
      await collection.deleteOne({ name: "Mohan Kumar G" });
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }
}
