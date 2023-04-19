<template>
  <div>
    <h1>Tabla Básica</h1>
    <div id="example-table"></div>
  </div>
</template>

<script>
import {Tabulator} from 'tabulator-tables';

export default {
  components: {
    
  },
  data() {
    return {
      data: [
      {"id": 1, "afluencia": 1000, "comparacion": 50 }, 
      {"id": 2, "afluencia": 500, "comparacion": 25 },
      {"id": 3, "afluencia": 750, "comparacion": 35},
      {"id": 4, "afluencia": 1200, "comparacion": 60},
      {"id": 5, "afluencia": 900, "comparacion": 45},
      {"id": 6, "afluencia": 1500, "comparacion": 75},
      {"id": 7, "afluencia": 800, "comparacion": 40},
      {"id": 8, "afluencia": 1100, "comparacion": 55},
      {"id": 9, "afluencia": 650, "comparacion": 30},
      {"id": 10, "afluencia": 950, "comparacion": 0}

    ]
  }
  },
mounted() {
  this.table = new Tabulator("#example-table", {
    columns: [
      { title: "ID", field: "id" },
      { title: "Afluencia", field: "afluencia", sorter: "number" },
      { title: "Comparacion", field: "comparacion", formatter: (cell) => {
          const afluencia = cell.getRow().getData().afluencia;
          const comparacion = cell.getValue();
          console.log(afluencia)
          console.log(comparacion)
          const porcentaje = ((comparacion * 100) / afluencia - 100).toFixed(2)
          console.log(porcentaje)
          return `${comparacion} +${porcentaje}%`
      }
  },
    ],
    data: this.data
  });
}
};
</script>

<style scoped>
</style>