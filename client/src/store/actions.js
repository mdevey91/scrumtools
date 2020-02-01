export default {
  setUser: ({ commit }, user) => {
    commit('setUser', user);
  },
  setJwt: ({ commit }, jwt) => {
    commit('setJwt', jwt);
  },
  setCurrentScrumBoard: ({ commit }, scrumBoard) => {
    commit('setCurrentScrumBoard', scrumBoard);
  },
};
