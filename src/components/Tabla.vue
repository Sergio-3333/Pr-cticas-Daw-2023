<template>
  <div>
    <vuetable ref="vuetable"
      :data="data.data"
      :fields="fields"
      :api-mode="false"
    ></vuetable>
  </div>
  </template>
  
  <script>
  import Vuetable from 'vuetable-2'
  
  export default {
  name: 'TablaAfluencia',
  components: {
    Vuetable
 },
    data() {
        return {
        fields: ['id', 'afluencia', 'comparacion'],
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
        }
      }
    }
  }
  </script>