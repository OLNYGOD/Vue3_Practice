<!-- src/AppDemo.vue -->
<template>
  <div>
    <h2>Vue3 Demo: Input & Display</h2>
    <input v-model="text" placeholder="請輸入文字" />
    <!-- 可直接使用useText 返回的變數和方法 -->
    <!-- <p>你輸入的是：{{ text }}</p> -->
     <p>你輸入的是：{{ store.text }}</p>
    <button @click="store.updateText('預設值')">設定預設值</button>
  </div>
</template>

<script setup>
// 需使用useText 配合 useText composable 匯出
import { useText } from '@/components/useText'

// // 從 composable 取得 reactive state 與方法
// const { text, updateText } = useText()

const store = useText()
</script>

<style scoped>
div {
  padding: 16px;
  font-family: Arial, sans-serif;
}

input {
  padding: 6px 10px;
  margin-bottom: 10px;
  width: 200px;
}

button {
  padding: 6px 12px;
  margin-top: 8px;
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>