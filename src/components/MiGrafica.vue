<template>
  <div class="prueba" style="width: 100%">
    <div :id="container" class="container"></div>
  </div>
</template>

<script>
import ResizeObserver from "resize-observer-polyfill";
import Highcharts from "highcharts";
import { differenceInDays } from 'date-fns';

export default {
  props: {
    widgetConfiguration: {
      rangoFechas: {
        type: Array,
        default: [new Date(Date.now()), new Date(Date.now())],
      },
      rangoFechas2: {
        type: Array,
        default: [new Date(Date.now()), new Date(Date.now())],
      },
    }
  },
  data() {
    return {
      container: `grafica-${this._uid}`,
      widthChart: "800",
      heightChart: "auto",
      data2: [], //creo dos objetos vacios de data y datainvent
      dataInvent2: [],
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
    
    this.data2 = this.data; //guardo los json en los objetos creados para que no se borren los datos de los json. Lo hago aqui porque es donde se empieza a inicializar todo y es donde no se va a perder nada
    this.dataInvent2 = this.dataInvent;

    const resize_ob = new ResizeObserver((entries) => {
      entries.forEach(entry =>{         //Recorro cada elemento del contenedor para hacer cambios en cada uno de ellos

      const rect = entry.contentRect; //Obtengo el contenedor del elemento seleccionado

      //Obtengo el ancho y alto predefinido
      let currentwidth = rect.width;

      let currentHeight = rect.height;

      //Defino nuevo ancho y largo
      let widthChart, heightChart;

      if (currentwidth < 500) {
        widthChart = currentwidth;    

        heightChart = currentHeight - 40;
        
      } else {
        widthChart = parseFloat(currentwidth) - 30;

        heightChart = parseFloat(currentHeight);
      }      

      Highcharts.chart(entry.target,{   //Con entry.target hago referencia al elemento del contenedor que quiero cambiar
        ...this.chartOptions, //Copio las opciones de la grafica
        chart: {
          ...this.chartOptions.chart, //Copio las propiedades del objeto chart y le añado la anchura y altura definidas anteriormente
          width: widthChart,
          height: heightChart
        }
      });
      })
      
    });
    document.querySelectorAll(".prueba").forEach(container => { //Recorro todo el contenedor de prueba y realizo las funciones a cada elemento del container
      resize_ob.observe(container); 
    });
    
    this.actualizarGrafica(); // Llama a la función para mostrar los datos filtrados desde el principio



  },
  methods: {

    actualizarGrafica() {

      //2020-01-01 ~ 2023-04-01     2012-01-01 ~ 2015-04-01

      console.log("Este es el de MiGrafica",this.widgetConfiguration);
      
      const rangoFechas = this.widgetConfiguration.rangoFechas;
      const rangoFechas2 = this.widgetConfiguration.rangoFechas2;
    
      if (rangoFechas && rangoFechas.length === 2 && rangoFechas2 && rangoFechas2.length === 2) {  //Condicional para verificar si existen dos elemntos/fechas dentro de rango fechas. Las fechas las escoge bien, pero estan en un formato diferente y hay que parsearlas
      const fechaInicio = new Date(Date.parse(rangoFechas[0])); //primera fecha parseada para que reconozca el formato
      const fechaFin = new Date(Date.parse(rangoFechas[1])); //segunda fecha


      const fechaInicio2 = new Date(Date.parse(rangoFechas2[0])); //primera fecha del segundo input parseada para que reconozca el formato
      const fechaFin2 = new Date(Date.parse(rangoFechas2[1])); //segunda fecha del segundo input 

      const difDias1 = differenceInDays(fechaFin, fechaInicio);//Diferencia del primer rango
      const difDias2 = differenceInDays(fechaFin2, fechaInicio2);//Diferencia del segundo rango


      if(difDias1 == difDias2) {//Para asegurar que son la misma diferencia de dias en ambos rangos

        this.data = this.data2.filter(item => { //Filtro los datos del objeto creado. Con esto cuando se actualice la grafica, evito coger otra vez el mismo data que ya ha eliminado los valores que no estaban en las fechas elegidas. 
          const fechaItem = new Date(item.dt);//le paso como variable las fechas (el dt)      //Al reiniciarse el objeto con todos los datos de data, lo unico que hará será volver a pintar los valores que hay entre fechas
          return fechaItem >= fechaInicio && fechaItem <= fechaFin; //Comparo si fecha item se encuentra dentro de las fechas seleccionadas
        });

        this.dataInvent = this.dataInvent2.filter(item => { //Lo mismo que antes
          const fechaItem = new Date(item.dt);
          return fechaItem >= fechaInicio2 && fechaItem <= fechaFin2;//Comparo si fecha item se encuentra dentro de las fechas seleccionadas en el seegundo rango
        });
        
        Highcharts.chart(this.container, this.chartOptions);
      }
    
  }
}
  },

  watch: { //uso el watch para que actualice todo el rato
    
  rangoFechas() {
      this.actualizarGrafica();
  }
},


 } ;
</script>