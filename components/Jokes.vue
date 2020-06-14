<template>
  <div>
    {{ userJoke }}
    {{ textJoke }}
    {{ likesJoke }}
    {{ dislikesJoke }}
  </div>
</template>

<script>
export default {
  name: "Jokes",
  props: ["userJoke", "textJoke", "likesJoke", "dislikesJoke"],
};
</script>

<style></style>script
