<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <i class="fas fa-blog"></i>
    </div>

    <the-searchbar />

    <button class="navbar__login">
      <img :src="require('@/assets/placeholder/portrait.png')" alt="portrait" />
    </button>

    <div class="navbar__burger">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<script>
import TheSearchbar from "./TheSearchbar.vue";
export default {
  name: "TheNavbar",
  components: {
    TheSearchbar,
  },
};
</script>
