import userModel from "./user.model.js";

export default class userController {
  getAll(req, res) {
    const users = userModel.getAll();
    res.status(200).send(users);
  }
  signup(req, res) {
    // console.log(req.body);
    const { name, email, pass, type } = req.body;
    const newUserAdded = userModel.signup(name, email, pass, type);
    console.log(newUserAdded);
    res.status(201).send(newUserAdded);
  }
  signin(req, res) {
    const { email, pass } = req.body;
    const result = userModel.signin(email, pass);
    if (!result) {
      res.status(404).send("user not found!");
    } else res.status(200).send("welcome back!");
  }
}
