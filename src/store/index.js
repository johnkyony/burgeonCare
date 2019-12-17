import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../Firebase'

Vue.use(Vuex)

firebase.firestore().collection('ClientStaticFiles').onSnapshot((querySnapshot) => {
  let items = []
  querySnapshot.forEach((doc) => {
    
    this.items.push({
      clientId: doc.data().clientId, 
      fileCategory: doc.data().fileCategory,
      imageName: doc.data().imageName, 
      imageUrl: doc.data().imageUrl
    })
  })
  store.commit('setClientStaticFiles' , items)
})

export default new Vuex.Store({
  state: {
    clientStaticFiles: []
  },
  mutations: {
    setClientStaticFiles(state, payload){
      state.clientStaticFiles = payload
    }
  },
  actions: {
  },
  modules: {
  }, 
  getters: {
    
  }
})
