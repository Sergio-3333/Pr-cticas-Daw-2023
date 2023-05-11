<template>

  <div class="pruebaTabla">
    <h1>Tabla Básica</h1>
    <label for="busqueda">Introduce un número para filtrar: </label>
    <input id="busqueda" v-model="searchText"  placeholder="Buscar...">

    <div id="mitabla"></div>

    <p></p>
    <button @click="descargarCSV()">
        Descargar CSV
    </button>
  </div>
</template>

<script>
  import {TabulatorFull as Tabulator} from 'tabulator-tables';
  import ResizeObserver from "resize-observer-polyfill";


  export default {
    components: {  
    },
    data() {
      return {
        data: [
          {"id": 1, "afluencia": 1000, "comparacion": 50 }, 
          {"id": 2, "afluencia": 500, "comparacion": 1200 },
          {"id": 3, "afluencia": 750, "comparacion": 35},
          {"id": 4, "afluencia": 1200, "comparacion": 60},
          {"id": 5, "afluencia": 900, "comparacion": 1500},
          {"id": 6, "afluencia": 1500, "comparacion": 1800 },
          {"id": 7, "afluencia": 800, "comparacion": 40},
          {"id": 8, "afluencia": 1100, "comparacion": 55},
          {"id": 9, "afluencia": 650, "comparacion": 1400},
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
      const resize_ob = new ResizeObserver((entries) => {
        let rect = entries[0].contentRect;
        // current width
        let currentwidth = rect.width;
        let currentHeight = rect.height;
        if (currentwidth < 500) {
          this.widthChart = currentwidth;
          this.heightChart = currentHeight - 50;
        } else {
          this.widthChart = parseFloat(currentwidth) - 80;
          this.heightChart = parseFloat(currentHeight) - 30;
        }
      });
      resize_ob.observe(document.querySelector(".prueba"));

      this.table = new Tabulator("#mitabla", {
        pagination:true, 
        paginationSize:5,
        columns: [
          { title: "ID", field: "id",sortable: true},
          { title: "Afluencia", field: "afluencia", sortable: true, sorter:"number"},
          { title: "Comparacion", field: "comparacion", formatter: this.operacionComparacion} //Uso el formater con una principal razon de uso pero sirve para dos cosas.
        ],
        data: this.filteredData,
        initialSort:[
          {column:"afluencia", dir:"desc"}
        ],
      });
    },

    methods: {
      
      operacionComparacion(obj) {
          const operacion = ((obj.getValue() * 100) / obj.getRow().getData().afluencia - 100).toFixed(2); //La primera, me permite obtener el valor de cada fila de comparacion sin necesidad de hacerlo como en afluencia
          const color = operacion < 0 ? 'red' : 'green';
          const comparacion = `${obj.getValue()} | <span style="color:${color}">${operacion}%</span>`; //La segunda, me permite imprimir solo el valor de la operacion con el color obtenido en vez de que me imprima toda la etiqueta spam
          return comparacion; 
        },

      descargarCSV(){
        const datosDescarga = this.filteredData.map(obj => {
          
          return {
            id: obj.id,
            afluencia: obj.afluencia,
            comparacion: obj.comparacion
          }
        });
        this.table.download("csv","Trabajo.csv", datosDescarga);
      }
      
    },

    created() {
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

<style>
.pruebaTabla {
    height: 100%;
    /*El eje X está en auto para que aparezca en funcion de los cambios o no, a diferencia del eje Y que es el lateral que siempre va a esar oculto*/
    overflow-x: auto;
    overflow-y: scroll;
}

/*Con esta pseudoclase, defino la altura, el ancho etc (Documentacion en W3C) */

.pruebaTabla::-webkit-scrollbar {
    height: 10px;
    width: 0;
}


/*Y con esta, a parte de poder definir el color, lo que hace eso definir por defecto el tamaño de la barra de desplazamiento en funcion del tamaño de la web*/

.pruebaTabla::-webkit-scrollbar-thumb {
    background-color: #000000;
}

/*En la Grafica no funciona porque no es dinamica, entonces como no cambia segun el tamaño el programa no lo reconoce y se queda quieto el scrollbar inferior.
En cambio como la tabla si cambia el tamaño según yo le diga, este si que hace funcionar el scrollbar correctamente*/

.prueba::-webkit-scrollbar-thumb {
    background-color: #ff0000;
}

.prueba::-webkit-scrollbar {
    height: 10px;
    width: 0;
}

</style>