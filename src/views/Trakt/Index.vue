<template>
  <main-layout>
    <div class="trakt">
      <router-view/>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";

export default {
  components: { MainLayout }
};
</script>
