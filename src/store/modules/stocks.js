import stocks from '../../data/static_stocks.js';

const state = {
  stocks: []
};

const mutations = {
  //Manage the state - changes to the stocks
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RANDOM_STOCKS(state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
    //commit();
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RANDOM_STOCKS');
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
