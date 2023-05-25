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
    image: String,
  },
  methods: {
    rating() {
      return Math.ceil((this.voto / 10) * 5);
    },
  },
};
</script>

<template>
  <div class="card">
    <ul>
      <li>{{ title }}</li>
      <li>{{ originalTitle }}</li>
      <li>{{ language }}</li>
      <span>VOTO: </span>
      <font-awesome-icon
        class="star"
        v-for="star in rating(vote)"
        :key="star"
        :icon="['fas', 'star']"
      />
      <template v-for="star in 5 - rating(vote)">
        <font-awesome-icon
          class="star"
          :key="star"
          :icon="['far', 'star']"
          v-if="rating(vote) < 5"
        />
      </template>
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
  .star {
    color: yellow;
  }
}
</style>
