import Vue from "vue";
import Axios from "axios";
import { check, login, logout } from "@/store/modules/auth/mutations";
import state from "@/store/modules/auth/state";

Vue.$http = Axios;

describe("Auth Mutations", () => {
  test("check without token", () => {
    check(state);
    expect(state.authenticated).toBe(false);
  });

  test("check with token", () => {
    localStorage.setItem("id_token", "string_token");
    check(state);
    expect(state.authenticated).toBe(true);
  });

  test("login", () => {
    const token = "string_token_login";
    login(state, { token });
    expect(state.authenticated).toBe(true);
    expect(localStorage.getItem("id_token")).toBe(token);
  });

  test("logout", () => {
    const token = "string_token_logout";
    localStorage.setItem("id_token", token);
    logout(state);
    expect(state.authenticated).toBe(false);
    expect(localStorage.getItem("id_token")).toBeNull();
  });
});
