<template>
  <div>
<<<<<<< Updated upstream
    <h3>
      <input type="checkbox" />

      {{ todo.id }} - {{ todo.title }}
=======
    <h3 class="todo-item" @click="toggleItem">
      <input type="checkbox" v-bind:checked="todo.completed" style="margin:0 5px" />
      <p v-bind:class="{'done-item': this.todo.completed}">{{ todo.id }} - {{ todo.title }}</p>
      <button type="button" @click="deleteTodo(this.todo)" class="btn btn-danger">X</button>
>>>>>>> Stashed changes
    </h3>
  </div>
</template>
<script>
export default {
<<<<<<< Updated upstream
  props: ['todo']
};
</script>
=======
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
}
.todo-item:hover {
  background-color: lightgrey;
  cursor: pointer;
}

.done-item {
  text-decoration: line-through;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}
</style>
>>>>>>> Stashed changes
