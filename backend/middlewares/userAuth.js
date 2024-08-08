require('dotenv').config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token=authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;
    console.log(decoded.userId);

    next();
  } catch (err) {
    console.log("token verification error")
    return res.status(403).json({});
  }
};

module.exports = {
  authMiddleware,
};
