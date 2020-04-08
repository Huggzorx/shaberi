import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router';

var firebaseConfig = {
  apiKey: "AIzaSyCBJEeE3O7y6u8E9-17jSXU4FMZd0wRrL4",
  authDomain: "shaberi-56fb1.firebaseapp.com",
  databaseURL: "https://shaberi-56fb1.firebaseio.com",
  projectId: "shaberi-56fb1",
  storageBucket: "shaberi-56fb1.appspot.com",
  messagingSenderId: "16009985623",
  appId: "1:16009985623:web:a2477da5fa14940018ed12",
  measurementId: "G-4EKZJV3Y6K"
};

Vue.use(Vuex)
firebase.initializeApp(firebaseConfig);

export default new Vuex.Store({
  state: {
    user: {
      uid: null,
      email: null
    },
    status: null,
    error: null,
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },

    removeUser(state){
      state.user = null
    },

    setStatus(state, payload){
      state.status = payload
    },

    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    registerAction({ commit }, payload){
      commit('setStatus', 'loading')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((response => {
          commit('setUser', {
            uid: response.user.uid,
            email: response.user.email
          })
          commit('setStatus', 'success'),
          commit('setError', null)
          router.push('/dashboard');
        }))
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },

    loginAction({ commit }, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((response) => {
          commit('setUser', {
            uid: response.user.uid,
            email: response.user.email
          })
          commit('setStatus', 'success'),
          commit('setError', null)
          router.push('/dashboard');
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },

    logoutAction({commit}){
      firebase.auth().signOut()
        .then(() => {
          commit('setUser', {
            uid: null,
            email: null
          })
          commit('setStatus', 'success')
          commit('setError', null)
          router.push('/login');
        })
        .catch((error) => {
          commit('setStatus', 'failure')
          commit('setError', error.message)
        })
    },
  },
  getters: {
    status(state){
      return state.status
    },
    error(state){
      return state.error
    },
    user(state){
      return state.user
    }
  },
  modules: {
  }
})
