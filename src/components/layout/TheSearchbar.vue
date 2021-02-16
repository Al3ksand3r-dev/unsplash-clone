<template>
  <form class="form" @submit.prevent>
    <input type="text" class="form__text-field" placeholder="Search images" />
    <button class="form__submit">
      <span class="lnr lnr-magnifier form__magnifier"></span>
    </button>
  </form>
</template>

<script>
export default {
  name: "TheSearchbar",
};
</script>
