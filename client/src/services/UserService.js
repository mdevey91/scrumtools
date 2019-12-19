import Api from './Api';

async function signup(userData) {
  return Api.post('/api/v1/account/register', userData);
}

async function login(userData) {
  return Api.post('/api/v1/account/login', userData);
}

export default {
  signup,
  login,
};
