<template>
    <div class="container">
        <div class=" educard row justify-content-center gap-5 animate__animated animate__slideInUp">
            <div class="card p-0" v-for="learn in Education" style="width: 15rem;" :key="learn.id">
                <img :src="learn.img" id="img" class="card-img-top" :alt="learn.name" loading="lazy">
                <div class="card-body">
                    <h5 class="card-head">
                        {{ learn.school 
                        }}:
                    </h5>                    
                    <h5 class="card-head">
                        {{ learn.pass }}
                        {{ learn.year }}
                    </h5>                    
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
.card-body{
    /* background-color: #ffea9e; */
}
.card-hard{
    /* background-color: #ffea9e; */
}
.card{
    background-color: transparent !important;
    border: 0;
}
.educard{
    margin: 2rem ;
}
</style>