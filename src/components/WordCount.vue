<template>
  <div>
    <div>
      <input v-model="text" placeholder="Add text here">
      <button @click="appendText()">Append text</button>
      <button @click="clearData()">Clear text</button>
      <div>
        <span>{{ appendedText }}</span>
      </div>
    </div>
    <div v-show="hasWords">
      <div ref="histogram"></div>
    </div>
  </div>
</template>

<script>
import Plotly from "plotly.js";
import wordcount from "../code/wordcount";

export default {
  name: "WordCount",
  data() {
    return {
      text: "",
      appendedText: "",
      values: [],
      labels: [],
      hasWords: false
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let words = wordcount(this.appendedText);
      this.values = words.map(w => w.value);
      this.labels = words.map(w => w.key);
    },
    appendText() {
      this.appendedText = `${this.appendedText} ${this.text}`;
      this.fetchData();
      this.plotGraph();
      this.setHasWords();
    },
    plotGraph() {
      Plotly.plot(
        this.$refs.histogram,
        [
          {
            values: this.values,
            labels: this.labels,
            type: "pie"
          }
        ],
        {
          margin: { t: 0, l: 0, b: 0, r: 0 }
        }
      );
    },
    setHasWords() {
      this.hasWords = this.appendedText.length > 0;
    },
    clearData() {
      this.appendedText = "";
      this.text = "";
      this.values = [];
      this.labels = [];

      this.setHasWords();
    }
  }
};
</script>

<style>

</style>
