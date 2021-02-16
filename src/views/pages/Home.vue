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
import { ref } from "vue";
import AppHeader from "../../components/layout/AppHeader.vue";

export default {
  components: { AppPhotoCollection, AppHeader },
  name: "Home",
  setup() {
    const photos = ref([]);
    store.dispatch("getPhotos").then(() => {
      photos.value = store.state.photos;
    });
    return { photos };
  },
};
</script>
