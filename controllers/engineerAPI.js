const Engineer = require('../models/engineer')

// GET /api/engineers
exports.getAll = async (req, res) => {
  try {
    const engineers = await Engineer.find()
    res.json(engineers)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// GET /api/engineers/:id
exports.getOne = async (req, res) => {
  try {
    const engineer = await Engineer.findById(req.params.id)
    if (!engineer) return res.status(404).json({ error: 'Engineer not found' })
    res.json(engineer)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// POST /api/engineers
exports.create = async (req, res) => {
  try {
    const newEngineer = await Engineer.create(req.body)
    res.status(201).json(newEngineer)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// PUT /api/engineers/:id
exports.update = async (req, res) => {
  try {
    const updated = await Engineer.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updated) return res.status(404).json({ error: 'Engineer not found' })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// DELETE /api/engineers/:id
exports.remove = async (req, res) => {
  try {
    const deleted = await Engineer.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Engineer not found' })
    res.json({ message: 'Engineer deleted' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
