module.exports = {
    getPromotions(req, res, store) {
        res.status(200).send(store.promotions)
    },
    getPromotion(req, res, store) {
        res.status(200).send(store.promotions[req.params.id])
    },
    addPromotions(req, res, store) {
        let newPromotion = req.body
        let id = store.promotions.length
        store.promotions.push(newPromotion)
        res.status(201).send({id: id})
    },
    updatePromotion(req, res, store) {
        store.promotions[req.params.id] = req.body
        res.status(200).send(store.promotions[req.params.id])
    },
    removePromotion(req, res, store) {
        store.promotions.splice(req.params.id,1)
        res.status(204).send()
    }
}
