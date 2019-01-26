import express from "express";
import mongodb from "mongodb";

const app = express();
const dbURL = "mongodb://localhost/crudwithredux";

mongodb.MongoClient.connect(
  dbURL,
  { useNewUrlParser: true },
  (err, db) => {
    app.get("/api/games", (req, res) => {
      db.collection.games.find({}).toArray((err, games) => {
        res.json({ games });
      });
    });

    app.listen(8080, () => console.log("App listen on port 8080"));
  }
);
