<template>
    <div class="container">
        <div class="row justify-content-center gap-4">
            <div class="card p-0" v-for="skills in Skills" style="width: 15rem;" :key="skills.id">
                <i id="iconskills" :class="skills.icon"></i>
                <div class="card-body">
                    <h4 class="card-head">
                        {{ skills.name}}-   
                        {{ skills.level }}
                    </h4>
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

</style>