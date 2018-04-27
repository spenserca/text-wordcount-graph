import Vue from 'vue';
import { shallow } from '@vue/test-utils';
import WordCount from '@/components/WordCount';

describe('WordCount.vue', () => {
  it('should have a name', () => {
    const name = WordCount.name;
    expect(name).toEqual('WordCount');
  });

  describe('data', () => {
    it('should have a data hook', () => {
      expect(typeof WordCount.data).toBe('function');
    });

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

  describe('created', () => {
    it('should have a created hook', () => {
      expect(typeof WordCount.created).toBe('function');
    });

    // TODO: test that populateData is called on created()
  });

  describe('methods', () => {
    it('should have a populateData method', () => {
      expect(typeof WordCount.methods.populateData).toBe('function');
    });

    it('should have an appendText method', () => {
      expect(typeof WordCount.methods.appendText).toBe('function');
    });

    it('should have a plotGraph method', () => {
      expect(typeof WordCount.methods.plotGraph).toBe('function');
    });

    it('should have a setHasWords method', () => {
      expect(typeof WordCount.methods.setHasWords).toBe('function');
    });

    it('should have a clearData method', () => {
      expect(typeof WordCount.methods.clearData).toBe('function');
    });

    it('should have an abbreviatedText method', () => {
      expect(typeof WordCount.methods.abbreviatedText).toBe('function');
    });
  });

  describe('UI', () => {
    it('should not show the pie chart if no data exists', () => {
      const wrapper = shallow(WordCount, {
        data: {
          hasWords: false
        }
      });
      expect(wrapper.find('#pie').exists()).toBe(false);
    });

    it('should show the pie chart if data exists', () => {
      const wrapper = shallow(WordCount, {
        data: {
          hasWords: true
        }
      });
      expect(wrapper.find('#pie').exists()).toBe(true);
    });
  });

  // it('should render correct contents', () => {
  //   const Constructor = Vue.extend(WordCount);
  //   const vm = new Constructor().$mount();
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .toEqual('Welcome to Your Vue.js App');
  // });
});
