const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/moon-or-mars', function (req, res) {

  const whichPlanet = req.session.data['where-do-you-want-to-travel-to']

  if (whichPlanet === 'The moon') {
    res.redirect('moon-name')
  } else {
    res.redirect('mars-name')
  }
})

module.exports = router
