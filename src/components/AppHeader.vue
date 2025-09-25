<template>
  <h1>Hello Component</h1>
  <p>{{ name }}</p>
  <p>{{ user1 }}</p>
</template>

<script>
export default {
  name: 'AppHeader',
    props: {
        name: String,
        user1: {
      type: String,
      default: 'Anny'
        },
    }
};
</script>