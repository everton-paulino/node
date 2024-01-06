const express = require("express")
const mongoose = req('mongoose');

const app = express()
const port = 3000
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Car = mongoose.model('Car', {
    name: String,
    model: String,
    color: String,
    identify: String
});

app.post("/", async (req, res) => {
    const car = new Car({
        name: req.body.title,
        model: req.body.title,
        color: req.body.title,
        identify: req.title
    })
    await car.save()
    res.send(car)
})