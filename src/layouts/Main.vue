<template>
  <div class="container">
    <ul>
      <li>
        <VLink href="/">Home</VLink>
        <VLink href="/about">About</VLink>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
import VLink from "../components/VLink.vue";
export default {
  components: {
    VLink,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 15px 30px;
  background: #fcfcfc;
}
ul {
  list-style-type: none;
  a {
    margin: 0 10px;
  }
}
</style>