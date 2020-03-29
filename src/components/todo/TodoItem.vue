<template>
  <div>
    <h3 class="todo-item">
      <input type="checkbox" style="margin:0 5px" />
      {{ todo.id }} - {{ todo.title }}
      <button
        type="button"
        @click="deleteTodo(this.todo)"
        class="btn btn-danger"
      >X</button>
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
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: grid;
  grid-template-columns: auto 2fr 0.0001fr;
}
.todo-item:hover {
  background-color: lightgrey;
}
</style>