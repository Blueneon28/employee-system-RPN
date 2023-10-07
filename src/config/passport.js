const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const { tokenTypes } = require('./tokens');
const prisma = require('../../prisma/client');

const cookieExtractor = (req) => {
  let token;
  if (req && req.cookies) token = req.cookies['jwt'];
  return token;
};

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: cookieExtractor,
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await prisma.user.findFirst({ where: { id: payload.sub } });
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
