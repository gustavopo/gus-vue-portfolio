import todos from '../../data/static_todos.js';

const state = {
  todos: []
};

const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos;
  },

  ADD_TODO(state, newTodo) {
    newTodo.id = state.todos.length + 1;
    state.todos.push(newTodo);
  },
  DELETE_TODO(state, todo) {
    state.todos.pop(todo);
  }
};

const actions = {
  initTodos: ({ commit }) => {
    commit('SET_TODOS', todos);
  },

  addTodo: ({ commit }, newTodo) => {
    commit('ADD_TODO', newTodo);
  },

  deleteTodo: ({ commit }, todo) => {
    commit('DELETE_TODO', todo);
  }
};

const getters = {
  todos: state => {
    return state.todos;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
