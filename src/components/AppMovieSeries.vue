<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  props: {
    key: String,
    title: String,
    originalTitle: String,
    language: String,
    voto: Number,
    image: String /*cambiare in Object?!*/,
  },
};
</script>

<template>
  <div class="card">
    <ul>
      <li>{{ title }}</li>
      <li>{{ originalTitle }}</li>
      <li>{{ language }}</li>
      <li>{{ voto }}</li>
      <img :src="`http://image.tmdb.org/t/p/w342${image}`" :alt="image" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  padding: 2rem;
  .image {
    width: 500px;
  }
}
</style>
