<template>
  <div class="prueba" style="width: 100%">
    <div :id="container" class="container"></div>
  </div>
</template>

<script>
import ResizeObserver from "resize-observer-polyfill";
import Highcharts from "highcharts";

export default {
  props: {
    rangoFechas: {
      type: Array
    }
  },
  data() {
    return {
      container: `grafica-${this._uid}`,
      widthChart: "800",
      heightChart: "auto",
      rangoFechas: [], //Creo el objeto de las fechas del v-model
      data: [
        {dataClassId: 9, dt: "2022-01-01", hr: 0, vehiclesIn: 55, vehiclesOcc: 16,},
        { dt: "2022-01-01", hr: 1, vehiclesIn: 26, vehiclesOcc: 7 },
        {dataClassId: 9, dt: "2022-01-01",hr: 2,vehiclesIn: 15,vehiclesOcc: 10,},
        {dataClassId: 9,dt: "2022-01-01",hr: 3,vehiclesIn: 36,vehiclesOcc: 18,},
        { dt: "2022-01-01", hr: 4, vehiclesIn: 27, vehiclesOcc: 16 },
        { dt: "2022-01-01", hr: 5, vehiclesIn: 45, vehiclesOcc: 6 },
        { dt: "2022-01-01", hr: 6, vehiclesIn: 31, vehiclesOcc: 11 },
        { dt: "2022-01-01", hr: 7, vehiclesIn: 42, vehiclesOcc: 26 },
        { dt: "2022-01-01", hr: 8, vehiclesIn: 42, vehiclesOcc: 23 },
        {dataClassId: 9,dt: "2023-04-25",hr: 0,vehiclesIn: 62,vehiclesOcc: 21,},
        { dt: "2023-04-25", hr: 10, vehiclesIn: 31, vehiclesOcc: 11 },
        {dataClassId: 9,dt: "2023-04-25",hr: 11,vehiclesIn: 19,vehiclesOcc: 7,},
        {dataClassId: 9,dt: "2023-04-25",hr: 12,vehiclesIn: 43,vehiclesOcc: 15,},
        { dt: "2023-04-25", hr: 13, vehiclesIn: 29, vehiclesOcc: 13 },
        { dt: "2023-04-25", hr: 14, vehiclesIn: 49, vehiclesOcc: 9 },
        { dt: "2023-04-25", hr: 15, vehiclesIn: 38, vehiclesOcc: 18 },
      ],

      
      dataInvent: [
        {dataClassId: 9,dt: "2012-12-22",hr: 0,vehiclesIn: 60,vehiclesOcc: 13},
        { dt: "2012-12-22", hr: 1, vehiclesIn: 30, vehiclesOcc: 10 },
        {dataClassId: 9,dt: "2012-12-22",hr: 2,vehiclesIn: 50,vehiclesOcc: 13},
        {dataClassId: 9,dt: "2018-07-06",hr: 3,vehiclesIn: 44,vehiclesOcc: 12},
        { dt: "2018-07-06", hr: 4, vehiclesIn: 33, vehiclesOcc: 16 },
        { dt: "2020-09-23", hr: 5, vehiclesIn: 33, vehiclesOcc: 3 },
        { dt: "2020-09-23", hr: 6, vehiclesIn: 55, vehiclesOcc: 10 },
        { dt: "2020-09-23", hr: 7, vehiclesIn: 26, vehiclesOcc: 10 },
        { dt: "2020-09-23", hr: 8, vehiclesIn: 13, vehiclesOcc: 1 },
        {dataClassId: 9,dt: "2020-09-23",hr: 0,vehiclesIn: 63,vehiclesOcc: 30,},
        { dt: "2020-09-23", hr: 10, vehiclesIn: 16, vehiclesOcc: 9 },
        {dataClassId: 9,dt: "2020-09-23",hr: 11,vehiclesIn: 8,vehiclesOcc: 1},
        {dataClassId: 9,dt: "2023-05-24",hr: 12,vehiclesIn: 33,vehiclesOcc: 14,},
        { dt: "2023-05-24", hr: 13, vehiclesIn: 47, vehiclesOcc: 23 },
        { dt: "2023-05-24", hr: 14, vehiclesIn: 49, vehiclesOcc: 16 },
        { dt: "2023-05-24", hr: 15, vehiclesIn: 13, vehiclesOcc: 4 },
      ],
    };
  },
  computed: {
    chartOptions() {
      const fecha = this.data.map((item) => Date.parse(item.dt));
      const vehiclesIn = this.data.map((item) => item.vehiclesIn);
      const vehiclesOcc = this.data.map((item) => item.vehiclesOcc);
      const fechaInvent = this.dataInvent.map((item) => Date.parse(item.dt));
      const vehiclesInInvent = this.dataInvent.map((item) => item.vehiclesIn);
      const vehiclesOccInvent = this.dataInvent.map((item) => item.vehiclesOcc);
      return {
        chart: {
          zoomType: "x",
          //width: this.widthChart,  Le quito esto para que la tabla se muestre con todo el ancho del container. Y para hacer que ocupe tambien todo el alto, edito el container en el css poniendo la altura al 100%
          //height: this.heightChart,
          backgroundColor: "#000000",
        },
        title: {
          text: "Vehicles",
        },
        xAxis: {
          type: "category",
          fecha: fecha,
          fechaInvent: fechaInvent,
          tickInterval: 2,
        },
        yAxis: [
          {
            title: {
              text: "VehiclesIn",
            },
          },
          {
            title: {
              text: "VehiclesOcc",
            },
            opposite: true,
          },
        ],
        series: [
          {
            name: "VehiclesOcc",
            yAxis: 1,
            data: vehiclesOcc,
            color: "rgba(13, 13, 149, .2)",
            lineWidth: 5,
            type: "area",
          },
          {
            name: "VehiclesOccInvent",
            yAxis: 1,
            data: vehiclesOccInvent,
            color: "blue",
            lineWidth: 5,
            type: "spline",
            dashStyle: "ShortDot",
          },
          {
            name: "VehiclesIn",
            yAxis: 0,
            data: vehiclesIn,
            color: "rgba(0, 255, 0, .2)",
            lineWidth: 5,
            type: "area",
          },
          {
            name: "VehiclesInInvent",
            yAxis: 0,
            data: vehiclesInInvent,
            color: "green",
            lineWidth: 5,
            type: "spline",
            dashStyle: "ShortDot",
          },
        ],
        tooltip: {
          formatter: function () {
            var tooltip =
              "Fecha: <b>" +
              Highcharts.dateFormat("%Y-%m-%d", fecha[this.point.index]) +
              "</b><br/>" +
              "Fecha Inventada: <b>" +
              Highcharts.dateFormat("%Y-%m-%d", fechaInvent[this.point.index]) +
              "</b><br/>" +
              "VehiclesIn: <b>" +
              vehiclesIn[this.point.index] +
              "</b><br/>" +
              "VehiclesIn Inventada: <b>" +
              vehiclesInInvent[this.point.index] +
              "</b><br/>" +
              "VehiclesOcc: <b>" +
              vehiclesOcc[this.point.index] +
              "</b><br/>" +
              "VehiclesOcc Inventada: <b>" +
              vehiclesOccInvent[this.point.index] +
              "</b><br/>";
            return tooltip;
          },
        },
      };
    },
  },
  
  mounted() {
    const resize_ob = new ResizeObserver((entries) => {
      let rect = entries[0].contentRect; 

      let currentwidth = rect.width;

      let currentHeight = rect.height;

      if (currentwidth < 500) {
        this.widthChart = currentwidth;

        this.heightChart = currentHeight - 50;
      } else {
        this.widthChart = parseFloat(currentwidth) - 80;

        this.heightChart = parseFloat(currentHeight) - 30;
      }      

      Highcharts.chart(this.container, this.chartOptions); //El unico cambio que he hecho es renderizar la tabla despues del codigo para que así se renderice con las opciones de resizeobserver

    });

    resize_ob.observe(document.querySelector(".prueba"));

    this.actualizarGrafica(); // Llama a la función para mostrar los datos filtrados desde el principio
  },
  methods: {
    actualizarGrafica() {
    
        if (this.rangoFechas && this.rangoFechas.length === 2) {//Compruebo que haya numeros y que sean dos
          const fechaInicio = new Date(Date.parse(this.rangoFechas[0]));//Primer elemento del array rangoFechas
          const fechaFin = new Date(Date.parse(this.rangoFechas[1]));//Segundo elemento del array rangoFechas

          //console.log(fechaFin); //Thu Jun 22 2023 00:00:00 GMT+0200 (hora de verano de Europa central)


          this.data = this.data.filter(item => {
            const fechaItem = new Date(item.dt);
            //console.log(fechaItem) //Tue Apr 25 2023 02:00:00 GMT+0200 (hora de verano de Europa central)
            return fechaItem >= fechaInicio && fechaItem <= fechaFin;
          });

          this.dataInvent = this.dataInvent.filter(item => {
            const fechaItem = new Date(item.dt);
            return fechaItem >= fechaInicio && fechaItem <= fechaFin;
          });

          //console.log('Array de datos ya filtrados:', this.data);
          //console.log('Array de datos inventados ya filtrados:', this.dataInvent);
          
        Highcharts.chart(this.container, this.chartOptions);
        
      }
    }


 }
 } ;
</script>
