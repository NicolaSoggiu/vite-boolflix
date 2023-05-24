<script>
import { store } from "../store";

export default {
    data() {
        return {
            store,
    }
    }
}
</script>

<template>
  <nav>
    <div class="logo">
        <h1>BOOLFLIX</h1>
    </div>
    <div class="search-bar">
        <input type="text" placeholder="Search" v-model="store.searchMovies">
        <button> Cerca </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
    nav {
        width: 100%;
        height: 10vh;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            color: red;
            padding-left: 2rem;
        }
        .search-bar {
            padding-right: 2rem;
            input {
                padding: 10px;
                border-radius: 5px;
            }
            button {
                color: white;
                background-color: red;
                padding: 10px;
                border-radius: 5px;
            }
        }
    }
</style>