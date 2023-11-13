<template>
  <div class="home">
    <br />
    <br />

    <h1 class=" headedu animate__animated animate__fadeInDownBig"><ins>My work</ins></h1>
    <br /><br />
    <ProjectCard />
    <br />
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
export default {
  components: { ProjectCard },

}
</script>

<style scoped>
/* .headedu{ 
    padding: 3rem;
    font-size: 5rem;
  } */
</style>