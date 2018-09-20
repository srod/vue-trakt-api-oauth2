import state from "./state";
import mutations from "./mutations";

const history = { property: 1 };

describe("@/state/modules/trakt/mutations", () => {
  test("set_user history should be null", () => {
    mutations.set_history(state, { history: null });
    expect(state.history).toBe(null);
  });

  test("set_user history should be set", () => {
    mutations.set_history(state, { history });
    expect(state.history).toBe(history);
  });
});
