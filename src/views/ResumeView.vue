<template>
    <div class="home">
        <br />
        <br />

        <h1 class="animate__animated animate__fadeInDownBig"><ins>Skills</ins></h1>
        <br />
        <br />
        <br />
        <SkillsCard />
        <br>
        <h1 class="headedu animate__animated animate__fadeInDownBig"><ins>Education</ins></h1>
        <br> <br>
        <EducationCard />
        <br>
    </div>
</template>

<script>
import SkillsCard from '@/components/SkillsCard.vue';
import EducationCard from '@/components/EducationCard.vue';
export default {
    components: { SkillsCard, EducationCard }
}

</script>

<style scoped>
@media only screen and (max-width: 800px) {
    .headedu {
        font-size: 3rem;
    }
}

/* .headedu{ 
    padding: 3rem;
    font-size: 5rem;
  } */
</style>