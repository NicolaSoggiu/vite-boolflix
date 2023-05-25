<script>
import AppHeader from "./components/AppHeader.vue";
import AppContainer from "./components/AppContainer.vue";
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppContainer,
  },
  methods: {
    requestDataFromApi(data) {
      this.store.loading = true;
      this.store.errorMessage = "";
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "93758f38a9c78d2bf40d678cf8116242",
            query: data,
          },
        })
        .then((response) => {
          const filmData = response.data.results.map((result) => {
            return {
              id: result.id,
              title: result?.title,
              originalTitle: result?.original_title,
              language: result?.original_language,
              voto: result?.vote_average,
              image: result?.poster_path,
            };
          });
          this.store.arrMovies = filmData;
          console.log(filmData);
        })
        .catch((error) => {
          this.store.errorMessage = error.message;
          this.store.loading = false;
        });
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "93758f38a9c78d2bf40d678cf8116242",
            query: data,
          },
        })
        .then((response) => {
          const ShowData = response.data.results.map((result) => {
            return {
              id: result.id,
              title: result?.title ? result.title : result?.name,
              originalTitle: result?.original_title
                ? result.original_title
                : result.original_name,
              language: result?.original_language,
              voto: result?.vote_average,
              image: result?.poster_path,
            };
          });
          this.store.arrShows = ShowData;
        })
        .catch((error) => {
          this.store.errorMessage = error.message;
          this.store.loading = false;
        });
      this.store.loading = false;
      console.log("store", this.store);
    },
  },
};
</script>

<template>
  <AppHeader @performSearch="requestDataFromApi" />
  <AppContainer />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
