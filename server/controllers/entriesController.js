const Entry = require('../models/Entry');

async function index(req, res) {
    try {
        const entries = await Entry.getAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

async function show(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.getOneById(id);
        res.status(200).json(entry);
    } catch (err) {
        res.status(404).json({error: err.message});
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const newEntry = await Entry.create(data);
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

async function update(req, res) {
    try {

    } catch (err) {

    }
}
async function destroy(req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.getOneById(id);
        const result = await entry.destroy();
        res.json(result);
    } catch (err) {
        res.status(404).json({error: err.message});
    }
}

module.exports = { index, show, create, update, destroy }