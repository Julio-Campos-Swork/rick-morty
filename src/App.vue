import axios from 'axios'

<template>
  <v-app>
    <Header />
    <v-main>
      <br>
      <br>
      <Cards/>
      
      <br>
      <Pagination />
      <br>
      <br>
    </v-main> 
    <Footer />
    </v-app>
</template>

<script>
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Pagination from './components/Pagination'

export default {
  name: 'App',
  
  data: () => ({
    //
  }),
  components:{
    Cards, Header,Footer,Pagination
  }
};
</script>
