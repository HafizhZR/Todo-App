import { defineStore } from "pinia";
import axios from "axios";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type TodoState = {
  todos: ITodo[];
  filterTodo: ITodo[];
  isFetched: boolean;
  title: string;
  filterMethod: string;
}

export const useTodoStore = defineStore("todo", {
  state: (): TodoState => ({
    todos: [],
    filterTodo: [],
    isFetched: true,
    title: "",
    filterMethod: "all",
  }),
  getters: {
    getCompletedTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    },
    getActiveTodos(state) {
      return state.todos.filter((todo) => !todo.completed);
    },
    getActiveTodosCounter(state) {
      return state.todos.reduce((count, todo) => {
        return todo.completed ? count : count + 1;
      }, 0);
    },
  },
  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        this.todos = response.data;
        this.filterTodo = response.data;
        this.isFetched = false;
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },
    async addTodo() {
      try {
        if (this.title.trim() !== "") {
          this.isFetched = true;
          const newTodo: ITodo = {
            userId: 1,
            id: this.todos.length + 1,
            title: this.title,
            completed: false,
          };
          const response = await axios.post(
            "https://jsonplaceholder.typicode.com/todos",
            newTodo
          );
          this.todos.unshift(response.data);
          this.filterTodo = this.todos;
          this.title = "";
          this.isFetched = false;
        } else {
          window.alert("Masukkan Todo Terlebih Dahulu!");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo(title: string) {
      try {
        this.isFetched = true;
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${title}`);
        this.todos = this.todos.filter((todo) => todo.title !== title);
        this.filterTodo = this.todos;
        this.isFetched = false;
      } catch (error) {
        console.error(error);
      }
    },
    FILTER_BY_ALL() {
      this.filterTodo = this.todos;
    },
    FILTER_BY_ACTIVE() {
      this.filterTodo = this.getActiveTodos;
    },
    FILTER_BY_COMPLETED() {
      this.filterTodo = this.getCompletedTodos;
    },
    CLEAR_COMPLETED() {
      this.todos = this.todos.filter((todo) => !todo.completed);
      this.filterTodo = this.todos;
    },
  },
});
