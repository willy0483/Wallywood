import express from "express";
import { genreposterrelModel } from "../models/genreposterrelModel.js";

export const genreposterrelControllers = express.Router();

// get all genreposterrel
genreposterrelControllers.get("/genreposterrel", async (req, res) => {
  const data = await genreposterrelModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get single genreposterrel by id
genreposterrelControllers.get(
  "/genreposterrel/:id([0-9]*)",
  async (req, res) => {
    const data = await genreposterrelModel.getRecordById(req.params.id);
    console.log(data);
    res.status(200).send(data);
  }
);

// create a new genreposterrel
genreposterrelControllers.post("/genreposterrel", async (req, res) => {
  const data = await genreposterrelModel.createRecord(req.body);
  console.log(data);
  res.status(201).send(data);
});

// update a genreposterrel
genreposterrelControllers.put("/genreposterrel", async (req, res) => {
  const data = await genreposterrelModel.updateRecord(req.body);
  console.log(req.body, "updated");
  res.send(data);
});

// delete a genreposterrel
genreposterrelControllers.delete("/genreposterrel", async (req, res) => {
  const data = await genreposterrelModel.deleteRecord(req.body);
  console.log(req.body);
  res.send(data);
});
