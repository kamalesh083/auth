import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userID) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  }); // 7 days

  res.cookie("token", token, {
    httpOnly: true, //XSS protection
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", //CSRF protection
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
