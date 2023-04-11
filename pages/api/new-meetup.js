// api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = JSON.parse(data);

    const client = await MongoClient.connect(
      "mongodb+srv://maher:57VBKiveIORigtZB@cluster0.mdlp9vg.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });

    client.close();

    res.status(201).json({ message: "Meetup Inserted..." });
  }
};

export default handler;
