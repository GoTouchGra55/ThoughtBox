const ratelimit = require("../config/upstash");

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit(req.ip);

    if (!success)
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });

    next();
  } catch (err) {
    console.error("Rate limit error", err);
    next(err);
  }
};

module.exports = rateLimiter;
