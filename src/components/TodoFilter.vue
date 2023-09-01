<script setup lang="ts">
import { useTodoStore } from '../store/store';

const todoStore = useTodoStore();
</script>

<template>
    <div class="container flex justify-between max-w-[800px]">
        <p class="flex items-center text-md md:text-lg lg:text-xl">{{ todoStore.getActiveTodosCounter }} items left</p>
        <div class="flex gap-5">
            <button class="px-[1.2em] py-[.6em] rounded-[8px] hover:border focus:border bg-[#1a1a1a] font-bold text-md md:text-lg lg:text-xl" @click="todoStore.FILTER_BY_ALL">All</button>
            <button class="px-[1.2em] py-[.6em] rounded-[8px] hover:border focus:border bg-[#1a1a1a] font-bold text-md md:text-lg lg:text-xl" @click="todoStore.FILTER_BY_ACTIVE">Active</button>
            <button class="px-[1.2em] py-[.6em] rounded-[8px] hover:border focus:border bg-[#1a1a1a] font-bold text-md md:text-lg lg:text-xl" @click="todoStore.FILTER_BY_COMPLETED">Completed</button>
        </div>
        <button class="text-md md:text-lg lg:text-xl hover:underline" @click="todoStore.CLEAR_COMPLETED">Clear Completed</button>    
    </div>
</template>

<style scoped>

</style>