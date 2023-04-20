<template>
  <div>
    <h1>Tabla Básica</h1>
    <label for="busqueda">Introduce un número para filtrar: </label>
    <input id="busqueda" v-model="searchText"  placeholder="Buscar...">

    <div id="mitabla"></div>

    <br>
    <button @click="descargarCSV()">
        Descargar CSV
    </button>
  </div>
</template>

<script>
  import {Tabulator} from 'tabulator-tables';
  import exportFromJSON from "export-from-json"

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
          {"id": 6, "afluencia": 1500, "comparacion": 60 },
          {"id": 7, "afluencia": 800, "comparacion": 40},
          {"id": 8, "afluencia": 1100, "comparacion": 55},
          {"id": 9, "afluencia": 650, "comparacion": 30},
          {"id": 10, "afluencia": 950, "comparacion": 0}
        ],
        searchText: ''
      }
    },
    
    computed: {
      //console.log("Entra en watch")
        filteredData() {
          //console.log("Entra en filteredData")
          const busqueda = this.searchText;
            return this.data.filter(obj => {
              //console.log(busqueda) Tiene el valor correcto
              return obj.afluencia.toString() === busqueda  || obj.id.toString() === busqueda || obj.comparacion.toString().includes(busqueda);
            });
          },
        },

    mounted() {
      this.table = new Tabulator("#mitabla", {
        columns: [
          { title: "ID", field: "id" },
          { title: "Afluencia", field: "afluencia"},
          { title: "Comparacion", field: "comparacion"},
        ],
        data: this.filteredData,
        
      });
    },

    methods: {
      ordenarAfluencia() {
        this.data.sort((a, b) => a.afluencia - b.afluencia);
      },
      operacionComparacion() {
        this.data = this.data.map(obj => {
          const operacion = ((obj.comparacion * 100) / obj.afluencia - 100).toFixed(2)
          const color = operacion < 0 ? 'red' : 'green'
          const comparacion = `${obj.comparacion} | <span style="color:${color}">${operacion}%</span>`
          return {
            ...obj,
            comparacion
          }
        });
      },

      descargarCSV(){
        const data = this.data.map(obj => {
          return {
            ...obj,
            comparacion: obj.comparacion.replace(/<[^>]*>/g, '')
          }
        });

        const nombreArchivo = 'Trabajo';
        const exportType = exportFromJSON.types.csv;
        exportFromJSON({data, fileName: nombreArchivo, exportType});
      }
      
    },

    created() {
      this.ordenarAfluencia();
      this.operacionComparacion();
    },

    watch: {
      searchText: function() {
        //console.log("Entra en watch")
        this.table.setData(this.filteredData);
      }
    }
  };
</script>
