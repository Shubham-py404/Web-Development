const express = require('express')
const router = express.Router()
// ab humne blogs ke liye alg file bnali jo api se access kr skte hai 

router.get('/', (req, res) => {
  res.send('Birds home page')
})

// define the home page route
router.get('/about', (req, res) => {
  res.send('about blog')
})


// define the about route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})
 
module.exports = router