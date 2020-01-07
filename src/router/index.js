import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientList from '@/components/ClientList'
import ShowClientDetails from '@/components/ShowClientDetails'
import AddClient from '@/components/AddClient'
import EditClient from '@/components/EditClient'
import ClientStaticFileUpload from "@/components/ClientStaticFileUpload"
import ViewClientStaticFile from "@/components/ViewClientStaticFile"
import LightBox from '@/components/LightBox'
import Login from '@/components/Login'
import Register from '@/components/Register'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'ClientList',
    component: ClientList,
    meta: {
      auth: true
    }
  },
  {
    path: '/showClientDetails/:id',
    name: 'ShowClientDetails',
    component: ShowClientDetails,
    meta: {
      auth: true
    }
  },
  {
    path: '/addClient',
    name: 'AddClient',
    component: AddClient,
    meta: {
      auth: true
    }
  },
  {
    path: '/editClient/:id',
    name: 'editClient',
    component: EditClient,
    meta: {
      auth: true
    }
  }, 
  {
    path: '/client-fileUpload/:id', 
    name: 'ClientStaticFileUpload', 
    component: ClientStaticFileUpload,
    meta: {
      auth: true
    }
  }, 
  // {
  //   path: '/view-clientStaticFile/:id',
  //   name: 'ViewClientStaticFile',
  //   component: ViewClientStaticFile
  // },
  // {
  //   path: '/lightbot/:id',
  //   name: 'LightBox',
  //   component: LightBox
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  }, 
  {
    path: '/userRegister',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
