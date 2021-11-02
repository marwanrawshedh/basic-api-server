'use strict';

const express = require('express');

const { sport} = require('../models/index');

const sportRouter = express.Router();


// RESTful Route Delectation 
sportRouter.get('/sport', getsport); 
sportRouter.get('/sport/:id', getOnesport); 
sportRouter.post('/sport', createsport);
sportRouter.put('/sport/:id', updatesport); 
sportRouter.delete('/sport/:id', deletesport); 


async function getsport(req, res) {

  const allsport = await sport.findAll();
  res.status(200).json(allsport);

}

async function getOnesport(req, res) {
  const id = parseInt(req.params.id); // we parse the ID in case it was a string
  const findingsport= await sport.findOne({
    where: {
      id: id
    }
  });
  res.status(200).json(findingsport);
}

async function createsport(req, res) {
  const obj = req.body;
  console.log(obj)
  let createdsport= await sport.create(obj);
  res.status(201).json(createdsport);

}

async function updatesport(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foundsport = await sport.findOne({ where: { id: id } });
  const updatedsport = await foundsport.update(obj);
  res.status(201).json(updatedsport);
}

async function deletesport(req, res) {
  const id = parseInt(req.params.id);
  const deletedsport = await sport.destroy({ where: { id } });
  res.status(204).json(deletedsport);
}


module.exports = sportRouter;