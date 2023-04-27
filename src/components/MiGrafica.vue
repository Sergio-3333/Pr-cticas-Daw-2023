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
    Highcharts.chart('container', {
        chart: {
                type: 'area'
            },
            title: {
                text: 'Vehicles'
            },
            xAxis: {
                type: "category",
                data: this.data.hr,
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
                    yAxis: 0,
                    data: [55, 26, 15, 36, 27, 45, 31, 42, 42, 62, 31, 19, 43, 29, 49, 38],
                    color: 'green'
                },
                {
                    yAxis: 1,
                    data: [16, 7, 10, 18, 16, 6, 11, 26, 23, 21, 11, 7, 15, 13, 9, 18],
                    color: 'blue'
                }],
                tooltip: {
  formatter: function() {
    var tooltip = '<b>' + Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '</b><br/>';
    tooltip += 'VehiclesIn: <b>' + this.y + '</b><br/>';
    tooltip += 'VehiclesOcc: <b>' + this.vehiclesOcc+ '</b><br/>';
    return tooltip;
  }
},

    });
  }
}
</script>