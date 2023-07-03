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

import NavBarComp from '@/components/NavbarComp'
import FooterComp from '@/components/FooterComp'

export default{
  components:{
    NavBarComp,
    FooterComp
  }
}


</script>

<style>

</style>
