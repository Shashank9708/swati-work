const {createUser} = require("./user.controller");
const router = require("express").Router();

// router.post("/", createUser);
router.post("/", function(req, res){
  createUser
});

module.exports = router; 