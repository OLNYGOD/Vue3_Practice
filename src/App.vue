<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <!-- AppDemo -->
  <AppDemo />
  <!-- AppHeader，帶 props -->
  <AppHeader name="John" :user1="defaultUser"/>
  
  <p>{{ greeting(title) }}</p>
</template>

<script setup>
import AppDemo from './components/AppDemo.vue'
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import { defaultUser, greeting } from './components/utils.js'
const title = "Vue3 Example"
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
