const Engineer = require('../models/engineer')

// INDEX
exports.index = async (req, res, next) => {
  try {
    const all = await Engineer.find()
    console.log('Engineers fetched for index:', all)
    res.locals.engineers = all
    next()
  } catch (err) {
    console.error('Error fetching engineers:', err.message)
    res.status(500).send('Failed to fetch engineers')
  }
}



// SHOW
exports.show = async (req, res, next) => {
  try {
    res.locals.engineer = await Engineer.findById(req.params.id)
    next()
  } catch (err) {
    res.status(404).send('Engineer not found')
  }
}

// CREATE
exports.create = async (req, res) => {
  try {
    await Engineer.create(req.body)
    res.redirect('/engineers')
  } catch (err) {
    res.status(400).send(err.message)
  }
}

// UPDATE
exports.update = async (req, res) => {
  try {
    await Engineer.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/engineers/${req.params.id}`)
  } catch (err) {
    res.status(400).send(err.message)
  }
}

// DELETE
exports.destroy = async (req, res) => {
  try {
    await Engineer.findByIdAndDelete(req.params.id)
    res.redirect('/engineers')
  } catch (err) {
    res.status(400).send(err.message)
  }
}
