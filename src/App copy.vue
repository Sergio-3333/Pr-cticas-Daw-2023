<template>
  <div class="grid-stack">
    <button @click="addNewWidget">Add Widget</button>
    <grid-stack :options="gridOptions">
      <grid-stack-item
        v-for="widget in widgets"
        :key="widget.id"
        :x="widget.x"
        :y="widget.y"
        :w="widget.width"
        :h="widget.height"
        :id="widget.id"
        :max-w="widget.maxWidth"
        :min-w="widget.minWidth"
        :no-resize="widget.noResize"
        :widget-type="widget.widgetType"
      >
        <component :is="widget.component"></component>
      </grid-stack-item>
    </grid-stack>
  </div>
</template>

<script>
import GridStack from "gridstack";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/h5/gridstack-dd-native";

import WidgetA from "@/components/WidgetA.vue";
import WidgetB from "@/components/WidgetB.vue";

export default {
  name: "MiDashboard",
  components: {
    WidgetA,
    WidgetB,
  },
  data() {
    return {
      widgets: [],
      nextWidgetId: 1,
      gridOptions: {
        column: 12,
        cellHeight: 80,
        margin: "0px",
      },
    };
  },
  methods: {
    addNewWidget() {
      // generate random x and y position for the new widget
      const x = Math.floor(Math.random() * this.gridOptions.column);
      const y = Math.floor(Math.random() * 4);

      // select a random widget type for the new widget
      const widgetTypes = ["WidgetA", "WidgetB"];
      const widgetType =
        widgetTypes[Math.floor(Math.random() * widgetTypes.length)];

      // add the new widget to the list
      this.widgets.push({
        id: this.nextWidgetId++,
        x,
        y,
        width: 2,
        height: 4,
        minWidth: 2,
        maxWidth: 4,
        noResize: true,
        widgetType,
        component: widgetType,
      });
    },
  },
};
</script>

<style>
.grid-stack {
  background-color: #eee;
  padding: 10px;
}
</style>
