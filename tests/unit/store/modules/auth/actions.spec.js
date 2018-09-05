import Vue from "vue";
import VueRouter from "vue-router";
import { check, register, login, logout } from "@/store/modules/auth/actions";

Vue.use(VueRouter);

const router = new VueRouter({ mode: "history" });
Vue.router = router;

describe("Auth Actions", () => {
  test("check", () => {
    const commit = jest.fn();
    check({ commit });
    expect(commit).toBeCalled();
  });

  test("register", () => {
    const commit = jest.fn();
    register({ commit });
    expect(commit).toBeCalled();
  });

  test("login", () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    login({ commit, dispatch });
    expect(commit).toBeCalled();
  });

  test("logout", () => {
    const commit = jest.fn();
    logout({ commit });
    expect(commit).toBeCalled();
  });
});
