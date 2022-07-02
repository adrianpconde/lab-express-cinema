const mongoose = require("mongoose")

const Movie = require("../models/movie.models")

module.exports.home = (req, res, next) => {
    res.render("index")
}

module.exports.list = (req, res, next) => {
    Movie.find()
    .then((movies) => {
        res.render("movies", { movies })
    })
    .catch
}

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render("detail", { movie })
    })
    .catch
}