require("dotenv").config();
const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

// Create a ratelimiter that allows 10 requests per 20s
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(50, "60 s"),
});

module.exports = ratelimit;
