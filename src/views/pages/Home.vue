<template>
  <div>
    <app-header
      :bgURL="require('@/assets/showcase/primary-showcase.jpg')"
      :height="300"
    >
      <h1>Unsplash Clone</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </app-header>
    <app-photo-collection :photos="photos" />
  </div>
</template>

<script>
import AppPhotoCollection from "../../components/layout/AppPhotoCollection.vue";
import store from "@/store";
import { computed } from "vue";
import AppHeader from "../../components/layout/AppHeader.vue";

export default {
  components: { AppPhotoCollection, AppHeader },
  name: "Home",
  setup() {
    store.dispatch("getPhotos");
    const photos = computed(() => store.state.photos);
    return { photos };
  },
};
</script>
