const express = require('express')
const router = express.Router()
// ab humne shop ke liye alg file bnali jo api se access kr skte hai 

router.get('/', (req, res) => {
  res.send('shops home page')
})

// define the home page route
router.get('/shopping', (req, res) => {
  res.send('about shoppy')
})



module.exports = router