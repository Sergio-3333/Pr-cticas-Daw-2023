<template>
  <div>

    <label for="busqueda">Filtrar: </label>
    <input id="busqueda" v-model="searchText"  placeholder="Buscar...">
    
    <vuetable ref="vuetable"
    v-if="filteredData.length > 0"
      :data="filteredData"
      :fields="fields"
      :api-mode="false"
      :sort-params="getSortParam"
    ></vuetable>
    <div v-else> <!-- Mostrar un mensaje de error si no hay datos filtrados -->
      No hay datos que incluyan la busqueda
    </div>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
  },
  data() {
    return {
      fields: ['id', 'afluencia', 'comparacion' ],
      data: {
        "data": [
          {
            "id": 1,
            "afluencia": 1000,
            "comparacion": 50
          },
          {
            "id": 2,
            "afluencia": 500,
            "comparacion": 25
          },
          {
            "id": 3,
            "afluencia": 750,
            "comparacion": 35
          },
          {
            "id": 4,
            "afluencia": 1200,
            "comparacion": 60
          },
          {
            "id": 5,
            "afluencia": 900,
            "comparacion": 45
          },
          {
            "id": 6,
            "afluencia": 1500,
            "comparacion": 75
          },
          {
            "id": 7,
            "afluencia": 800,
            "comparacion": 40
          },
          {
            "id": 8,
            "afluencia": 1100,
            "comparacion": 55
          },
          {
            "id": 9,
            "afluencia": 650,
            "comparacion": 30
          },
          {
            "id": 10,
            "afluencia": 950,
            "comparacion": 0
          }
        ]
      },
      searchText: '', // Variable para almacenar el texto de búsqueda
    }
  },

  computed: {
    filteredData() {
      // "Busqueda" es lo que ponemos en el input
      const busqueda = this.searchText;
      return this.data.data.filter(obj => {
        // Si la afluencia del objeto incluye lo que buscamos que lo retorne + ponemos varios filtros para que filtre por todos los camp
        return obj.afluencia.toString() === busqueda  ||
             obj.id.toString() === busqueda ||
             obj.comparacion.toString().includes(busqueda);
      });
    },
  },
  
  methods: {
    ordenaXAfluencia() {
      this.data.data.sort((a, b) => a.afluencia - b.afluencia);
    },

    getPorcentaje() {
      this.data.data = this.data.data.map(obj => {
        const operacion = ((obj.comparacion * 100) / obj.afluencia - 100).toFixed(2)
        const color = operacion < 0 ? 'red' : 'green'
        const comparacion = `<strong>${obj.comparacion}</strong> + <span style="color:${color}">${operacion}%</span>`
        return {
          ...obj,
          comparacion
        }
      });
    }
  },

  mounted() {
    this.ordenaXAfluencia();
    this.getPorcentaje();
  }
}
</script>