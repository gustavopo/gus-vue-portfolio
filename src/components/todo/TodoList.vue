<template>
  <div>
    <h1>Todo List</h1>

    <ul class="list-group">
      <li class="list-group-item">
        <todo-item v-for="todo in todos" :todo="todo"></todo-item>
      </li>
    </ul>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  }
};
</script>
