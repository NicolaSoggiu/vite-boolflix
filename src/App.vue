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

    }
}
</script>

<template>

  <AppHeader/>
  <AppContainer/>
  
</template>

<style lang="scss">
    @use "./assets/styles/general.scss" as *
</style>
