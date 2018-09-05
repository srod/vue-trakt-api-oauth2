/* ============
 * Vuex Store
 * ============ */

import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

// Modules
import auth from "./modules/auth";
import trakt from "./modules/trakt";

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    auth,
    trakt
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : []
});
