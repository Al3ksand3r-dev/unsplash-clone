<template>
  <form class="form" @submit.prevent="searchPhoto" spellcheck="false">
    <input
      type="text"
      class="form__text-field"
      v-model="keyword"
      placeholder="Search images"
    />
    <button class="form__submit">
      <span class="lnr lnr-magnifier form__magnifier"></span>
    </button>
  </form>
</template>

<script>
import { toRefs, reactive } from "vue";
import store from "@/store";
import router from "@/router";

export default {
  name: "TheSearchbar",
  setup() {
    const input = reactive({
      keyword: "",
    });

    const searchPhoto = () => {
      if (input.keyword === "") return;
      store.dispatch("searchPhoto", input.keyword).then(() => {
        router.push({ name: "Query", params: { query: input.keyword } });
      });
    };

    return { ...toRefs(input), searchPhoto };
  },
};
</script>
