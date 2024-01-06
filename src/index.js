const express = require("express")
const mongoose = require('mongoose');

const app = express()
const port = 3000


const Car = mongoose.model('Car', {
    name: String,
    model: String,
    color: String,
    identify: String
});

app.get("/", async (req, res) => {
    const cars = await Car.find()
    return res.send(cars)
})

app.delete("/:id", async (req, res) => {
    const car = await Car.findByIdAndDelete(req.params.id)
    return res.send(car)
})

app.put("/:id", async(req, res) => {
    const car = await Car.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        model: req.body.model,
        color: req.body.color,
        identify: req.identify
    })
    return res.send(car)
})

app.post("/", async (req, res) => {
    const car = new Car({
        name: req.body.name,
        model: req.body.model,
        color: req.body.color,
        identify: req.identify
    })
    await car.save()
    return res.send(car)
})

app.listen(port, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log('App running')
})