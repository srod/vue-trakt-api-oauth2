<template>
  <nav>
    <router-link :to="{ name: 'home.index' }">
      Vue 2 Boilerplate
    </router-link>

    <div>
      <span>
        <router-link v-if="loggedIn" :to="{ name: 'logout' }">Logout</router-link>
      </span>
    </div>
  </nav>
</template>

<script>
import { authComputed } from "@/store/helpers";

export default {
  name: "NavBar",

  computed: {
    ...authComputed
  }
};
</script>
