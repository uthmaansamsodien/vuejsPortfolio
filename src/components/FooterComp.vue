<template>

    <footer class="footer">
        <p class="info">
            <br>
            Powered by Uthmaan Samsodien<br>
            &copy;Copright 2025 <br>
            <!-- <a href="https://codepen.io/uthmaansamsodien" target="_blank" class="fa-brands fa-codepen"></a>  -->
            <!-- <br/> -->
            <a href="https://www.instagram.com/samsodienuthmaan" target="_blank" class="bi bi-instagram"></a>
            <a href="https://www.linkedin.com/in/uthmaan-samsodien-416525276/" target="_blank"
                class="bi bi-linkedin"></a>
            <a href="https://github.com/uthmaansamsodien" target="_blank" class="bi bi-github"></a>
        </p>
        <router-link class="navbar-brand" id="footpic" to="/">
            <img class="logo" src="https://i.postimg.cc/xC0C7yfp/output-onlinepngtools.png"
                alt="Untitled-design-1-removebg-preview">
        </router-link>
    </footer>

</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    background-color: #666666;
    position: relative;
    width: 100%;
    bottom: 0;
}

.fa-brands {
    text-decoration: none;
    color: white;
    padding: 6px;
}

.info {
    color: white;
}

.bi {
    color: white;
    padding: 6px;
}

.logo {
    height: 3rem;
    /* margin-bottom: 1rem;     */
    margin-top: -1rem;
}

.logo:hover {
    transform: scale(1.2);
}
</style>