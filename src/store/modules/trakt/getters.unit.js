import state from "./state";
import getters from "./getters";

const history = { property: 1 };

describe("@/store/modules/trakt/getters", () => {
  test("history should be null", () => {
    expect(getters.history(state)).toBe(null);
  });

  test("history should have property", () => {
    state.history = history;
    expect(getters.history(state)).toBe(history);
  });
});
