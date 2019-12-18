import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../Firebase'

Vue.use(Vuex)

// firebase.firestore().collection('ClientStaticFiles').onSnapshot((querySnapshot) => {
//   let items = []
//   querySnapshot.forEach((doc) => {
    
//     this.items.push({
//       clientId: doc.data().clientId, 
//       fileCategory: doc.data().fileCategory,
//       imageName: doc.data().imageName, 
//       imageUrl: doc.data().imageUrl
//     })
//   })
//   store.commit('setClientStaticFiles' , items)
// })

export default new Vuex.Store({
  state: {
    clientStaticFiles: [],
    clientList: [],
    

  },
  mutations: {
    setClientStaticFiles(state, payload){
      state.clientStaticFiles = payload
    },
    setClientList(state , payload){
      state.clientList = payload
    },
    
  },
  actions: {
    fetchClientStaticFiles: async({commit})=>{
      const menuItems = []
      await firebase.firestore().collection('ClientStaticFiles')
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          menuItems.push({
            key: doc.id , 
            clientId: doc.data().clientId,
            fileCategory: doc.data().fileCategory,
            imageName: doc.data().imageName , 
            imageUrl: doc.data().imageUrl
          })
          commit('setClientStaticFiles' , menuItems)
        })
        
      })
    },
    async fetchAllClientDetails({commit}){
     const menuItems = []
      await firebase.firestore().collection('ClientList')
     .get()
     .then(querySnapshot => {
       querySnapshot.docs.forEach(doc => {
         menuItems.push({
           key: doc.id , 
           clientNo: doc.data().clientNo,
           registeredName: doc.data().registeredName,
           companyRegistrationNumber: doc.data().companyRegistrationNumber,
           dateRegistered: doc.data().dateRegistered , 
           fullData: doc.data(),
           tradingName: doc.data().tradingName
         })
         commit('setClientList', menuItems)
       })
       
     })
   },
   
   
  },
  modules: {
  }, 
  getters: {
    
  }
})
