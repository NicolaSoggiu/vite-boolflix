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
  <div class="container-card">
    <div class="card">
      <img
        class="poster"
        :src="`http://image.tmdb.org/t/p/w342${image}`"
        :alt="image"
      />
      <div class="info">
        <div class="description">
          <span class="details">{{ title }}</span>
        </div>
        <div class="description">
          <span class="details">{{ originalTitle }}</span>
        </div>
        <div class="description">
          <span class="details">{{ language }}</span>
        </div>
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-card {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 100%;
  .poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.star {
  color: yellow;
}

.card {
  margin: 50px auto;
  min-width: 300px;
  height: 426px;
  font-weight: bold;
  background-color: black;
  box-shadow: 5px 5px 14px 3px black;
  .info {
    display: none;
  }
}

.card:hover {
  padding: 10px;
  box-shadow: none;
}
.card:hover .poster {
  display: none;
}
.card:hover .info {
  display: block;
  color: white;
}
</style>
