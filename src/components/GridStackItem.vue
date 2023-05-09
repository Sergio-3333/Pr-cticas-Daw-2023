<template>
    <div class="grid-stack-item widget" :gs-max-w="maxWidth" :gs-h="height" :gs-w="width"><!--Los dos puntos son para poder enlazar la propiedad width o height con el atributo gs-h-->
      <div class="grid-stack-item-content" :style="{ overflowY:  noScroll ? 'hidden' : 'auto', }">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'MiGridStackItem',
    props: {
      maxWidth: {
        type: Number,
        default: 10
      },
      height: {
        type: Number,
        default: 10
      },
      width: {
        type: Number,
        default: 4
      },
      noResize: {
        type: Boolean,
        default: true
      }
    }
  }
  </script>
  
  <style>
  
  .grid-stack-item {
      background-color: mediumpurple;
  }
  .grid-stack-item-content {
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: move;
    overflow-y: hidden;
}


  </style>
  