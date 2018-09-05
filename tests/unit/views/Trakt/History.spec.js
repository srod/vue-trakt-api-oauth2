import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TraktHistory from "@/views/Trakt/History.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TraktHistory.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      "trakt/get_history": jest.fn()
    };
    store = new Vuex.Store({
      state: {
        trakt: {
          history: [
            {
              id: 3834962843,
              episode: {
                season: 3,
                number: 1
              },
              show: {
                title: "Spin City"
              }
            }
          ]
        }
      },
      actions
    });
  });

  test("should render be ok", () => {
    const wrapper = shallowMount(TraktHistory, {
      localVue,
      store
    });
    expect(wrapper).toBeTruthy();
  });
});
