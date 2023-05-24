<script>
import { store } from "../store"
import AppMovieSeries from "./AppMovieSeries.vue";

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppMovieSeries,
    },
}
</script>

<template>
    <main>
        <!-- MOVIES -->
        <div>
            <AppMovieSeries/>
        </div>
    
        <!-- SERIES -->
        <div>
            <AppMovieSeries/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 90vh;
        background-color: grey;

    }
</style>