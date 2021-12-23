export const getLoggedIn = (state) => Boolean(state.user.email);

export const getUserLoading = (state) => state.user.loading;

export const getToken = (state) => state.user.token;
