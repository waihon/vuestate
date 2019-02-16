import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'https://google.com',
      'https://coursetro.com',
      'https://youtube.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link);
    },
    REMOVE_LINK: (state, linkIndex) => {
      state.links.splice(linkIndex, 1);
    },
    REMOVE_ALL: (state) => {
      state.links = [];
    }
  },
  actions: {
    removeLink: (context, linkIndex) => {
      // context provides us with the same methods and properties on the store instance
      // context.commit is necessary for asynchronous operations
      context.commit("REMOVE_LINK", linkIndex)
    },
    removeAll ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL');
          resolve();
        }, 1500)
      })
    }
  }
})
