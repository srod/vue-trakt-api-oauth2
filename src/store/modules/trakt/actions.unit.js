import Vue from "vue";
import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

import actions from "./actions";

Vue.$http = Axios;

describe("@/store/modules/trakt/actions", () => {
  test("get_history", async () => {
    const mock = new MockAdapter(Axios);
    const data = { response: true };
    mock.onGet("/users/srod/history").reply(200, data);

    const commit = jest.fn();
    await actions.get_history({ commit });
    expect(commit).toBeCalled();
    expect(commit.mock.calls.length).toBe(1);
    expect(commit.mock.calls[0][0]).toBe("set_history");
    expect(commit.mock.calls[0][1].history).toEqual(data);
  });

  test("set_code", async () => {
    const mock = new MockAdapter(Axios);
    const data = { access_token: 2 };
    mock.onPost("/oauth/token").reply(200, data);

    const code = 1;
    const commit = jest.fn();
    await actions.set_code({ commit }, { code });
    expect(commit).toBeCalled();
    expect(commit.mock.calls.length).toBe(1);
    expect(commit.mock.calls[0][0]).toBe("auth/set_user");
    expect(commit.mock.calls[0][1].token).toEqual(data.access_token);
  });
});
