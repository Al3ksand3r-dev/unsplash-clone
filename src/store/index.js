import { createStore } from "vuex";
import { getPhotos } from "@/service";

export default createStore({
  state: {
    photos: [],
  },
  mutations: {
    SET_PHOTOS(state, photos) {
      state.photos = photos;
      console.log(photos);
    },
  },
  actions: {
    getPhotos({ commit }) {
      return getPhotos().then(({ data }) => {
        commit("SET_PHOTOS", data);
      });
    },
  },
});
