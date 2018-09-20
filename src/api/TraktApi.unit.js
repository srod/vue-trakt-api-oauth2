import Vue from "vue";
import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

import TraktApi from "./TraktApi.js";

Vue.$http = Axios;

const fixture = [
  { id: 1, firstName: "Fred", lastName: "Flintstone" },
  { id: 2, firstName: "Wilma", lastName: "Flintstone" }
];

describe("TraktApi.js", () => {
  describe("TraktApi()", () => {
    test("should instantiation be ok", () => {
      const api = new TraktApi();
      expect(api).toBeDefined();
    });
  });

  describe("getHistory()", () => {
    test("should getHistory() be ok", async () => {
      const mock = new MockAdapter(Axios);
      mock.onGet("/users/srod/history").reply(200, fixture);
      const data = await new TraktApi().getHistory();
      expect(data).toBe(fixture);
    });
  });

  describe("getToken()", () => {
    test("should getToken() be ok", async () => {
      const mock = new MockAdapter(Axios);
      mock.onPost("/oauth/token").reply(200, fixture);
      const data = await new TraktApi().getToken({ code: "foo" });
      expect(data).toBe(fixture);
    });
  });
});
