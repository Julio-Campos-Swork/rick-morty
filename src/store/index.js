import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
    charactersFilter: [],
    pages: [],
    pagina: 1,
    porPagina: 20,
    prev: "",
    next: "",
    baseUrl: 'https://rickandmortyapi.com/api/character/'


  },
  getters: {
    obtenerCharacters: (state) =>state.characters,
    obtenerCharactersFilter: (state) => state.charactersFilter,
    obtenerNumeroPagina: (state) => state.pages
  },
  
  mutations: {

    setCharacters(state, characters){
      state.characters = characters
    },
    setCharactersFilter(state, charactersFilter){
      state.charactersFilter = charactersFilter
    },
    setPages(state, pages){
      state.pages = pages
    },
    limpiarPantalla(state){
    state.characters = [];
    },

  },
  actions: {


   
    
      async getCharacters({ commit }, payload) {
        
        
        try{
          
          await axios
          .get('https://rickandmortyapi.com/api/character?page='+ payload)
          .then((response) => response.data)
          .then((characters) => {
            commit("setCharacters", characters.results);

            })
 
        }catch (error){
          console.log(error)
        }
      },



      async getCharactersFilter({ commit }){
        try {
          await axios
                  .get('https://rickandmortyapi.com/api/character/')
                  .then((response2) => response2.data)
                   .then((charactersFilter) => {
                    commit("setCharactersFilter", charactersFilter.results);
                  })
        } catch (error) {
          console.log(error)
        }

      },
      async getNumeroPaginas({commit}){
        try {
          await axios
          .get('https://rickandmortyapi.com/api/character/')
          .then((response3) => response3.data)
          .then((pages) => {
            commit("setPages", pages.info);
            
          })          
        } catch (error) {
          console.log(error)
        }

      }
    
    },
    



    // filterByStatus({ commit, state }, status) {
    //   //retorna todos los personajes
    //   const filter = state.characters.filter((character) => {
    //     return character.status.includes(status);
    //   });
    //   commit("setCharactersFilter", filter);
    // },

    // filterByName({ commit, state }, name) {
    //   const formatName = name.toLowerCase(); //recibe el nombre y lo pasa a minusculas
    //   const filter = state.characters.filter((character) => {
    //     const characterName = character.name.toLowerCase(); //obtenemos todos los caracteres en minuscula para que coincidan
    //     if (characterName.includes(formatName)) {
    //       return character;
    //     }
    //   });
    //   commit("setCharactersFilter", filter);
    // },
  })


