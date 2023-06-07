const map_data_position = [{
        id: 686,
        zone_id: 4401,
        name: "GETAFE",
        code: "GETAFE",
        position: { lat: 40.3068655, lng: -3.6933254 },
    },
    {
        id: 687,
        zone_id: 4402,
        name: "ARGANDA",
        code: "ARGANDA",
        position: { lat: 40.3071435, lng: -3.4669058 },
    }
];

const map_data_metrics = [{
        zone_id: 4401,
        kpis: {
            afluencia: { name: "afluencia", valor: "74" },
            ocupacion: { name: "ocupacion", valor: 11 }
        }
    },
    {
        zone_id: 4402,
        kpis: {
            afluencia: { name: "afluencia", valor: "218" },
            ocupacion: { name: "ocupacion", valor: 28 }
        }
    }
];

const getMapPosition = () => { //Creo la funcion con el " = () => "
    const combinedArray = map_data_position.map(position => { // Creo una constente para combinar los ds arrays y dentro uso el map con nomre "position" para coger cada objeto del array
        const metrics = map_data_metrics.find(metric => metric.zone_id === position.zone_id); //Dentro, creo que la constante metrics y lo que hago es buscar si hay coincidencias con el zone-id entre position (primer array)
        return [position, metrics]; //retorno el position y el metrics                        //y metric ( el nombre que le he dado paraque me busque dentro del array de metrics)
    });

    const positions = combinedArray.map(item => item[0].position); //creo una nueva constante llamada position y lo que hace es buscar dentro del array combinado con el map los valores del position definido en el array
    console.log('Posiciones', positions);

    return positions; //lo retorno
};

const getMapMetrics = () => {
    const combinedArray = map_data_position.map(position => { //hago lo mismo que en el primer metodo
        const metrics = map_data_metrics.find(metric => metric.zone_id === position.zone_id);
        const afluencia = metrics.kpis.afluencia.valor; //Creo las siguientes constantes para buscar los valores de cada uno en sus respectivos arrays ( a pesar de que se hayan juntado todos)
        const ocupacion = metrics.kpis.ocupacion.valor;
        const nombre = position.name;
        return { afluencia, ocupacion, nombre }; //retorno los valores
    });

    console.log('Valores:', combinedArray);
    return combinedArray; //retorno todo
};


export { getMapPosition, getMapMetrics }; //exporto las funciones