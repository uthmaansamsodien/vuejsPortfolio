<template>
    <div class="home">
        <h1 class=" headedu headskill" data-aos="fade-down" ><ins>Peer Reviews</ins></h1>
        <PortfolioCard />
        <br>
        <br>
    </div>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard.vue';
export default {
    components: { PortfolioCard }
}
</script>

<style scoped>
@media only screen and (max-width: 800px) {
    .headedu {
        font-size: 3rem;
    }
}
</style>