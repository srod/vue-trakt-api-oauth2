import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import VueLogger from "vuejs-logger";
import TraktRedirect from "@/views/Trakt/Redirect.vue";

const $route = {
  query: { code: 1 }
};

const localVue = createLocalVue();
localVue.use(VueLogger);
localVue.use(Vuex);

describe("TraktIndex.vue", () => {
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
    const wrapper = shallowMount(TraktRedirect, {
      localVue,
      store,
      mocks: {
        $route
      }
    });
    expect(wrapper).toBeTruthy();
  });
});
