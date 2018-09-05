import { set_history } from "@/store/modules/trakt/mutations";
import state from "@/store/modules/trakt/state";

describe("Trakt Mutations", () => {
  test("set_history", () => {
    const history = { id: 1 };
    set_history(state, { history });
    expect(state.history).toBe(history);
  });
});
