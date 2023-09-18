<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { CustomHeader, CustomFooter } from './components/Layout';
import { LibrosTable } from './components/Tables';
import { LibrosForm } from './components/Forms';
import {Spinner, Alert} from "./components/UI"
import { createApp } from 'vue';

</script>

<template>
  <CustomHeader/>
  <div class="container vh-100">
    <div class="row">
      <h1 class="text-center my-4 titulo fw-bold">Inicio</h1>
      <div class="col-md-4 col-lg-3 col-sm-12 col-xs-12 col-12 p-2">
        <LibrosForm/>
      </div>
      <div class="col-md-8 col-lg-9 col-sm-12 col-xs-12 col-12 p-2">
        <LibrosTable/>
      </div>
    </div>
  </div>  
  <CustomFooter/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
