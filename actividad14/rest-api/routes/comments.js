module.exports = {
  getComments(req, res, store) {
    res.status(200).send(store.posts[req.params.postId].comments)
  },
  addComment(req, res, store) {
      let newComment = req.body
      let id = store.posts[req.params.postId].comments.length
      store.posts[req.params.postId].comments.push(newComment)
      res.status(201).send({id: id})
  },
  updateComment(req, res, store) {
      store.posts[req.params.postId].comments[req.params.commentId] = req.body
      res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
  },
  removeComment(req, res, store) {
      store.posts[req.params.postId].comments.splice(req.params.commentId,1)
      res.status(204).send()
  }
}
