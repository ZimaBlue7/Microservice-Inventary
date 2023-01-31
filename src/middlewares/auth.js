import jwt from "jsonwebtoken";
import config from "../config.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "No token provider" });

    jwt.verify(token, config.SECRET, (err, decoded) => {
      if (err)
        return res
          .status(500)
          .send({ message: "Failed to authenticate token" });
      req.user = decoded.user;
      next();
    });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorize" });
  }
};

export const isAdmin = async (req, res, next) => {
  const { roles } = req.body;
  console.log(roles);
  if (!roles.includes("Admin"))
    return res.status(403).send({ message: "Unauthorized access" });
  next();
};
