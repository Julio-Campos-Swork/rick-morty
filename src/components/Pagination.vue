<template>
  <div class="text-center">
    {{ alClick }}
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <v-container class="max-width">
            <v-pagination
              v-model="actual"
              class="my-4"
              :length="pages.pages"
              light
              color="blue"
              @next="incremento()"
              @previous="decremento()"
            >
            </v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      actual: 1,
      temp: 1

    };
  },
  computed: {
    ...mapState(['pages', 'prev', 'next','pagina']),

    alClick(){
      if(this.temp == this.actual){
            
     }else{
      this.temp = this.actual
      this.limpiarPantalla();
        this.$store.dispatch('getCharacters', this.actual)
       
        
     }
   }
  


  },
  created(){
    this.$store.dispatch('getNumeroPaginas')
    this.$store.dispatch('getCharacters',this.actual)




  },

  methods:{

...mapActions(['getCharacters']),
...mapMutations(['limpiarPantalla']),


    incremento(){
      this.limpiarPantalla();
    this.$store.dispatch('getCharacters', this.actual);
    



},
decremento(){
  this.limpiarPantalla();
    this.$store.dispatch('getCharacters', this.actual)

},


}

}
</script>
