import { createStore } from 'vuex';
import axios from 'axios';
import generateHash from '../helpers/index';

const baseUrl = 'https://gateway.marvel.com/v1/public';
const endpoint = '/comics';
const apiKey = 'c18dbbd0f13a1087b3ffc0156f181bde';
const privateKey = '8fc728b998737966a80b79be8e58bbf78eedf947';
const timestamp = new Date().getTime().toString();
const hash = generateHash(timestamp, privateKey, apiKey);
const offset = 50;

const url = `${baseUrl}${endpoint}?apikey=${apiKey}&hash=${hash}&ts=${timestamp}&limit=${offset}&offset=${offset}`;

const comicsData = {
  namespaced: true,
  state() {
    return {
      data: null,
      loading: false,
      error: null,
    };
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get(url);
        commit('setData', response.data);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
      }
    },
  },
};

const store = createStore({
  modules: {
    comicsData,
  },
});

export default store;
