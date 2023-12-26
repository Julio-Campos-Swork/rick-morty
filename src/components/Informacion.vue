<template>
  <!--  condicion para pintar o no los index -->
  <div v-if="index !== false">
                  
    <v-dialog
      v-model="dialog"
      max-width="350"
    >
      <v-card>
        <v-card-title class="text-h5">
          Informacion
        </v-card-title>

        
           <v-card-text>
            <br>
            
            Nombre - {{characters[index].name}}
            <br>

            Genero - {{characters[index].gender}}
            <br>

            Especie - {{characters[index].species}}
            <br>

            Tipo - {{characters[index].type}}
            <br>

            Origen - {{characters[index].origin.name}} 
            <br>
            

            <br>
        </v-card-text>

        
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Cerrar
          </v-btn>

      </v-card>
    </v-dialog>
  </div>
    
</template>

<script>
  import { mapState } from 'vuex';
  

  export default {
  data() {
    
    return {
      dialog : false,
      index : false
    };
  },

  computed: mapState(['pages','characters']),
  
methods: {
  abrirModal(index2){ //metodo para asignar index en este componente
    this.index = index2
    this.dialog = true
  }
},

};
</script>