import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    produto: null,
    listaBurguer: [],
    listaPizza: []
  },
  mutations: {
    selectProduto(state, payload) {
      state.produto = payload
    },
    setBurguer(state, payload) {
      state.listaBurguer = payload
    },
    setPizza(state, payload) {
      state.listaPizza = payload
    }
  },
  actions: {
    getMenu(store) { 
      var data
      return axios({
        url: "https://front-end-test-app.s3.amazonaws.com/menu.json",
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
      }).then(function (response) {
  
        if (response.status == "200") {
          response.data.forEach(element => {
            if (element.category_title === "Burger") {
              data = {
                category_title: "Burger",
                data: element.products
              }
              console.log('Burger', data)
              store.commit('setBurguer', data)

            } else if (element.category_title === "Pizza") {
              data = {
                category_title: "Pizza",
                data: element.products
              }
              console.log('Pizza', data)
              store.commit('setPizza', data)
            }
          });
          return response.data
        }
      }).catch( error => {
        console.log(error)
        return error
      })
    }
  },
  modules: {
  }
})
