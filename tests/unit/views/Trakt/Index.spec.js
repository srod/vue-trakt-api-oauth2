import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import TraktIndex from "@/views/Trakt/Index.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("TraktIndex.vue", () => {
  test("should render be ok", () => {
    const wrapper = shallowMount(TraktIndex, {
      localVue,
      router
    });
    expect(wrapper).toBeTruthy();
  });
});
