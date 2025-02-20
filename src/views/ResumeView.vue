<template>
    <div class="home">
        <br />
        <br />        <br />


        <h1 class="animate__animated animate__fadeInDownBig"><ins>Skills</ins></h1>
        <br />
        <br />
        <br />

        <SkillsCard />
        <br>
        <!-- <h1 class="headedu" data-aos="fade-down"><ins>Education</ins></h1>
        <br> <br>
        <EducationCard />
        <br> -->
        <br />
        <br />


        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">

                    <h1 class="headedu animate__animated animate__fadeInLeftBig" data-aos="fade-down">
                        <ins>Education</ins>
                    </h1>
                    <br /><br />
                    <div class="col badge animate__animated animate__fadeInLeftBig">
                        <img src="https://i.postimg.cc/vBWT0Rgp/Redeisgn-Header-2021-1-947x362-removebg-preview.png"
                            loading="lazy" width="196" alt="img" srcset="">
                        <p class=" skilltext">
                            South Peninsula High <br>
                            2018 - 2022
                        </p>
                    </div>
                    <div class="col badge animate__animated animate__fadeInLeftBig">
                        <img src="https://i.ibb.co/HgdGhqS/LIFE-CHOICES-ICON-ON-GREEN.webp" loading="lazy" width="196"
                            alt="img" srcset="">
                        <p class=" skilltext">
                            Life Choices Academy <br>
                            April 2023 - September 2023
                        </p>

                    </div>

                </div>
                <div class="col">
                    <h1 class="headedu animate__animated animate__fadeInRightBig" data-aos="fade-down"><ins>Work
                            experience</ins></h1>
                            <br /><br />
                    <div class="col badge animate__animated animate__fadeInRightBig">
                        <img src="https://i.ibb.co/2nhYF0P/LC-Studio-logo.png" loading="lazy" width="196" alt="img"
                            srcset="">
                        <p class=" skilltext">
                            LC Studio <br>
                            September 2023 - February 2024
                        </p>

                    </div>
                    <div class="col badge animate__animated animate__fadeInRightBig">
                        <img src="https://i.ibb.co/DKgV0cQ/Untitled-design-11.png" loading="lazy" width="196" alt="img"
                            srcset="">
                        <p class=" skilltext">
                            Global Employment Challenge <br>
                            February 2024 - present
                        </p>
                    </div>
                    <div class="col badge animate__animated animate__fadeInRightBig">
                        <img src="https://i.postimg.cc/QxnRf0Qj/Add-a-heading.png" loading="lazy" width="196" alt="img"
                            srcset="">
                        <p class=" skilltext">
                            Reach Social Media <br>
                            August 2024 - present
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <br />
        <br />


        <h1 class="headedu animate__animated animate__fadeInDownBig" data-aos="fade-down"><ins>Cisco Badges</ins></h1>
        <br>
        <p class="headedu animate__animated animate__fadeInDownBig cisco" data-aos="fade-down">
            The following Cisco badges were obtained by myself while upskilling in the LC Studio;
        </p>
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
                    <img src="https://i.postimg.cc/qqwRd8Gw/introduction-to-cybersecurity-1-removebg-preview.png"
                        loading="lazy" width="178" alt="img" srcset="">

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
        <br> <br>        <br />
        <br />



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


.skilltext{
    font-size: 19px;
    color: #000000;
    padding: 1rem;
    font-weight: lighter;
}
.cisco{
    font-size: 19px;
}
</style>