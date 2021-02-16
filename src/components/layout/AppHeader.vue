<template>
  <header
    class="header"
    :style="{ backgroundImage: `url(${bgURL})`, height: `${height}px` }"
  >
    <div class="header__content">
      <slot />
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    bgURL: {
      type: String,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
  },
};
</script>
