<script>
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import axios from 'axios';
import { store } from "./store";


export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppHeader, AppContainer,
    },
    methods: {
        requestDataFromApi() {
            axios
                .get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        query: this.store.searchMovies,
                    },
                })
                .then((response) => (this.store.arrMovies = response.data.data));
            axios
                .get("https://api.themoviedb.org/3/discover/tv", {
                    params: {
                        name: this.store.searchShow,
                    },
                })
                .then((response) => (this.store.arrShow = response.data.data))
        }
    },
}
</script>

<template>

  <AppHeader @filteredSearch="this.requestDataFromApi"/>
  <AppContainer/>

</template>

<style lang="scss">
    @use "./assets/styles/general.scss" as *
</style>
