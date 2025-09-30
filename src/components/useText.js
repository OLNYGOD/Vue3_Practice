// src/composables/useText.js
import { ref } from 'vue'

// 狀態抽離，方便多個元件共用
const text = ref('')

export function useText() {
  function updateText(value) {
    text.value = value
  }

  return {
    text,
    updateText
  }
}