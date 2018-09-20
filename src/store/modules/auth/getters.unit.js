import state from "./state";
import getters from "./getters";

describe("@/state/modules/auth/getters", () => {
  test("loggedIn without currentUser", () => {
    expect(getters.loggedIn(state)).toBe(false);
  });

  test("loggedIn with currentUser", () => {
    state.currentUser = {};
    expect(getters.loggedIn(state)).toBe(true);
  });
});
