const express = require('express')
const router = express.Router()
const data = require('./engineerData')
const views = require('./engineerViews')

// INDEX
router.get('/', data.index, views.index)
// NEW
router.get('/new', views.new)
// SHOW
router.get('/:id', data.show, views.show)
// EDIT
router.get('/:id/edit', views.edit)
// CREATE
router.post('/', data.create)
// UPDATE
router.put('/:id', data.update)
// DELETE
router.delete('/:id', data.destroy)

module.exports = router
