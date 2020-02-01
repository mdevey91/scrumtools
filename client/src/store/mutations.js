export default {
  setUser: (state, user) => {
    state.user = user;
  },
  setJwt: (state, jwt) => {
    state.jwt = jwt;
  },
  setCurrentScrumBoard: (state, currentScrumBoard) => {
    state.currentScrumBoard = currentScrumBoard;
  },
};
