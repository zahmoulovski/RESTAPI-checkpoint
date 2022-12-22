var jwt = require("jsonwebtoken");
const UserSchcema = require("../model/user");


exports.isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log("token", token);
    var decoded = jwt.verify(token, process.env.privateKey);
    console.log("decoded", decoded);
    if (!decoded) {
      return res.status(404).json({ errors });
    } 

    const user = await UserSchcema.findById(decoded.id);
    req.user = user;
    next();
  } catch (err) {
    res.status(500).send({ msg: "you are not " });
  }
};
