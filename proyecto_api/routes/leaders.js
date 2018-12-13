module.exports = {
    getLeaders(req, res, store) {
        res.status(200).send(store.leaders)
    },
    getLeader(req, res, store) {
        res.status(200).send(store.leaders[req.params.id])
    },
    addLeaders(req, res, store) {
        let newLeader = req.body
        let id = store.leaders.length
        store.leaders.push(newLeader)
        res.status(201).send({id: id})
    },
    updateLeader(req, res, store) {
        store.leaders[req.params.id] = req.body
        res.status(200).send(store.leaders[req.params.id])
    },
    removeLeader(req, res, store) {
        store.leaders.splice(req.params.id,1)
        res.status(204).send()
    }
}
