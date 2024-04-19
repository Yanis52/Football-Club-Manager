import express, { Application } from "express";
import EquipeRoute from "./routes/EquipeRoute";
import JoueurRoute from "./routes/JoueurRoute";
import MatchRoute from "./routes/MatchRoute";
import UserRoute from "./routes/UserRoute";

import mongoose from "mongoose";

const uri =
  "mongodb+srv://kenuhn:test@cluster0.43jw5mj.mongodb.net/football_manager";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  await mongoose.connect(uri);
  const db = await mongoose.connection.db.admin().command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
}
run().catch(console.dir);

const app: Application = express();

const PORT = 3002;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/api", EquipeRoute);
app.use("/api", JoueurRoute);
app.use("/api", MatchRoute);
app.use("/api", UserRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
