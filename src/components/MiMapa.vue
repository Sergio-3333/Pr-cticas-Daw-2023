<template>
  <div>
    <GmapMap
    :center='coordenadas'
    :zoom='12'
      style='width:100%;  height: 400px;'
    />
  </div>
</template>

<script>
export default {
  data() {
  return {
    coordenadas: { lat: 40.4168, lng: -3.7038 } //Son las coordenadas de Madrid 
  };
}
};
</script>