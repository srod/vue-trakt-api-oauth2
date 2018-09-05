/* ============
 * Mutations for the trakt module
 * ============ */

export const set_history = (state, { history }) => {
  state.history = history;
};

export default {
  set_history
};
