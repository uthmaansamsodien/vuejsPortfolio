<template>

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials  </router-link> |
    <router-link to="/contact">Contact</router-link> -->

    <NavBarComp/>
  <router-view/>
  <FooterComp/>

</template>

<script>

import NavBarComp from '@/src/components/NavbarComp.vue'
import FooterComp from '../components/FooterComp.vue'

export default{
  components:{
    NavBarComp,
    FooterComp
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
