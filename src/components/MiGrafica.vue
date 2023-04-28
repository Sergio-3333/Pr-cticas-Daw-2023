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
        ],

        dataInvent: [
            {"dataClassId": 9,  "dt": "2012-12-22",  "hr": 0,  "vehiclesIn": 60, "vehiclesOcc": 13},
            { "dt": "2012-12-22", "hr": 1, "vehiclesIn": 30, "vehiclesOcc": 10},
            {  "dataClassId": 9, "dt": "2012-12-22", "hr": 2, "vehiclesIn": 50, "vehiclesOcc": 13},
            {  "dataClassId": 9, "dt": "2018-07-06", "hr": 3, "vehiclesIn": 44, "vehiclesOcc": 12 },
            { "dt": "2018-07-06", "hr": 4, "vehiclesIn": 33, "vehiclesOcc": 16, },
            { "dt": "2020-09-23", "hr": 5, "vehiclesIn": 33, "vehiclesOcc": 3, },
            { "dt": "2020-09-23", "hr": 6, "vehiclesIn": 55, "vehiclesOcc": 10, },
            { "dt": "2020-09-23", "hr": 7, "vehiclesIn": 26, "vehiclesOcc": 10,},
            { "dt": "2020-09-23", "hr": 8, "vehiclesIn": 13, "vehiclesOcc": 1, },
            { "dataClassId": 9, "dt": "2020-09-23", "hr": 0, "vehiclesIn": 63, "vehiclesOcc": 30, },
            { "dt": "2020-09-23", "hr": 10, "vehiclesIn": 16, "vehiclesOcc": 9, },
            { "dataClassId": 9, "dt": "2020-09-23", "hr": 11, "vehiclesIn": 8, "vehiclesOcc": 1 },
            { "dataClassId": 9, "dt": "2023-05-24","hr": 12, "vehiclesIn": 33, "vehiclesOcc": 14, },
            { "dt": "2023-05-24", "hr": 13, "vehiclesIn": 47, "vehiclesOcc": 23, },
            { "dt": "2023-05-24", "hr": 14, "vehiclesIn": 49, "vehiclesOcc": 16, },
            { "dt": "2023-05-24", "hr": 15, "vehiclesIn": 13, "vehiclesOcc": 4, },
        ]
        }
    },

    computed: {

        chartOptions(){
            const fecha = this.data.map(item => Date.parse(item.dt)); 
            const vehiclesIn = this.data.map(item => item.vehiclesIn); 
            const vehiclesOcc = this.data.map(item => item.vehiclesOcc); 

            const fechaInvent = this.dataInvent.map(item => Date.parse(item.dt)); 
            const vehiclesInInvent = this.dataInvent.map(item => item.vehiclesIn); 
            const vehiclesOccInvent = this.dataInvent.map(item => item.vehiclesOcc); 
        
        return {
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: 'Vehicles'
                    },
                    xAxis: {
                        type: "category",
                        fecha: fecha,
                        fechaInvent: fechaInvent,
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
                            color: 'rgba(13, 13, 149, .2)',
                            lineWidth: 5,
                            type: 'area'
                        },
                        {
                            name: 'VehiclesOccInvent',
                            yAxis: 1,
                            data: vehiclesOccInvent,
                            color: 'blue',
                            lineWidth: 5,
                            type: 'spline',
                            dashStyle: 'ShortDot'
                        },
                        {
                            name: 'VehiclesIn',
                            yAxis: 0,
                            data: vehiclesIn,
                            color: 'rgba(0, 255, 0, .2)',
                            lineWidth: 5,
                            type: 'area',
                            
                        },
                        {
                            name: 'VehiclesInInvent',
                            yAxis: 0,
                            data: vehiclesInInvent,
                            color: 'green',
                            lineWidth: 5,
                            type: 'spline',
                            dashStyle: 'ShortDot'                            
                        }],
                        tooltip: {

                    formatter: function() {
                        var tooltip = 'Fecha: <b>' + Highcharts.dateFormat('%Y-%m-%d', fecha[this.point.index]) + '</b><br/>';
                        tooltip += 'Fecha Inventada: <b>' + Highcharts.dateFormat('%Y-%m-%d', fechaInvent[this.point.index]) + '</b><br/>';
                        tooltip += 'VehiclesIn: <b>' + vehiclesIn[this.point.index] + '</b><br/>'; 
                        tooltip += 'VehiclesIn Inventada: <b>' + vehiclesInInvent[this.point.index] + '</b><br/>'; 
                        tooltip += 'VehiclesOcc: <b>' + vehiclesOcc[this.point.index] + '</b><br/>'; 
                        tooltip += 'VehiclesOcc Inventada: <b>' + vehiclesOccInvent[this.point.index] + '</b><br/>'; 
                        return tooltip;
                    }
                    }
                }

             }
            },


        mounted() {

            Highcharts.chart('container', this.chartOptions);
 
    }
}
</script>