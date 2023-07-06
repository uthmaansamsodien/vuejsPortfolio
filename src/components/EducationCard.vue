<template>
    <div class="container">
        <div class="row justify-content-center gap-5">
            <div class="card p-0" v-for="learn in Education" style="width: 15rem;" :key="learn.id">
                <img :src="learn.img" id="img" class="card-img-top" :alt="learn.name" loading="lazy">
                <div class="card-body">
                    <h4 class="card-head">
                        {{ learn.school }}
                        {{ learn.pass }}
                        {{ learn.year }}
                    </h4>                    
                </div>
            </div>
        </div>
    </div>

</template>

<script>
     export default {
            computed: {
                Education() {
      return this.$store.state.Education
  }
},
mounted() {
  this.$store.dispatch('fetchEducation')
}
    }
</script>

<style scoped>

</style>