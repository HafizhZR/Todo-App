<script setup lang="ts">
import { ITodo, useTodoStore } from "../store/store";
import { ref } from "vue";

const todoStore = useTodoStore();

const { todos } = defineProps<{
    todos: ITodo;
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
    <div class="flex items-center justify-between rounded-md bg-[#454545] px-8 py-5 my-1 max-w-[800px] box-border">
        <div class="flex items-center gap-5 h-[60px]">
            <input class="min-h-[25px] min-w-[25px]" type="checkbox" v-model="todos.completed" />
            <p :class="['text-md md:text-lg lg:text-xl', todos.completed ? 'line-through' : '']">{{ todos.title }}</p>
        </div>
        <button v-if="!showConfirmation" class="text-red-600 ml-3" @click="confirmDeletion">
            <span class="material-symbols-outlined">delete</span>
        </button>
        <div v-else>
            <p class="text-normal">Are you sure?</p>
            <div class="flex gap-5 justify-center">
                <button class="text-base text-[#ff3636] hover:opacity-50"
                    @click="todoStore.deleteTodo(todos.title)">Yes</button>
                <button class="text-base text-[#3de377] hover:opacity-50" @click="cancelDeletion">No</button>
            </div>
        </div>
    </div>
</template>
