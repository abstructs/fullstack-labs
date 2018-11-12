var express = require('express')
var router = express.Router()

var bodyParser = require("body-parser")

router.use(bodyParser.urlencoded({ extended: true }))

// /* GET users listing. */
router.post('/', function(req, res, next) {
  const first_name = req.param("first_name", "")
  const last_name = req.param("last_name", "")

  console.log("First Name: " + first_name)
  console.log("Last Name: " + last_name)

  res.send("POST recieved")
});

module.exports = router
