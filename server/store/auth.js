const moment = require('moment');
const { TOKEN_SECRET } = require('../config');
const jwt = require('jsonwebtoken');

class AuthenticationStore {

  static async authenticate(req, res, next) {
      const payload = await AuthenticationStore.consumeToken(req);
      console.log(payload);
      if (payload.status && payload.status !== 200) {
          return res.status(payload.status).send(payload.message);
      }
      req.user = payload;
      req.role = payload.role;
      next();
  }

  static async isAdmin(req, res, next) {
      if (!req.user || req.role !== 'ADMIN') {
          return res.status(401).send('Unauthorized');
      }
      next();
  }

  /** Create a JWT
   * @param user
   */

  static signJwt(payload) {
    payload.iat = moment().unix();
    payload.exp = moment().add(3, 'days').unix();
    return jwt.sign(payload, TOKEN_SECRET);
  }

  static verifyJwt(token) {
    let payload = null;

    try {
      payload = jwt.verify(token, TOKEN_SECRET);
      console.log(payload);
    } catch (err) {
      console.log(err);
    }
    return payload;
  }

  static bearer(token) {
    let payload = this.verifyJwt(token);
    return payload;
  }

  static async consumeToken(req) {
    let result = {};
    if (!req.headers.authorization) {
      result.status = 401;
      result.message = 'Please make sure your request has an authorization header';
      return result;
    }
    let token = req.headers.authorization.split(' ')[1];
    let type = req.headers.authorization.split(' ')[0];
    console.log('header:\n', req.headers.authorization, 'token: \n', token, 'type: \n' ,type);
    let payload;
    switch (type) {
      case 'Bearer':
        payload = AuthenticationStore.bearer(token);
        break;
      default:
        result.status = 401;
        result.message = 'Invalid token type.  Must be type Bearer or Basic';
        return result;
    }
    console.log('payload! \n', payload);
    if (!payload) {
      result.status = 401;
      result.message = 'Authorization Denied.';
      return result;
    }

    if (payload.exp <= moment().unix()) {
      result.status = 401;
      result.message = 'Token has expired';
      return result;
    }
    return payload;
  }
}

module.exports = AuthenticationStore;