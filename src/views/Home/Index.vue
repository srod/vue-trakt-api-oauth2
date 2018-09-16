<template>
  <main-layout>
    <div>
      <p>Home</p>
      <p>
        <a v-if="!loggedIn" href="https://trakt.tv/oauth/authorize?response_type=code&client_id=9d869c595f00e527c53c4887f02b830adb6ffc36c1bfb1da8d4e98ef68e55fb3&redirect_uri=http://localhost:8080/trakt/redirect">Connect with Trakt</a>
      </p>
      <p>
        <router-link v-if="loggedIn" :to="'/trakt/history'">History</router-link>
      </p>
    </div>
  </main-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============ */
import MainLayout from "@/layouts/Main.vue";
import { authComputed } from "@/store/helpers";

export default {
  name: "HomeIndex",

  components: { MainLayout },

  computed: {
    ...authComputed
  }
};
</script>
