/* ============
 * Actions for the trakt module
 * ============ */

import TraktApi from "@/api/TraktApi";

export const get_history = async ({ commit }) => {
  let history = await new TraktApi().getHistory();
  commit("set_history", { history });
};

export const set_code = async ({ commit }, { code }) => {
  const { access_token } = await new TraktApi().getToken({ code });
  commit("auth/set_user", { token: access_token }, { root: true });
};

export default {
  get_history,
  set_code
};
