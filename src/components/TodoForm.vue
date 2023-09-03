<script setup lang="ts">
import { ref, computed } from 'vue';

const { textValue, isCompleted } = defineProps({
  textValue: String,
  isCompleted: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(textValue);

const addTodo = () => {
  emit('update:modelValue', inputValue.value);
  inputValue.value = '';
};

const inputClasses = computed(() => {
  return {
    'line-through': isCompleted,
    'font-medium': isCompleted,
  };
});
</script>

<template>
  <div class="container max-w-[800px] box-border">
    <input type="text" v-model="inputValue" @keyup.enter="addTodo" :class="inputClasses"
      placeholder="✎ What needs to be done" class="w-full h-[60px] px-4 rounded-md text-xl" />
  </div>
</template>