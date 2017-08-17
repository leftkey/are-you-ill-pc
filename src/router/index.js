import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import List from '@/components/List'
import Center from '@/components/Center'
import Download from '@/components/Download'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/list',
      name:'List',
      component: List
    },
    {
    	path:'/center',
    	name:'Center',
    	component:Center
    },
    {
    	path:'/download',
    	name:'Download',
    	component:Download
    },
    {
    	path:'/about',
    	name:'About',
    	component:About
    }
  ]
})
