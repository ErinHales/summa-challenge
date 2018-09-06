module.exports = {
  getUsers: (req, res) => {
    req.app.get("db").get_all_users(req.session.user.email).then(response => {
      res.status(200).send(response);
    }).catch(err => {
      res.status(500);
      console.log(err);
    })
  },
  getUser: (req, res) => {
    res.status(200).send(req.session.user);
  },
  findUser: (req, res) => {
    req.app.get("db").find_user(req.params.email).then(response => {
      res.status(200).send(response)
    }).catch(err => {
      res.status(404);
      console.log(err);
    })
  }
}