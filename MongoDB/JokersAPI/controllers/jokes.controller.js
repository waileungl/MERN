const Joke = require('../models/jokes.model')

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json(err))
}

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJokes => res.json(updatedJokes))
        .catch(err => res.json(err))
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}