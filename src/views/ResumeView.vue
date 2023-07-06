<template>
    <div class="home">

        <h1 class="headskill"><ins>Skills</ins></h1>
        <SkillsCard/>
        
        <h1 class="headedu"><ins>Education</ins></h1>
        <EducationCard/>
        <br>
        <br>
    </div>
</template>

<script>
import SkillsCard from '@/components/SkillsCard.vue';
import EducationCard from '@/components/EducationCard.vue';
    export default {
        components: {SkillsCard, EducationCard}
         }

</script>

<style scoped>

</style>