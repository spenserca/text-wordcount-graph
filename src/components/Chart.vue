<template>
<div class="tile is-ancestor">
  <div class="tile is-parent is-4">
    <article class="tile is-child box">
      <div ref="pie"></div>
    </article>
  </div>
</div>
</template>

<script>
import Plotly from "plotly.js";

export default {
  name: "Chart",
  data() {
    return {
      rows: []
    };
  },
  mounted() {
    Plotly.plot(
      this.$refs.pie,
      [
        {
          values: [19, 26, 55],
          labels: ["Residential", "Non-Residential", "Utility"],
          type: "pie"
        }
      ],
      {
        margin: { t: 0, l: 0, b: 0, r: 0 }
      }
    );
  }
};
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
</style>
