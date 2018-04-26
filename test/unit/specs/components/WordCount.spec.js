import Vue from 'vue';
import WordCount from '@/components/WordCount';

describe('WordCount.vue', () => {
  describe('Initial data', () => {
    it('should have default data', () => {
      const defaultText = WordCount.data().text;
      expect(defaultText).toEqual('');
    });
  });

  // it('should render correct contents', () => {
  //   const Constructor = Vue.extend(WordCount);
  //   const vm = new Constructor().$mount();
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .toEqual('Welcome to Your Vue.js App');
  // });
});
