<template>
  <div>
    <input type="text" v-model="text" placeholder="請輸入文字" />
    <button @click="submit">送出</button>
  </div>
</template>

<script>
export default {
  name: 'AppView',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    submit() {
      //emit 將text傳回App2.vue
      this.$emit('viewText', this.text);
      this.text = '';
    },
  },
};
</script>