<template>
  <p>Redirect</p>
</template>

<script>
export default {
  name: "TraktRedirect",

  mounted() {
    const code = this.$route.query.code;
    this.$log.debug("code from Trakt", code);

    if (code) {
      this.$store.dispatch("trakt/set_code", { code }).then(() => {
        this.$router.push({
          name: "home.index"
        });
      });
    }
  }
};
</script>
