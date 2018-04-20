import Vue from 'vue'
import Router from 'vue-router'
import Chart from '@/components/Chart'
import WordCount from '@/components/WordCount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/charts',
      name: 'Charts',
      component: Chart
    },
    {
      path: '/word-counter',
      name: 'WordCount',
      component: WordCount
    }
  ]
})
