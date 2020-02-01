import store from '../store/index';

function getDefaultOptions() {
  return {
    headers: {
      Authorization: `Bearer ${store.state.jwt}`,
    },
  };
}

export default {
  getDefaultOptions,
};

export {
  getDefaultOptions,
};
