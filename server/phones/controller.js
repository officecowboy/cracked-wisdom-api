let model = require('./model')

let controller = {
  getById(request, response) {
    model
      .findById(request.params.id)
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getById()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  getAll(request, response) {
    model
      .find({})
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getAll()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  getRandom(request, response) {
    model
      .aggregate(
        [
          { $sample: { size: 1 } }
        ]
      )
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getRandom()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
  getRandomTen(request, response) {
    model
      .aggregate(
        [
          { $sample: { size: 10 } }
        ]
      )
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on getRandomTen()")
        response
          .status(500)
          .json({ error: "Something went wrong" })
      })
  },
}

module.exports = controller
