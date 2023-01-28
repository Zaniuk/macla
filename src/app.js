import express from "express";
import cors from "cors";
import routes from "./routers/router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () =>
  console.log(`ready.
Port : ${PORT}
`)
);

app.use(cors());

app.use("/", routes);
