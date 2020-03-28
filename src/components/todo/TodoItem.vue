<template>
  <div>
    <h3>
      <input type="checkbox" />

      {{ todo.id }} - {{ todo.title }}
    </h3>
  </div>
</template>
<script>
export default {
  props: ['todo']
};
</script>
