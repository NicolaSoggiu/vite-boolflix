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

    <!-- MOVIES -->
    <div>
        <AppMovieSeries/>
    </div>
    
    <!-- SERIES -->
    <div>
        <AppMovieSeries/>
    </div>
</template>

<style lang="scss" scoped>
    
</style>