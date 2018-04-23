import Vue from 'vue';
import Router from 'vue-router';
import WordCount from '@/components/WordCount';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/word-counter',
      name: 'WordCount',
      component: WordCount
    }
  ]
});
