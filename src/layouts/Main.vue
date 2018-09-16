<template>
  <div>
    <nav>
      <router-link :to="{ name: 'home.index' }">
        Vue 2 Boilerplate
      </router-link>

      <div>
        <span>
          <a href="#" v-if="loggedIn" @click.prevent="logout">
            Logout
          </a>
        </span>
      </div>
    </nav>

    <div>
      <slot/>
    </div>

  </div>
</template>

<script>
/* ============
 * Main Layout
 * ============ */
import { authComputed } from "@/store/helpers";

export default {
  name: "MainLayout",

  computed: {
    ...authComputed
  },

  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>
