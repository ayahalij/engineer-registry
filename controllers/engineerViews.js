exports.index = (req, res) => {
  try {
    if (process.env.NODE_ENV === 'test') {
      return res.status(200).json({ engineers: res.locals.engineers }) // <-- bypass JSX
    }
    res.render('engineers/Index', { engineers: res.locals.engineers || [] })
  } catch (err) {
    console.error('View Render Error:', err.message)
    res.status(500).send('Error rendering view')
  }
}

exports.show = (req, res) => {
  res.render('engineers/Show', { engineer: res.locals.engineer })
}

exports.new = (req, res) => {
  res.render('engineers/New')
}

exports.edit = async (req, res) => {
  const Engineer = require('../models/engineer')
  const engineer = await Engineer.findById(req.params.id)
  res.render('engineers/Edit', { engineer })
}

