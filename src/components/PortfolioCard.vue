<template>
    <div class="container">
        <div class="row justify-content-center gap-5">
            <div class="card p-0" v-for="humans in testimonials" style="width: 15rem;" :key="humans.id">
                <img :src="humans.image" id="img" class="card-img-top" :alt="humans.name" loading="lazy">
                <div class="card-body">
                    <h4 class="card-head">
                        {{ humans.name }}
                    </h4>
                    <p class="card-text">
                        {{ humans.comments }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            
    }
</script>

<style scoped>

</style>