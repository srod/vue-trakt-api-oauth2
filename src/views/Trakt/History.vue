<template>
  <div>
    <p>History</p>

    <ul>
      <li v-for="item in history" :key="item.id">
        {{ item.show.title }} - Season {{ item.episode.season }} episode {{ item.episode.number }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TraktHistory",

  created() {
    this.$store.dispatch("trakt/get_history").catch(err => console.error(err));
  },

  computed: {
    ...mapGetters("trakt", ["history"])
  }
};
</script>
