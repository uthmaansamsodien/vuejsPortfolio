<template>
    <div class="container">
        <div class="row justify-content-center gap-5 animate__animated animate__slideInUp">
            <div class="card p-0" v-for="plan in projects" style="width: 15rem;" :key="plan.id">
                <img :src="plan.img" id="img" class="card-img-top" :alt="plan.titel" loading="lazy">
                <div class="card-body">
                    <h5 class="card-head">
                        {{ plan.titel }}
                    </h5>
                    <a :href="plan.netlify" target="_blank"><button class="btnproject">Go live</button></a>
                    <a :href="plan.github" target="_blank"><button class="btnproject">GitHub</button></a>

                </div>
            </div>
        </div>
    </div>

    <div> <br /> </div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('fetchProjects')
    }
}
</script>

<style scoped>
button {
    border-radius: 0.5rem;
    margin: 5%;
}

button:hover{
    color:white;
    background-color: #a3a3a3;
}

card-img-top {
    height: 10rem;
    width: 12rem;
}

.card {
    background-color: transparent !important;
    border: 0;
    margin: 2rem;
    width: 17rem !important;
    border: 0;
    margin: 2rem;
    box-shadow: 8px 8px 8px 1px #a3a3a3;
    /* box-shadow: 4px 4px 4px 1px #14004f; */
    /* text-align: justify; */
}

#img {
    aspect-ratio: 2/1;
}
</style>