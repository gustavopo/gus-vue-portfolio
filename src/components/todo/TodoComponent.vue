<template>
  <div class="container">
    <h1>Todo Component: Here you can create and List your TODOs</h1>
    <br />
    <todo-new-item></todo-new-item>
    <hr />
    <br />
    <todo-list></todo-list>
  </div>
</template>

<script>
//import TodoNewItem from './TodoNewItem.vue';
//import TodoList from './TodoList.vue';
import TodoNewItem from './TodoNewItem.vue';
import TodoList from './TodoList.vue';

export default {
  name: 'TodoComponent',
  components: {
    todoNewItem: TodoNewItem,
    todoList: TodoList
  },
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
      i: 5,
      title: 'Finish work',
      completed: false
    }
  ]
};
</script>
