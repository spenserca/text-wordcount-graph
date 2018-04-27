import Vue from 'vue';
import WordCount from '@/components/WordCount';

describe('WordCount.vue', () => {
  it('should have a name', () => {
    const name = WordCount.name;
    expect(name).toEqual('WordCount');
  });

  describe('Initial data', () => {
    it('should have default text', () => {
      const text = WordCount.data().text;
      expect(text).toEqual('');
    });

    it('should have default appendedText', () => {
      const appendedText = WordCount.data().appendedText;
      expect(appendedText).toEqual('');
    });

    it('should have default values', () => {
      const values = WordCount.data().values;
      expect(values).toEqual([]);
    });

    it('should have default labels', () => {
      const labels = WordCount.data().labels;
      expect(labels).toEqual([]);
    });

    it('should have default hasWords', () => {
      const hasWords = WordCount.data().hasWords;
      expect(hasWords).toEqual(false);
    });
  });

  describe('UI', () => {
    it('should not show the pie chart if no data exists', () => {

    });

    it('should show the pie chart if data exists', () => {

    });
  });

  // it('should render correct contents', () => {
  //   const Constructor = Vue.extend(WordCount);
  //   const vm = new Constructor().$mount();
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .toEqual('Welcome to Your Vue.js App');
  // });
});
