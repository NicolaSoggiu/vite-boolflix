<script>
export default {
  data() {
    return {
      searchBar: "",
    };
  },
  methods: {
    emitSearchBar() {
      this.$emit("performSearch", this.searchBar);
      this.searchBar = "";
    },
  },
};
</script>

<template>
  <nav>
    <div class="logo">
      <h1>BOOLFLIX</h1>
    </div>
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search"
        v-model="searchBar"
        @keyup.enter="emitSearchBar"
      />
      <button @click="emitSearchBar">Search</button>
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
    &:hover {
      cursor: pointer;
    }
  }
  .search-bar {
    padding-right: 2rem;
    input {
      padding: 8px;
      border-radius: 5px;
    }
    button {
      color: white;
      background-color: red;
      padding: 8.5px;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
