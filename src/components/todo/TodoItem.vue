<template>
  <div>
    <h3 class="todo-item" @click="toggleItem">
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        style="margin:0 5px"
      />
      <p v-bind:class="{ 'done-item': this.todo.completed }">
        {{ todo.id }} - {{ todo.title }}
      </p>
      <button
        type="button"
        @click="deleteTodo(this.todo)"
        class="btn btn-danger"
      >
        X
      </button>
    </h3>
  </div>
</template>
<script>
export default {
  props: ['todo'],
  methods: {
    deleteTodo() {
      console.log(this.todo);
      this.$store.dispatch('deleteTodo', this.todo);
    },
    toggleItem() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: grid;
  grid-template-columns: auto 2fr 0.0001fr;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
}
.todo-item:hover {
  background-color: lightgrey;
}
.done-item {
  text-decoration: line-through;
}
</style>
