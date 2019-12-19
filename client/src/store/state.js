import Cookies from 'js-cookie';

export default {
  user: Cookies.get('jwt'),
};
