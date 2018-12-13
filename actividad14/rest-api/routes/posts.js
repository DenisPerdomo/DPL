module.exports = {
    getPosts(req, res, store) {
        res.status(200).send(store.posts)
    },
    addPost(req, res, store) {
        let newPost = req.body
        let id = store.posts.length
        store.posts.push(newPost)
        res.status(201).send({id: id})
    },
    updatePost(req, res, store) {
        store.posts[req.params.id] = req.body
        res.status(200).send(store.posts[req.params.id])
    },
    removePost(req, res, store) {
        store.posts.splice(req.params.id,1)
        res.status(204).send()
    }
}
