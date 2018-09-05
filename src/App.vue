<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // If the user is authenticated,
    // fetch the data from the API
    // if (this.$store.state.AUTH.authenticated) {
    //   this.$store.dispatch("account/find");
    // }
  }
};
</script>
