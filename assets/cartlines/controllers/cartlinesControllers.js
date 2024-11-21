import express from "express";
import { cartlinesModel } from "../models/cartlinesModel.js";

export const cartlinesControllers = express.Router();

// get all cartlines
cartlinesControllers.get("/cartlines", async (req, res) => {
  const data = await cartlinesModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get single cartlines by id
cartlinesControllers.get("/cartlines/:id([0-9]*)", async (req, res) => {
  const data = await cartlinesModel.getRecordById(req.params.id);
  console.log(data);
  res.status(200).send(data);
});

// create a new cartlines
cartlinesControllers.post("/cartlines", async (req, res) => {
  const data = await cartlinesModel.createRecord(req.body);
  console.log(data);
  res.status(201).send(data);
});

// update a cartlines
cartlinesControllers.put("/cartlines", async (req, res) => {
  const data = await cartlinesModel.updateRecord(req.body);
  console.log(req.body, "updated");
  res.send(data);
});

// delete a cartlines
cartlinesControllers.delete("/cartlines", async (req, res) => {
  const data = await cartlinesModel.deleteRecord(req.body);
  console.log(req.body);
  res.send(data);
});
