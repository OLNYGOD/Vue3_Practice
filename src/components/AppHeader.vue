<template>
  <h1>Hello Component</h1>
  <p>姓名： {{ name }}</p>
  <p>使用者： {{ user1 }}</p>
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