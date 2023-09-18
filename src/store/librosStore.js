import { createStore } from "vuex"
import { v4 as uuidv4 } from 'uuid';
//

// Create a new store instance.
export const librosStore = createStore({
    state:{ //() {
      //return {
        libros: JSON.parse(localStorage.getItem('libros') || "[]"),
        currentAction: 'todos'
      //}
    },
    mutations: {
      /*changeAction(state, action){
        state.currentAction = action;
      },
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
        state.libros = [...(JSON.parse(localStorage.getItem('libros') || "[]"))]
      },
      listarNoLeidos(state){

        for (let i = 0; i < state.libros.length; i++) {
          if (state.libros[i].activo !== false) {
            console.log(state.libros[i])
            state.libros.splice(i, 1);
          }
        }
        console.log(state.libros)
        
      },*/
      changeAction(state, action){
        state.currentAction = action;
      },
      addBook (state, nuevoLibro) {
        //console.log(state.currentAction)
        const genId = uuidv4()
        state.libros.push({...nuevoLibro, activo:true, id: genId});
        localStorage.setItem('libros', JSON.stringify(state.libros));

        /*if(state.currentAction == 'leidos'){
          state.libros = librosStore.getters.listarLibrosLeidos;
        }*/

      },
      borrarLibro (state, id){
        const indx = state.libros.findIndex((obj) => obj.id === id);
        indx > -1 && state.libros.splice(indx, 1);
        localStorage.setItem('libros', JSON.stringify(state.libros));
      },
      leido (state, id){
        let libros = state.libros.map((l,li)=>{
          if(l.id === id){
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
      listarLibrosLeidos: (state) => {
        return state.libros.filter((l,li)=>l.activo === true);
      },
      listarLibrosNoLeidos: (state) => {
        return state.libros.filter((l,li)=>l.activo === false);
      },
      cantidadLibros: (state) => {
        return state.libros.length;
      }
    }
})