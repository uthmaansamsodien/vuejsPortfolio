<template>
    <div class="container ">
        <div class="row justify-content-center gap-5 animate__animated animate__slideInUp">
            <div class="card p-0" v-for="beings in testimonials" style="width: 15rem;" :key="beings.id">
                <img :src="beings.img" id="img" class="card-img-top" :alt="beings.name" loading="lazy">
                <div class="card-body">
                    <h4 class="card-head"><ins>
                            {{ beings.Name }}
                            {{ beings.Surname }}</ins>
                    </h4>
                    <p class="card-text">
                        "{{ beings.message }}"
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('fetchTestimonials')
    }
}
</script>

<style scoped>
/* .card-text{ */
/* background-color: #14004f;
    color: antiquewhite;
}
.card-body{
    background-color: #14004f;
}
.card-head{
color: antiquewhite;
} */
/* .card-img-top{
    aspect-ratio: 1/0;
} */
.card {
    background-color: transparent !important;
    border: 0;
    margin: 2rem;
    box-shadow: 4px 4px 4px 1px #14004f;
    text-align:left;
}

.card-text {
    padding: 1rem;
}
</style>