import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Index'
import Weather from '@/components/Weather/Index'
import Lost from '@/components/Lost/Index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '*',
      name: 'Lost',
      component: Lost
    }
  ]
})
