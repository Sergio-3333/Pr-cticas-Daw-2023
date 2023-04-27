<template>
    <div id="container"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
    components: {  
    },

    data() {
      return {
        data: [
            {"dataClassId": 9,  "dt": "2022-01-01",  "hr": 0,  "vehiclesIn": 55, "vehiclesOcc": 16},
            { "dt": "2022-01-01", "hr": 1, "vehiclesIn": 26, "vehiclesOcc": 7},
            {  "dataClassId": 9, "dt": "2022-01-01", "hr": 2, "vehiclesIn": 15, "vehiclesOcc": 10},
            {  "dataClassId": 9, "dt": "2022-01-01", "hr": 3, "vehiclesIn": 36, "vehiclesOcc": 18 },
            { "dt": "2022-01-01", "hr": 4, "vehiclesIn": 27, "vehiclesOcc": 16, },
            { "dt": "2022-01-01", "hr": 5, "vehiclesIn": 45, "vehiclesOcc": 6, },
            { "dt": "2022-01-01", "hr": 6, "vehiclesIn": 31, "vehiclesOcc": 11, },
            { "dt": "2022-01-01", "hr": 7, "vehiclesIn": 42, "vehiclesOcc": 26,},
            { "dt": "2022-01-01", "hr": 8, "vehiclesIn": 42, "vehiclesOcc": 23, },
            { "dataClassId": 9, "dt": "2023-04-25", "hr": 0, "vehiclesIn": 62, "vehiclesOcc": 21, },
            { "dt": "2023-04-25", "hr": 10, "vehiclesIn": 31, "vehiclesOcc": 11, },
            { "dataClassId": 9, "dt": "2023-04-25", "hr": 11, "vehiclesIn": 19, "vehiclesOcc": 7 },
            { "dataClassId": 9, "dt": "2023-04-25","hr": 12, "vehiclesIn": 43, "vehiclesOcc": 15, },
            { "dt": "2023-04-25", "hr": 13, "vehiclesIn": 29, "vehiclesOcc": 13, },
            { "dt": "2023-04-25", "hr": 14, "vehiclesIn": 49, "vehiclesOcc": 9, },
            { "dt": "2023-04-25", "hr": 15, "vehiclesIn": 38, "vehiclesOcc": 18, },
        ]
        }
    },

  mounted() {
    const fecha = this.data.map(item => Date.parse(item.dt)); 
    const vehiclesIn = this.data.map(item => item.vehiclesIn); 
    const vehiclesOcc = this.data.map(item => item.vehiclesOcc); 
    
    Highcharts.chart('container', {
        chart: {
                type: 'area'
            },
            title: {
                text: 'Vehicles'
            },
            xAxis: {
                type: "category",
                fecha: fecha,
                tickInterval: 2
            },
            yAxis: [{
                title: {
                    text: 'VehiclesIn',
                    
                },
                }, {
                title: {
                    text: 'VehiclesOcc',
                },
                opposite: true,
                }],

            series: [{
                    name: 'VehiclesOcc',
                    yAxis: 1,
                    data: vehiclesOcc,
                    color: 'blue'
                },
                {
                    name: 'VehiclesIn',
                    yAxis: 0,
                    data: vehiclesIn,
                    color: 'green'
                }],
                tooltip: {

            formatter: function() {
                var tooltip = 'Fecha: <b>' + Highcharts.dateFormat('%Y-%m-%d', fecha[this.point.index]) + '</b><br/>';
                tooltip += 'VehiclesIn: <b>' + vehiclesIn[this.point.index] + '</b><br/>'; 
                tooltip += 'VehiclesOcc: <b>' + vehiclesOcc[this.point.index] + '</b><br/>'; 
                return tooltip;
            }
            },

    });
  }
}
</script>