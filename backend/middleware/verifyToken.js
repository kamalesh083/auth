import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - Invalid Token" });
    }

    req.userId = decode.id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
