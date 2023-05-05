<template>
  <div class="container_opinion">
    <div class="container_widget_opinion">
      <div class="icon_pa">
        <i class="bx bx-message-square-dots"></i>
      </div>
      <h1 class="title">{{ $t("widgets.opinion.title") }}</h1>
      <div class="info">
        <ul class="opinions_list">
          <li
            class="opinions_list_item"
            v-for="(option, index) in opinionsData"
            :key="index"
          >
            <i class="bx" :class="option.icon"> </i>
            <span class="opinions_list_item_int">{{
              getDataByType(option.name)
            }}</span>
            <span class="opinions_list_item_per">
              {{ option.percentage }}
            </span>
          </li>
        </ul>
        <div>
          <highcharts
            id="chart_opinion"
            class="opinion_chart"
            :options="chartOptions"
          ></highcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Chart } from "highcharts-vue";
import ResizeObserver from "resize-observer-polyfill";

export default Vue.extend({
  name: "MiOpinion",
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      oldData: {
        positive: 0,
        neutral: 0,
        negative: 0,
      },
      data: {
        positive: "--",
        neutral: "--",
        negative: "--",
      },
      // dataPercentage: {
      //   positive: null,
      //   neutral: null,
      //   negative: null,
      // },
      chartOptions: {
        chart: {
          type: "bar",
          height: "70px",
          width: "200",
        },
        tooltip: {
          valueSuffix: "%",
        },
        credits: false,
        title: {
          text: null,
        },
        exporting: { enabled: false },
        xAxis: {
          categories: " ['']",
        },
        yAxis: {
          min: 0,
          max: 100,
          title: null,
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
          series: {
            stacking: "normal",
          },
        },
        // series: [
        //   {
        //     name: "Happy",
        //     data: this.dataPercentage.positive,
        //     // data:[76],
        //     color: "rgb(6, 153, 42)",
        //   },
        //   {
        //     name: "Normal",
        //     data: this.dataPercentage.neutral,
        //                 // data:[76],

        //     color: "rgb(238, 164, 79)",
        //   },
        //   {
        //     name: "Sad",
        //     data: this.dataPercentage.negative,
        //                 // data:[76],

        //     color: "rgb(248, 76, 76)",
        //   },
        // ],
      },
      opinionsData: [
        {
          name: "positive",
          // num: 15,
          percentage: "--%",
          icon: "bx-smile",
        },
        {
          name: "neutral",
          // num: 25,
          percentage: "--%",
          icon: "bx-meh",
        },
        {
          name: "negative",
          // num: 10,
          percentage: "--%",
          icon: "bx-sad",
        },
      ],
    };
  },
  mounted() {
    const resize_ob = new ResizeObserver((entries) => {
      let rect = entries[0].contentRect;
      // current width
      let currentwidth = rect.width;
      this.chartOptions.chart.width = parseFloat(currentwidth) - 20;
    });

    resize_ob.observe(document.querySelector(".container_opinion"));

    // this.setDataPercentage();
    this.setSeries();
    // this.dataPercentage.positive = 84;
  },
  computed: {
    dataPercentage() {
      const total = this.calculateTotal();
      const positivePercentage = this.calculatePercent(
        this.data.positive,
        total
      );
      const negativePercentage = this.calculatePercent(
        this.data.negative,
        total
      );
      const neutralPercentage = this.calculatePercent(this.data.neutral, total);

      return {
        positive: positivePercentage,
        neutral: neutralPercentage,
        negative: negativePercentage,
      };
    },
  },
  watch: {
    data: function (newValue, oldValue) {
      this.oldData = oldValue;
      // this.setDataPercentage();
      this.setSeries();
    },
  },
  methods: {
    getDataByType(type) {
      return this.data[type];
    },
    setSeries() {
      const series = [
        {
          name: "Happy",
          data: [this.dataPercentage.positive],
          // data:[76],
          color: "rgb(6, 153, 42)",
        },
        {
          name: "Normal",
          data: [this.dataPercentage.neutral],
          // data:[76],

          color: "rgb(238, 164, 79)",
        },
        {
          name: "Sad",
          data: [this.dataPercentage.negative],
          // data:[76],

          color: "rgb(248, 76, 76)",
        },
      ];
      this.chartOptions.series = series;
    },
    setDataPercentage() {
      //TODO: Este método habría que hacerlo genérico para cualquier tipo de dato que nos venga y cualquier cantidad
      const total = this.calculateTotal();
      this.dataPercentage.positive = this.calculatePercent(
        this.data.positive,
        total
      );
      this.dataPercentage.negative = this.calculatePercent(
        this.data.negative,
        total
      );
      this.dataPercentage.neutral = this.calculatePercent(
        this.data.neutral,
        total
      );
    },
    calculatePercent(data, total) {
      return Math.round((data * 100) / total);
    },
    calculateTotal() {
      return this.data.positive + this.data.negative + this.data.neutral;
    },
  },
});
</script>

<style>
.container_opinion {
  display: flex;
  height: 100%;
  width: 100%;
}

.container_widget_opinion {
  background: #ffffff;
  border-radius: 12px;
  padding: 1vh 1vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
}

.container_opinion .icon_pa {
  background: #f0d030;
  width: 2vw;
  height: 2vw;
  color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
}

.container_opinion .icon_pa .bx-message-square-dots {
  font-size: 1.2vw;
}

.container_opinion .title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9vw;
  color: #3a3a3a;
  letter-spacing: 1px;
  margin-left: 0.5vw;
}

.container_opinion .info {
  width: 100%;
}

.container_opinion .opinions_list {
  list-style: none;
  margin-top: 2vh;
  margin-bottom: 1vh;
}

.container_opinion .opinions_list .opinions_list_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background: rgb(253, 253, 253);
}

.container_opinion .opinions_list .opinions_list_item .bx {
  font-size: 1.4vw;
}

.container_opinion .opinions_list .opinions_list_item .bx-smile {
  color: rgb(6, 153, 42);
}

.container_opinion .opinions_list .opinions_list_item .bx-sad {
  color: rgb(248, 76, 76);
}

.container_opinion .opinions_list .opinions_list_item .bx-meh {
  color: rgb(238, 164, 79);
}

.container_opinion .opinions_list .opinions_list_item .opinions_list_item_int {
  font-size: 0.9vw;
  font-weight: 400;
}

.container_opinion .opinions_list .opinions_list_item .opinions_list_item_per {
  font-size: 0.9vw;
  font-weight: 500;
}
</style>