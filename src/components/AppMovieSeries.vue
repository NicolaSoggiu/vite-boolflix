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
    key: String,
    title: String,
    originalTitle: String,
    language: String,
    voto: Number,
    image: String,
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
    <div class="ciao"></div>
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
        <span class="details"> <Lang-flag :iso="`${language}`" /> </span>
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
</template>

<style lang="scss" scoped>
// .ciao {
//   display: none;
// }

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
    .ciao {
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
  .info {
    display: none;
  }
}

.star {
  color: yellow;
}

// HOVER
</style>
