<template>
  <article class="collection">
    <h1 class="collection__title" v-if="$route.params.query">
      {{ $route.params.query }}
    </h1>
    <div class="collection__item" v-for="photo in photos" :key="photo.id">
      <div class="collection__user-description">
        <img
          class="collection__user-portrait"
          :src="photo.user.profile_image.medium"
          :alt="photo.alt_description"
        />
        <span class="collection__user-name">{{ photo.user.name }}</span>
      </div>
      <img
        :src="photo.urls.regular"
        alt="collection-image"
        class="collection__image"
      />
      <div class="collection__actions">
        <button class="collection__download-btn">
          <span class="text">Download</span>
          <span class="lnr lnr-chevron-down arrow-down"></span>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "AppPhotoCollection",
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
};
</script>
