<template>
  <div class="container card">
    <h3>Add new TODO:</h3>

    <div class="card body">
      <div class="row">
        <div class="col-xs-6">
          <input
            v-bind="newTodo"
            type="text"
            class="form-control"
            placeholder="New TODO"
            aria-label="New TODO"
            aria-describedby="basic-addon2"
          />
        </div>
        <div class="col-xs-6">
          <button class="btn btn-outline-secondary" @click="addTodo" type="button">Add</button>
        </div>
      </div>
    </div>
    <div>
      {{ newTodo }}
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      newTodo: ''
    };
  },
  methods: {
    addTodo() {}
  }
};
</script>
