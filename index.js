import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));

import { posterControllers } from "./assets/poster/controllers/posterControllers.js";
app.use(posterControllers);

import { genresControllers } from "./assets/genres/controllers/genresControllers.js";
app.use(genresControllers);

import { cartlinesControllers } from "./assets/cartlines/controllers/cartlinesControllers.js";
app.use(cartlinesControllers);

import { userprofilesControllers } from "./assets/userprofile/controllers/userprofilesControllers.js";
app.use(userprofilesControllers);

import { userratingsControllers } from "./assets/userratings/controllers/userratingsController.js";
app.use(userratingsControllers);

import { genreposterrelControllers } from "./assets/genrePosterRel/controllers/genrePosterRelController.js";
app.use(genreposterrelControllers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}
        http://localhost:${port}
        http://localhost:${port}/poster
        http://localhost:${port}/genres
        http://localhost:${port}/cartlines
        http://localhost:${port}/userprofiles
        http://localhost:${port}/userratings
        http://localhost:${port}/genrePosterRel
        `);
});
