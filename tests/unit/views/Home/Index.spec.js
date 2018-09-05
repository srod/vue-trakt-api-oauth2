import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import HomeIndex from "@/views/Home/Index.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const state = { auth: { authenticated: false } };
const store = new Vuex.Store({ state });

describe("HomeIndex.vue", () => {
  test("should render be ok", () => {
    const wrapper = shallowMount(HomeIndex, { localVue, store });
    expect(wrapper).toBeTruthy();
  });
});
