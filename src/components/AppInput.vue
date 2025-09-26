<template>
  <input type="text"
    :value="modelValue"
    @Input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    modelValue: String, // modelValue 為系統名稱，不能自由命名
  },
};
</script>