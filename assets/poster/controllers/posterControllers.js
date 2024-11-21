import express from "express";
import { posterModel } from "../models/posterModel.js";

export const posterControllers = express.Router();

// get all posters
posterControllers.get("/poster", async (req, res) => {
  const data = await posterModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get single poster by id
posterControllers.get("/poster/:id([0-9]*)", async (req, res) => {
  const data = await posterModel.getRecordById(req.params.id);
  console.log(data);
  res.status(200).send(data);
});

// create a new poster
posterControllers.post("/poster", async (req, res) => {
  const data = await posterModel.createRecord(req.body);
  console.log(data);
  res.status(201).send(data);
});

// update a poster
posterControllers.put("/poster", async (req, res) => {
  const data = await posterModel.updateRecord(req.body);
  console.log(data);
  res.status(200).send(data);
});

// delete a poster
posterControllers.delete("/poster", async (req, res) => {
  const data = await posterModel.deleteRecord(req.body);
  console.log(req.body);
  res.send(data);
});
