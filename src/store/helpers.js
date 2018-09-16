import { mapState, mapGetters } from "vuex";

export const authComputed = {
  ...mapState("auth", {
    currentUser: state => state.currentUser
  }),
  ...mapGetters("auth", ["loggedIn"])
};
