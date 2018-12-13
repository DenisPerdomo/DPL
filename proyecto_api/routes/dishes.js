module.exports = {
    getDishes(req, res, store) {
        res.status(200).send(store.dishes)
    },
    getDish(req, res, store) {
        res.status(200).send(store.dishes[req.params.id])
    },
    addDishes(req, res, store) {
        let newDish = req.body
        let id = store.dishes.length
        store.dishes.push(newDish)
        res.status(201).send({id: id})
    },
    updateDish(req, res, store) {
        store.dishes[req.params.id] = req.body
        res.status(200).send(store.dishes[req.params.id])
    },
    removeDish(req, res, store) {
        store.dishes.splice(req.params.id,1)
        res.status(204).send()
    }
}
