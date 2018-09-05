<template>
  <div>
    <p>History</p>

    <ul>
      <li v-for="item in historyData" :key="item.id">
        {{ item.show.title }} - Season {{ item.episode.season }} episode {{ item.episode.number }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TraktHistory",

  created() {
    this.$store.dispatch("trakt/get_history");
  },

  computed: {
    historyData() {
      return this.$store.state.trakt.history;
    }
  }
};
</script>
