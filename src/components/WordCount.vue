<template>
  <div>
    <div>
      <input v-model="text" placeholder="Add text here" >
      <button v-on:click="appendText()">Append text</button>
      <div>
        <span>{{ appendedText }}</span>
      </div>
    </div>
    <div ref="histogram"></div>
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
      labels: []
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
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
  methods: {
    fetchData() {
      let words = wordcount(this.appendedText);
      this.values = words.map(w => w.value);
      this.labels = words.map(w => w.key);
    },
    appendText() {
      this.appendedText = `${this.appendedText} ${this.text}`;

      this.fetchData(this.appendedText);
      this.plotGraph();
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
    }
  }
};
</script>

<style>

</style>
