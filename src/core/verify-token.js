const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKEN_SECRET;

/*******************
 *  AUTHORIZATION  *
 *******************/

exports.auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      const payload = await jwt.verify(token, tokenSecret);
      req.user = payload;
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(400).json(new Error("no token in header"));
  }
};
