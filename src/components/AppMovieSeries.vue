<script>
import { store } from "../store";
import LangFlag from "vue-lang-code-flags";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    title: String,
    originalTitle: String,
    language: String,
    voto: Number,
    image: String,
    overview: String,
  },
  components: {
    LangFlag,
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
    <div class="empty"></div>
    <img
      v-if="image"
      class="poster"
      :src="`http://image.tmdb.org/t/p/w342${image}`"
      :alt="image"
    />
    <div v-else class="poster default"></div>
    <div class="info">
      <div class="description">
        <span class="details">Title : {{ title }}</span>
      </div>
      <div class="description">
        <span class="details">Original Title : {{ originalTitle }}</span>
      </div>
      <div class="description">
        <span class="details">
          <Lang-flag :iso="`${language}`" :squared="false" />
        </span>
      </div>
      <span>Vote: </span>
      <font-awesome-icon
        class="star"
        v-for="star in rating()"
        :key="star"
        :icon="['fas', 'star']"
      />
      <template v-for="star in 5 - rating()">
        <font-awesome-icon
          class="star"
          :key="star"
          :icon="['far', 'star']"
          v-if="rating() < 5"
        />
      </template>
      <div class="description">
        <span class="details"> Overview : {{ overview }} </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin: 50px auto;
  min-width: 300px;
  height: 426px;
  font-weight: bold;
  background-color: black;
  box-shadow: 5px 5px 14px 3px black;
  position: relative;
  &:hover {
    box-shadow: none;
    cursor: pointer;
    .empty {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.614);
      backdrop-filter: blur(1px);
    }
    .info {
      display: block;
      color: white;
      position: absolute;
      left: 10px;
      top: 10px;
    }
  }
  .poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .default {
    background-image: url("../../public/img/netflix_3.webp");
  }
  .info {
    display: none;
  }
}
.star {
  color: yellow;
}
</style>
