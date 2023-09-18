import { createStore } from "vuex"
import { v4 as uuidv4 } from 'uuid';

function actualizarLocalStorage(libros){
  localStorage.setItem("libros", JSON.stringify(libros));
}



export const librosStore = createStore({
    state: {
      libros: JSON.parse(localStorage.getItem('libros') || "[]"),
      currentAction: 'todos'
    },
    getters: {
      listarLibros: (state) => {
        return state.libros;
      },
      listarLibrosLeidos: (state) => {
        return state.libros.filter((l,li)=>l.activo === true);
      },
      listarLibrosNoLeidos: (state) => {
        return state.libros.filter((l,li)=>l.activo === false);
      },
      cantidadLibros: (state) => {
        return state.libros.length;
      },
      cantidadLibrosLeidos: (state) => {
        return state.libros.filter((l,li)=>l.activo === true).length;
      },
      cantidadLibrosNoLeidos: (state) => {
        return state.libros.filter((l,li)=>l.activo === false).length;
      }
    },
    mutations: {
      addBook (state, nuevoLibro) {
        const genId = uuidv4();
        state.libros = JSON.parse(localStorage.getItem('libros') || "[]");
        state.libros.push({...nuevoLibro, activo:true, id: genId});
        actualizarLocalStorage(state.libros);
      },
      leido (state, id){
        const index = state.libros.findIndex((l)=>l.id === id);
        state.libros[index].activo = !state.libros[index].activo;
        actualizarLocalStorage(state.libros);
      },
      changeAction(state, action){
        state.currentAction = action;
      },
      borrarLibro (state, id){
        state.libros = JSON.parse(localStorage.getItem('libros') || "[]");
        const indx = state.libros.findIndex((obj) => obj.id === id);
        indx > -1 && state.libros.splice(indx, 1);
        actualizarLocalStorage(state.libros);
      },
      mutarLibrosLeidos(state){
        //librosStore.commit('resetTodos')
        for(let i = 0; i<state.libros.length; i++){
          if(state.libros[i].activo === false){
            state.libros.splice(i, 1);
            i--;
          }
        }        
      },
      resetTodos(state){
        state.libros = JSON.parse(localStorage.getItem('libros') || "[]");
      },
      mutarLibrosNoLeidos(state){
        //librosStore.commit('resetTodos')
        for(let i = 0; i<state.libros.length; i++){
          if(state.libros[i].activo === true){
            state.libros.splice(i, 1);
            i--;
          }
        }
      },

    }    
})