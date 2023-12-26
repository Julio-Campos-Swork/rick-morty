<template>
  <div>
    <Informacion ref="compdialog" />
    <!-- le asigna a componente hijo el valor en el metodo  -->
    

    <v-card class="mx-auto" fluid theme--dark>
      <v-container class="pa-1">
        <v-item-group>
          <v-row 
          v-if="characters.length == 0"
          justify-md="center"
          >
            <v-col 
            cols="8"
            
            >
            <v-card color="primary" dark>
              <v-card-text>
                Cargando
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
        </v-col>
          </v-row>
          <v-row v-else>
            <v-col
              v-for="(character, index) in characters"
              :key="character.id"
              cols="12"
              md="4"
            >
              <div class="title font-weight-black text-xs-center teal--text">
                {{ character.name }}
              </div>
              <div
                v-if="character.status === 'Dead'"
                class="text-md-left red--text"
              >
                {{ character.status }}
              </div>
              <div
                v-else-if="character.status === 'Alive'"
                class="text-md-left green--text"
              >
                {{ character.status }}
              </div>
              <div v-else class="gray--text text-md-left">
                {{ character.status }}
              </div>

              <v-item>
                <v-img
                  :src="character.image"
                  :alt="character.name"
                  contain
                  fluid
                >
                  <v-btn icon dark>
                    <v-icon>
                      {{ "mdi-heart" }}
                    </v-icon>
                  </v-btn>
                </v-img>
              </v-item>

              <v-item>
                <v-row justify="center">
                  <v-btn @click="verInfo(index)" color="primary" dark small>
                    Info
                  </v-btn>
                </v-row>
              </v-item>
            </v-col>
          </v-row>
        </v-item-group>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Informacion from "./Informacion.vue";
import Pagination from "./Pagination.vue";

export default {
  data() {
    return {
      Pag: 1,
    };
  },
  computed: {
    ...mapState(["characters", "charactersFilter", "pagina", "pages"]),
  },

  // created(){
  //   this.$store.dispatch('getCharacters')

  // },

  components: {
    Informacion,
    Pagination,
  },

  methods: {
    ...mapActions(["getCharacters"]),

    verInfo(index) {
      this.$refs.compdialog.abrirModal(index);
    },
  },
};
</script>

<style></style>
