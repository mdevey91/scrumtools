import Api from './Api';

async function signup(userData) {
  const { data } = Api.post('/api/v1/account/register', userData);
  return data;
}

async function login(userData) {
  const { data } = await Api.post('/api/v1/account/login', userData);
  return data;
}

export default {
  signup,
  login,
};
