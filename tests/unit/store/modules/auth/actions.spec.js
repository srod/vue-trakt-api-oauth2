import { createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";

// import * as authModule from "@/store/modules/auth";

import {
  init,
  register,
  login,
  logout
  // validate
} from "@/store/modules/auth/actions";

const localVue = createLocalVue();
localVue.use(VueRouter);

const router = new VueRouter({ mode: "history" });
localVue.router = router;

describe("Auth Actions", () => {
  /* let store;
  beforeEach(() => {
    store = createModuleStore(authModule);
    window.localStorage.clear();
  }); */

  /* test.only("exports a valid Vuex module", () => {
    expect(authModule).toBeAVuexModule();
  }); */

  test("init", () => {
    const state = {};
    const dispatch = jest.fn();
    init({ state, dispatch });
    expect(dispatch).toBeCalled();
  });

  test("register", () => {
    const commit = jest.fn();
    register({ commit });
    expect(commit).toBeCalled();
  });

  test("login", () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    const getters = jest.fn();
    login({ commit, dispatch, getters });
    expect(commit).toBeCalled();
  });

  test("logout", () => {
    const commit = jest.fn();
    logout({ commit });
    expect(commit).toBeCalled();
  });

  /* test("validate", () => {
    const state = {};
    validate({ state });
    expect(state).toBeCalled();
  }); */

  /* test("actions.validate resolves to null when currentUser is null", () => {
    store.commit("SET_USER", null);
    return store.dispatch("validate").then(user => {
      expect(user).toEqual(null);
    });
  }); */
});
