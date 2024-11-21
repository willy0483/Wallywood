import express from "express";
import { genresModel } from "../models/genresModel.js";

export const genresControllers = express.Router();

// get all genres
genresControllers.get("/genres", async (req, res) => {
  const data = await genresModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get single genres by id
genresControllers.get("/genres/:id([0-9]*)", async (req, res) => {
  const data = await genresModel.getRecordById(req.params.id);
  console.log(data);
  res.status(200).send(data);
});

// create a new genres
genresControllers.post("/genres", async (req, res) => {
  const data = await genresModel.createRecord(req.body);
  console.log(data);
  res.status(201).send(data);
});

// update a genres
genresControllers.put("/genres", async (req, res) => {
  const data = await genresModel.updateRecord(req.body);
  console.log(req.body, "updated");
  res.send(data);
});

// delete a genres
genresControllers.delete("/genres", async (req, res) => {
  const data = await genresModel.deleteRecord(req.body);
  console.log(req.body);
  res.send(data);
});
