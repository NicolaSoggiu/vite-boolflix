<script>
import { store } from "../store";
import AppMovieSeries from "./AppMovieSeries.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppMovieSeries,
  },
  methods: {
    firstRequest() {
      this.store.loading = true;
      this.store.errorMessage = "";
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
          {
            params: {
              api_key: "93758f38a9c78d2bf40d678cf8116242",
              page: 1,
            },
          }
        )
        .then((response) => {
          const filmData = response.data.results.map((result) => {
            return {
              id: result.id,
              title: result?.title,
              originalTitle: result?.original_title,
              language: result?.original_language,
              voto: result?.vote_average,
              image: result?.poster_path,
              overview: result?.overview,
            };
          });
          this.store.arrMovies = filmData;
          this.store.loading = false;
        })
        .catch((error) => {
          this.store.errorMessage = error.message;
          this.store.loading = false;
        });
    },
  },
  mounted() {
    this.firstRequest();
  },
};
</script>

<template>
  <main>
    <!-- MOVIES -->
    <h1 v-if="store.arrMovies.length > 0">Movies :</h1>
    <div class="error" v-if="store.errorMessage !== '' && !store.loading">
      {{ store.errorMessage }}
    </div>
    <div class="loading" v-if="store.loading">Loading...</div>
    <div v-else>
      <div class="films">
        <AppMovieSeries
          v-for="movies in store.arrMovies"
          :key="movies.id"
          :title="movies.title"
          :originalTitle="movies?.originalTitle"
          :language="movies.language"
          :voto="movies.voto"
          :image="movies.image"
          :overview="movies.overview"
        />
      </div>

      <!-- SERIES -->
      <h1 v-if="store.arrShows.length > 0">Tv Show :</h1>
      <div class="tvShows">
        <AppMovieSeries
          v-for="show in store.arrShows"
          :key="show.id"
          :title="show.title"
          :originalTitle="show?.originalTitle"
          :language="show.language"
          :voto="show.voto"
          :image="show.image"
          :overview="show.overview"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
h1 {
  padding-left: 1rem;
  padding-top: 2rem;
}

main {
  width: 100%;
  max-height: fit-content;
  background-color: grey;
  .error {
    text-align: center;
    padding-top: 10rem;
    font-size: 5rem;
  }
  .loading {
    text-align: center;
    padding-top: 10rem;
    font-size: 5rem;
  }
  .films {
    display: flex;
    flex-wrap: wrap;
  }
  .tvShows {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
