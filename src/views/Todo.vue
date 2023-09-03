<script setup lang="ts">
import { onMounted } from 'vue';
import { useTodoStore } from '../store/store';
import TodoForm from '../components/TodoForm.vue';
import TodoList from '../components/TodoList.vue';
import TodoFilter from '../components/TodoFilter.vue';

const todoStore = useTodoStore();

onMounted(() => {
  todoStore.fetchTodos();
});
</script>

<template>
  <div class="container box-border lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px]">
    <h1 class="text-[100px] p-[30px] font-[Poppins]">Todos</h1>
    <TodoForm @keyup.enter="todoStore.addTodo" v-model="todoStore.title" />
    <div class="py-3 flex font-light">
      <TodoFilter />
    </div>
    <div v-for="todo in todoStore.filterTodo" :key="todo.title">
      <TodoList :todos="todo" :deleteTodo="todoStore.deleteTodo" />
    </div>
  </div>
</template>
  