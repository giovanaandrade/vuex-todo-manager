<template>
  <div class="container">
    <AddTodo />
    <FilterTodos />
    <ToDos />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";
import ToDos from "./components/ToDos.vue";

export default {
  name: "App",
  components: {
    ToDos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
