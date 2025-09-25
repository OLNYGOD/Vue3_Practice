<template>
  <div>
    <input type="text" v-model="text2" placeholder="請輸入文字" />
    <button @click="submit">送出</button>
  </div>
</template>

<script>
export default {
  name: 'AppView',
  data() {
    return {
      text2: '',
    };
  },
  methods: {
    submit() {
      //emit 將text2傳回App2.vue
      this.$emit('viewText', this.text2);
      this.text2 = '';
    },
  },
};
</script>