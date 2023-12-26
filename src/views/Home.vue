<template>
 <div> 

<ul>
  <li v-for="item in Personajes" :key="item.id">
    <h2>{{item.id}} - {{item.name}}</h2>
  </li>
</ul>





<div class="text-center">
    <v-pagination
      v-model="page"
      :length="42"
      :current-page="page"
      :total-visible="9"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
    :next-text="'Next'"
      
    ></v-pagination>
  </div>
  
</div>
</template>

<script>
  import axios from "axios"; 

  export default {


    data() {
      return {
        Personajes: [],
        page: 1,
        pages: 42,
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: ['name','url'],
        location: ['name','url'],
        image: "",
        episode: []


        
      }
    },
    methods:{
      
        async getPersonaje(){


          try{
            let arrayPersonajes = await axios.get(`https://rickandmortyapi.com/api/character?page=`+this.pageNum)
          
          this.Personajes = arrayPersonajes.data.results
          
          
          }catch(error){
            console.log(error)
          }

        },
        clickCallback (pageNum)  {
        console.log(pageNum)
      }

    },
   
  
 


    components: {
      
    },
    created(){
      this.getPersonaje()
    }
  }
</script>
