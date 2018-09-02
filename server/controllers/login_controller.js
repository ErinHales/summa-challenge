module.exports = {
  signUp: (req, res) => {
    let {name, username, email, password} = req.body;
    req.session.user = req.body;
    req.app.get("db").create_new_user([name, username, email, password]).then(response => {
      res.sendStatus(201);
    }).catch(err => {
      res.status(401);
      console.log(err);
    })
  },
  login: (req, res) => {
    let {email} = req.params;
    req.app.get("db").find_user(email).then(response => {
      res.status(200).send(response);
    }).catch(err => {
      res.status(401);
      console.log(err);
    })
  }
}