import { createStore } from "vuex"
import { v4 as uuidv4 } from 'uuid';
//

// Create a new store instance.
export const librosStore = createStore({
    state:{ //() {
      //return {
        libros: JSON.parse(localStorage.getItem('libros') || "[]")
      //}
    },
    mutations: {
      addBook (state, nuevoLibro) {
        state.libros.push({...nuevoLibro, activo:true, id: uuidv4()});
        localStorage.setItem('libros', JSON.stringify(state.libros));
      },
      listarLeidos(state){
        for (let i = 0; i <  state.libros.length; i++) {
          if (state.libros[i].activo !== true) {
            state.libros.splice(i, 1);
          }
        }        
      },
      listarTodos(state){
        state.libros = JSON.parse(localStorage.getItem('libros') || "[]")
        console.log(state.libros)
      },
      listarNoLeidos(state){

        for (let i = 0; i < state.libros.length; i++) {
          if (state.libros[i].activo !== false) {
            console.log(state.libros[i])
            state.libros.splice(i, 1);
          }
        }
        console.log(state.libros)
        
      },
      borrarLibro (state, id){
        /*state.libros.splice(indx, 1);
        localStorage.setItem('libros', JSON.stringify(state.libros));*/
        const indx = state.libros.findIndex((obj) => obj.id === id);
        indx > -1 && state.libros.splice(indx, 1);
        localStorage.setItem('libros', JSON.stringify(state.libros));
      },
      leido (state, titulo){
        let libros = state.libros.map((l,li)=>{
          if(l.titulo === titulo){
            l.activo = !l.activo;
          }
          return l
        });
        localStorage.setItem('libros', JSON.stringify(libros));
        state.libros = libros;
      }
    },
    getters: {
      listarLibros: (state) => {
        return state.libros;
      },
      cantidadLibros: (state) => {
        return state.libros.length;
      }
    }
})