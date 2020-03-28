<template>
  <div>
    <h1>Todo List</h1>

    <ul class="list-group">
      <li class="list-group-item">
        <todo-item v-for="todo in todos" v-bind:key="todo" :todo="todo"></todo-item>
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
  data: function() {
    return {
      todos: [
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false
        },
        {
          id: 4,
          title: 'Clean up room',
          completed: false
        },
        {
          id: 5,
          title: 'Finish work',
          completed: false
        }
      ]
    };
  }
};
</script>
