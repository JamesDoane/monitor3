module.exports = {
    postFoodName: (req,res) => {
        let name = req.body.name
        let food = req.body.food
        res.status(200).send(name,food)
    }
}