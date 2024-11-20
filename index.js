import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));

import { posterControllers } from "./assets/poster/controllers/posterControllers.js";
app.use(posterControllers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}
        http://localhost:${port}
        http://localhost:${port}/poster`);
});

// poster id [1801 1800 1802] is test need to remove
