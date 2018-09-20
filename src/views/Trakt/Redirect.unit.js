import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueLogger from "vuejs-logger";

import TraktRedirect from "./Redirect.vue";

const localVue = createLocalVue();
localVue.use(VueLogger);
localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/redirect", name: "redirect", component: TraktRedirect },
    {
      path: "/home",
      name: "home.index",
      component: { render: h => h("-") }
    }
  ]
});

describe("@/views/Trakt/Redirect.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      "trakt/set_code": jest.fn()
    };
    store = new Vuex.Store({
      state: {},
      actions
    });
  });

  test("should render be ok", () => {
    router.push({ name: "redirect", query: { code: 1 } });
    const wrapper = shallowMount(TraktRedirect, {
      localVue,
      store,
      router
    });
    expect(wrapper).toBeTruthy();
  });
});
