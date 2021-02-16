<template>
  <div class="container">
    <the-navbar />
    <div class="container__content">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from "./components/layout/TheNavbar.vue";
export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>
