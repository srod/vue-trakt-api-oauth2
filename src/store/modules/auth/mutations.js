/* ============
 * Mutations for the auth module
 * ============ */

import Vue from "vue";

export const check = state => {
  state.authenticated = !!localStorage.getItem("id_token");
  if (state.authenticated) {
    Vue.$http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "id_token"
    )}`;
  }
};

// export const register = () => {};

export const login = (state, { token }) => {
  state.authenticated = true;
  localStorage.setItem("id_token", token);
  Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const logout = state => {
  state.authenticated = false;
  localStorage.removeItem("id_token");
  Vue.$http.defaults.headers.common.Authorization = "";
};

export default {
  check,
  // register,
  login,
  logout
};
