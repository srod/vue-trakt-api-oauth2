/* ============
 * Actions for the auth module
 * ============ */

import Vue from "vue";

export const check = ({ commit }) => {
  commit("check");
};

export const register = ({ commit }) => {
  commit("login", "RandomGeneratedToken");
  Vue.router.push({
    name: "home.index"
  });
};

export const login = ({ commit, dispatch }) => {
  commit("login", "RandomGeneratedToken");
  dispatch("account/find");
  Vue.router.push({
    name: "home.index"
  });
};

export const logout = ({ commit }) => {
  commit("logout");
  Vue.router.push({
    name: "home.index"
  });
};

export default {
  check,
  register,
  login,
  logout
};
