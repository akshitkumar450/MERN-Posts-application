import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    // to get from frontend
    let token = req.headers?.authorization?.split(" ")[0];
    // console.log(token);
    const isCustomAuth = token?.length < 500;
    let decoded;
    // with our own JWT token
    if (token && isCustomAuth) {
      decoded = jwt.verify(token, "super-secret-string");
      // console.log(decoded?.user?._id);
      req.userId = decoded?.user?._id;
      // console.log(req.userId);
    } else {
      // for google auth token
      decoded = jwt.decode(token);
      // console.log(decoded);
      req.userId = decoded?.sub; //google oauth
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
