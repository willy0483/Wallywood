import express from "express";
import { userprofilesModel } from "../models/userprofilesModel.js";

export const userprofilesControllers = express.Router();

// get all userprofiles
userprofilesControllers.get("/userprofiles", async (req, res) => {
  const data = await userprofilesModel.getAllRecords();
  console.log(data);
  res.status(200).send(data);
});

// get single userprofiles by id
userprofilesControllers.get("/userprofiles/:id([0-9]*)", async (req, res) => {
  const data = await userprofilesModel.getRecordById(req.params.id);
  console.log(data);
  res.status(200).send(data);
});

// create a new userprofiles
userprofilesControllers.post("/userprofiles", async (req, res) => {
  const data = await userprofilesModel.createRecord(req.body);
  console.log(data);
  res.status(201).send(data);
});

// update a userprofiles
userprofilesControllers.put("/userprofiles", async (req, res) => {
  const data = await userprofilesModel.updateRecord(req.body);
  console.log(req.body, "updated");
  res.send(data);
});

// delete a userprofile
userprofilesControllers.delete("/userprofiles", async (req, res) => {
  const data = await userprofilesModel.deleteRecord(req.body);
  console.log(req.body);
  res.send(data);
});
