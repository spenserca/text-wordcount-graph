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
      <div id="pie"></div>
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
      let data = [
        {
          values: this.values,
          labels: this.labels,
          type: "pie"
        }
      ];
      let layout = {
        title: "Word Counts",
        showlegend: false
      };
      let config = {
        displayModeBar: false
      };
      Plotly.newPlot("pie", data, layout, config);
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
