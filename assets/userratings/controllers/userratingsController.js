import express from "express";
import { userratingsModel } from "../models/userratingsModel.js";

export const userratingsControllers = express.Router();

// get all userratings
userratingsControllers.get("/userratings", async (req, res) => {
  const data = await userratingsModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get single userratings by id
userratingsControllers.get("/userratings/:id([0-9]*)", async (req, res) => {
  const data = await userratingsModel.getRecordById(req.params.id);
  console.log(data);
  res.status(200).send(data);
});

// create a new userratings
userratingsControllers.post("/userratings", async (req, res) => {
  const data = await userratingsModel.createRecord(req.body);
  console.log(data);
  res.status(201).send(data);
});

// update a userratings
userratingsControllers.put("/userratings", async (req, res) => {
  const data = await userratingsModel.updateRecord(req.body);
  console.log(req.body, "updated");
  res.send(data);
});

// delete a userprofile
userratingsControllers.delete("/userratings", async (req, res) => {
  const data = await userratingsModel.deleteRecord(req.body);
  console.log(req.body);
  res.send(data);
});
