var express = require("express");

var router = express.Router();

// Import the model burger.js file
var daBurger = require("../models/burger.js");

// Make our routes for everything
router.get("/", function(req, res) {
  daBurger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.delete("/api/burgers", function(req, res) {
  daBurger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote, in a JSON format
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  daBurger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404, for notification of the error.
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  daBurger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404, for notification of the error.
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Exporting connection for the router to utilize
module.exports = router;
