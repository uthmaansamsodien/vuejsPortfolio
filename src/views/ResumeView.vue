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
        <h1 class="headedu animate__animated animate__fadeInDownBig" data-aos="fade-down"><ins>Cisco Badges</ins></h1>
        <br>
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col badge animate__animated animate__slideInUp">
                    <img src="https://i.postimg.cc/7hm3HrXN/Screenshot-2024-02-07-105856-removebg-preview.png"
                        loading="lazy" width="196" alt="img" srcset="">
                    
                </div>

                <div class="col badge animate__animated animate__slideInUp">
                    <img src="https://i.postimg.cc/q7BzrDzk/Screenshot-2024-02-07-105831-removebg-preview.png"
                        loading="lazy" width="196" alt="img" srcset="">

                </div>

                <div class="col badge animate__animated animate__slideInUp">
                    <img src="https://i.postimg.cc/nzCrjs4g/Screenshot-2024-02-07-105820-removebg-preview.png"
                        loading="lazy" width="196" alt="img" srcset="">

                </div>

                <div class="col badge animate__animated animate__slideInUp">
                    <img src="https://i.postimg.cc/RZ401p1c/Screenshot-2024-02-07-105747-removebg-preview.png"
                        loading="lazy" width="196" alt="img" srcset="">

                </div>

                <div class="col badge animate__animated animate__slideInUp">
                    <img src="https://i.postimg.cc/5tkNVxh3/Screenshot-2024-02-07-105808-removebg-preview.png"
                        loading="lazy" width="196" alt="img" srcset="">

                </div>

                <div class="col badge animate__animated animate__slideInUp">

                    <img src="https://i.postimg.cc/N0dL0R7r/Screenshot-2024-02-09-092551-removebg-preview.png"
                        loading="lazy" width="196" alt="img" srcset="">
                </div>

            </div>
        </div>
        <br> <br>

        <h1 class="headedu" data-aos="fade-down"><ins>Education</ins></h1>
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
.badge {
    aspect-ratio: 1 / 1;
}

.badge:hover {
    transform: scale(1.1) !important;
}

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