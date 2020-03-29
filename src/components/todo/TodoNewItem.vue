<template>
  <div class="container card">
    <h3>Add new ToDo:</h3>

    <div class="card body">
      <div class="row">
        <div class="col-xs-6">
          <input
            v-model="todoTitle"
            type="text"
            class="form-control"
            placeholder="New TODO"
            aria-label="New TODO"
            aria-describedby="basic-addon2"
          />
        </div>
        <div class="col-xs-6">
          <button class="btn btn-primary" @click="addTodo" type="button">Add</button>
        </div>
      </div>
    </div>
    <div>
      <!--{{ newTodo }}-->
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      todoTitle: ''
    };
  },
  methods: {
    addTodo() {
      const todo = {
        id: '',
        title: this.todoTitle
      };
      if (!todo.title == '') {
        console.log(todo);
        this.$store.dispatch('addTodo', todo);
      } else {
        alert('Please write your new ToDo!');
      }
    }
  }
};
</script>
