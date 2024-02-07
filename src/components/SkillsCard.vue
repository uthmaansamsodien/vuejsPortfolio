<template>
    <div class="container">
        <div class="row justify-content-center gap-5 animate__animated animate__slideInUp" >
            <div class="card" style="width: 9rem; " v-for="skill in skills" :key="skill.ID">
                <img :src="skill.icon" :alt="skills.headingone">

                <div class="card-body">
                    <h4 class="card-head">
                        {{ skill.name }}
                    </h4>
                    <h5 class="card-head">
                        {{ skill.level }} 
                    </h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        skills() {
            return this.$store.state.Skills
        }
    },
    async mounted() {
        await this.$store.dispatch('fetchSkills')
        this.skills = JSON.parse(JSON.stringify(this.$store.state.Skills));
    }
}
</script>

<style scoped>
.card{
    background-color: transparent !important;
    /* font-size: 2px !important; */
    width: 200;
    height: 360;
    border: 0;
}
.card-head{
     font-size:16.71px
     }
</style>