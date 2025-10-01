// // src/composables/useText.js
// // 把一個普通變數text包裝成 可追蹤變化的響應式變數
// import { ref } from 'vue'

// // 狀態抽離，方便多個元件共用
// const text = ref('')

// // manager 角色 - 負責管理狀態
// // 讓外部可以透過函式取得狀態和更新狀態的方法
// export function useText() {
//     // 類似set get 概念
//   function updateText(value) {
//     text.value = value
//   }

//   return {
//     text,
//     updateText
//   }
// }

import { defineStore } from 'pinia'

export const useText = defineStore('text', {
  state: () => ({
    text: ''
  }),
  actions: {
    updateText(value) {
      this.text = value
    }
  }
})
