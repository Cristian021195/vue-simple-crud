import { createStore } from "vuex"

// Create a new store instance.
export const librosStore = createStore({
    state () {
      return {
        libros: JSON.parse(localStorage.getItem('libros') || "[]")
      }
    },
    mutations: {
      addBook (state, nuevoLibro) {
        state.libros.push({...nuevoLibro, activo:true});
        localStorage.setItem('libros', JSON.stringify(state.libros));
      },
      borrarLibro (state, titulo){
        let libros = state.libros.filter((l,li)=>l.titulo != titulo);
        //localStorage.setItem('libros', JSON.stringify(libros));
        state.libros = libros;
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