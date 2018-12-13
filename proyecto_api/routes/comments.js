module.exports = {
  getComments(req, res, store) {
    res.status(200).send(store.dishes[req.params.dishId].comments)
  },
  getComment(req, res, store) {
    res.status(200).send(store.dishes[req.params.dishId].comments[req.params.commentId])
  },
  addComment(req, res, store) {
      let newComment = req.body
      let id = store.dishes[req.params.dishId].comments.length
      store.dishes[req.params.dishId].comments.push(newComment)
      res.status(201).send({id: id})
  },
  updateComment(req, res, store) {
      store.dishes[req.params.dishId].comments[req.params.commentId] = req.body
      res.status(200).send(store.dishes[req.params.dishId].comments[req.params.commentId])
  },
  removeComment(req, res, store) {
      store.dishes[req.params.dishId].comments.splice(req.params.commentId,1)
      res.status(204).send()
  }
}
