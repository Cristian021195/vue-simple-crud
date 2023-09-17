<script>
    import { ref } from 'vue'
    import { librosStore } from '../../store';

    export default {
        name: 'LibrosTable',
        data(){
            return {
                libros: librosStore.state.libros
            }
        },
        
        methods: {
            saludo(titulo){
                console.log('hola desde: '+titulo)
            },
            eliminar(titulo){
                //console.log('hola desde: '+titulo)
                librosStore.commit('borrarLibro',titulo);
            },
            leido(titulo){
                librosStore.commit('leido',titulo);
            }
        }
    };
    //console.log(librosStore.state.libros)
</script>

<template>
    <div class="border border-2 rounded p-2">
        <h2>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
            </svg></span>
            ABM Libros
        </h2>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>TITULO</th>
                        <th>AUTOR</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
                <tbody v-for="libro in libros">
                    <td>{{libro.titulo}} - activo: {{libro.activo}}</td>
                    <td>{{libro.autor}}</td>
                    <td>
                        <button type="button" class="btn bg-danger text-white" v-on:click="eliminar(libro.titulo)">🗑</button>
                        <span>&emsp;✅</span>
                        <input title="leido" type="checkbox" v-on:change="leido(libro.titulo)">
                    </td>
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

