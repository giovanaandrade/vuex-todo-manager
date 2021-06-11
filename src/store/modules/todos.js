//boilerplate for a module

import axios from "axios";

const base_url = "https://jsonplaceholder.typicode.com/todos";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    await axios.get(base_url).then((res) => commit("setTodos", res.data));
  },
  async addTodo({ commit }, title) {
    await axios
      .post(base_url, { title, completed: false })
      .then((res) => commit("newTodo", res.data));
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`${base_url}/${id}`).then(commit("removeTodo", id));
  },
  async filterTodos({ commit }, e) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    await axios
      .get(`${base_url}?_limit=${limit}`)
      .then((res) => commit("setTodos", res.data));
  },
  async updateTodo({ commit }, updatedTodo) {
    await axios
      .put(`${base_url}/${updatedTodo.id}`, updatedTodo)
      .then((res) => commit("updateTodo", res.data));
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updateTodo) => {
    const index = state.todos.findIndex((todo) => todo.id == updateTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
