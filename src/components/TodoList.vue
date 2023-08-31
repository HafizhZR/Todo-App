<script setup lang="ts">
import { ITodo } from "../store/store";
import { ref } from "vue";

defineProps<{
    todos: ITodo;
    updateTodo: (id: number, completed: boolean) => void;
    deleteTodo: (id: number) => void;
}>();

const showConfirmation = ref(false);

const confirmDeletion = () => {
    showConfirmation.value = true;
};

const cancelDeletion = () => {
    showConfirmation.value = false;
};
</script>

<template>
    <div class="flex items-center justify-between rounded-md bg-[#454545] w-[800px] px-8 py-5 my-1">
        <div class="flex items-center gap-7 h-[60px]">
            <input class="h-[25px] w-[25px]" type="checkbox" v-model="todos.completed" @change="updateTodo(todos.id, todos.completed)"/>
            <p :class="['text-xl', todos.completed ? 'line-through' : '']">{{ todos.title }}</p>
        </div>
        <button 
            v-if="!showConfirmation" 
            class="text-red-600"
            @click="confirmDeletion">
            <span class="material-symbols-outlined">delete</span>
        </button>
        <div v-else>
            <p class="text-normal">Are you sure?</p>
            <div class="flex gap-5 justify-center">
                <button class="text-base text-[#ff3636] hover:opacity-50"
                    @click="deleteTodo(todos.id); cancelDeletion()">Yes</button>
                <button class="text-base text-[#3de377] hover:opacity-50" @click="cancelDeletion">No</button>
            </div>
        </div>
    </div>
</template>
