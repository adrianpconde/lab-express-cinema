const express = require("express");

const router = express.Router();

const movies = require("../controllers/movies.controller");

// Routes here
router.get("/", movies.home);
router.get("/movies", movies.list);
router.get("/movie/:id", movies.detail);

module.exports = router;
