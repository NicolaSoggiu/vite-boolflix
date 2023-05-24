<script>
export default {
  props: {
    key: String,
    title: String,
    originalTitle: String,
    language: String,
    voto: Number,
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
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
