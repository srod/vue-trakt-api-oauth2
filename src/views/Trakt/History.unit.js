import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import TraktHistory from "./History.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("@/views/Trakt/History.vue", () => {
  let actions;
  let getters;
  let state;
  let store;

  beforeEach(() => {
    actions = {
      get_history: jest.fn()
    };
    getters = {
      history() {
        return [
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
        ];
      }
    };
    state = {
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
    };
    store = new Vuex.Store({
      modules: {
        trakt: {
          namespaced: true,
          getters,
          actions,
          state
        }
      }
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
