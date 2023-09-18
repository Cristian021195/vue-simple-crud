<script>
  import { librosStore } from '../../store';

  export default {
      name: 'LibrosForm',
      data(){
        return {
          titulo:'',
          autor:''
        }
      },
      methods:{
        cargarLibro(e){
          e.preventDefault();
          librosStore.commit('addBook', {titulo: this.titulo, autor: this.autor})
          e.target.reset();
        },
        handleChange(e){
          const value = e.target.value;
          this[e.target.name] = value;
        }
      }
  };


</script>

<template>
  <form class="border border-2 rounded p-2" v-on:submit="cargarLibro">
    <h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-square mb-1" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg> Nuevo Libro
    </h2>
    <label for="titulo">Titulo: </label>
    <input class="form-control mb-3" type="text"  id="titulo" placeholder="Titulo del libro.." 
    name="titulo" minlength="3" maxlength="50" required v-on:input="handleChange">
    <label for="titulo">Autor: </label>
    <input class="form-control mb-3" type="text" id="autor" placeholder="Autor del libro.." 
    name="autor" minlength="3" maxlength="50" required v-on:input="handleChange">
    <button class="btn btn-success w-100" type="submit">Guardar</button>
  </form>

</template>

<style scoped>
</style>
