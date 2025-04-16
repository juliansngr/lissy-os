const { MongoClient } = require("mongodb");

const mongoUrl = process.env.MONGODB_URI; // Ersetze mit deiner MongoDB-URL (z. B. MongoDB Atlas)
const dbName = "lissyos";

export default async function handler(req, res) {
  if (req.method === "POST" && req.body.type === "video.asset.ready") {
    const client = new MongoClient(mongoUrl);
    try {
      await client.connect();
      const db = client.db(dbName);
      const videos = db.collection("videos");
      const { data } = req.body;

      await videos.updateOne(
        { assetId: data.id },
        {
          $set: {
            assetId: data.id,
            playbackId: data.playback_ids[0].id,
            status: data.status,
            duration: data.duration,
            resolution: data.max_stored_resolution,
            createdAt: new Date(data.created_at * 1000),
            title: data.id, // Optional: Setze einen benutzerdefinierten Titel
          },
        },
        { upsert: true }
      );
      res.status(200).json({ message: "OK" });
    } catch (error) {
      console.error("Fehler:", error);
      res.status(500).json({ error: "Datenbankfehler" });
    } finally {
      await client.close();
    }
  } else {
    res.status(200).json({ message: "Ignored" });
  }
}
