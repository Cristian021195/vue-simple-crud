<script>
    import { mapGetters, mapState } from 'vuex';

    export default {
        name: 'LibrosTable',
        computed: {
            ...mapState(['libros', 'cantidadLibros'])
        },
        methods:{
            eliminar(id){
                let resp = window.confirm("¿Eliminar libro?");
                resp && this.$store.commit('borrarLibro',id);
            },
            leido(id){
                this.$store.commit('leido',id);
            },
            leidos(){
                this.$store.commit('resetTodos');
                this.$store.commit('mutarLibrosLeidos');
            },
            todos(){
                this.$store.commit('resetTodos');
            },
            noLeidos(){
                this.$store.commit('resetTodos');
                this.$store.commit('mutarLibrosNoLeidos');
            }
        }
    };
</script>

<template>
    <div class="border border-2 rounded p-2 mb-4">
        <div class="d-flex justify-content-between">
            <h2>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-table mb-1" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
                </svg></span>
                ABM Libros
            </h2>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-sm btn-primary" v-on:click="todos">Todos ( <b> {{ this.$store.getters.cantidadLibros }} </b> )</button>
                <button type="button" class="btn btn-sm btn-warning" v-on:click="noLeidos">No Leidos ( <b> {{ this.$store.getters.cantidadLibrosNoLeidos }} </b> )</button>
                <button type="button" class="btn btn-sm btn-success" v-on:click="leidos">Leidos ( <b> {{ this.$store.getters.cantidadLibrosLeidos }} </b> )</button>      
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover w-100">
                <thead>
                    <tr>
                        <th>TITULO</th>
                        <th>AUTOR</th>
                        <th>Borrar / Leido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="libros.length === 0"><td colspan="3" class="text-center text-danger">¡Sin libros cargados!</td></tr>
                    <tr v-for="libro in libros" v-bind:class="(libro.activo)?'leido':'noLeido'">
                        <td>{{libro.titulo}}</td>
                        <td>{{libro.autor}}</td>
                        <td>
                            <button type="button" class="btn btn-sm bg-danger text-white me-4" v-on:click="eliminar(libro.id)">🗑</button>
                            <input title="leido" class="form-check-input ms-4" type="checkbox" :checked="libro.activo"  v-on:change="leido(libro.id)">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
/*<tr>
    <td>Rayuela</td>
    <td>Julio Cortazar</td>
    <td>
        <button class="btn btn-sm btn-danger">🗑</button>&emsp;
        ✅<input type="checkbox">
    </td>
</tr>*/
</style>

