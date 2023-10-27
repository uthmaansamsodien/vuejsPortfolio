<template>
    <div class="container">
        <div class="row justify-content-center gap-5">
            <div class="card p-0" v-for="skills in Skills" style="width: 15rem;" :key="skills.id">
                <i id="iconskills" :class="skills.icon"></i>
                <div class="card-body">
                    <h4 class="card-head">
                        {{ skills.name}}
                    </h4>
                    <h5 class="card-head">
                        {{ skills.level }}
                    </h5>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
     export default {
            computed: {
                Skills() {
      return this.$store.state.Skills
  }
},
mounted() {
  this.$store.dispatch('fetchSkills')
}
    }
</script>

<style scoped>
.card{
    background-color: transparent !important;
    border: 0;
}
</style>