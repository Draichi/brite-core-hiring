import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedRisks: [],
    error: null
  },
  mutations: {
    setLoadedRisks (state, payload) {
      state.loadedRisks = payload
    },
    createRisk (state, payload) {
      state.loadedRisks.push(payload)
    },
    setError (state, payload) {
      state.payload = payload
    }
  },
  actions: {
    loadedRisks ({commit}) {
      firebase.database().ref('risks').once('value')
        .then(data => {
          const risks = []
          const obj = data.val()
          for (let key in obj) {
            risks.push({
              id: key,
              title: obj[key].title,
              rows: obj[key].rows
            })
          }
          commit('setLoadedRisks', risks)
        })
        .catch(error => {
          console.log(error)
        })
    },
    createRisk ({commit, getters}, payload) {
      const risk = {
        title: payload.title,
        rows: payload.rows
      }
      firebase.database().ref('risks').push(risk)
        .then(data => {
          console.log(data)
          const key = data.key
          commit('createRisk', {...risk, id: key})
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    loadedRisks (state) {
      return state.loadedRisks.sort((riskA, riskB) => {
        return riskA.date > riskB.date
      })
    },
    error (state) {
      return state.error
    },
    loadedRisk (state) {
      return (riskId) => {
        return state.loadedRisks.find((risk) => {
          return risk.id === riskId
        })
      }
    }
  }
})