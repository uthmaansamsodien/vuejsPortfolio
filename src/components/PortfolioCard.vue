<template>
    <div class="container">
        <div class="row justify-content-center gap-5">
            <div class="card p-0" v-for="beings in testimonials" style="width: 15rem;" :key="beings.id">
                <img :src="beings.img" id="img" class="card-img-top" :alt="beings.name" loading="lazy">
                <div class="card-body">
                    <h4 class="card-head">
                        {{ beings.Name }}
                        {{ beings.Surname }}
                    </h4>
                    <p class="card-text">
                        {{ beings.message }}
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

</style>