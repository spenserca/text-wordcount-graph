<template>
  <div>
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
      let words = wordcount();
      console.log(words);

      this.values = words.map(w => w.value);
      this.labels = words.map(w => w.key);
    }
  }
};
</script>

<style>

</style>
