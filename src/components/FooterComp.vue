<template>

<footer class="footer">
<p class="info">
    <br>
Powered by Uthmaan Samsodien<br>
    &copy;Copright 2023 <br>    
    <a href="https://codepen.io/uthmaansamsodien" target="_blank" class="fa-brands fa-codepen"></a> 
    <!-- <br/> -->
    <!-- <a href="https://www.instagram.com/uthmaansamsodienn" target="_blank" class="bi bi-instagram"></a>  -->
    <a href="https://www.linkedin.com/in/uthmaan-samsodien-416525276/" target="_blank" class="bi bi-linkedin"></a> 
    <a href="https://github.com/uthmaansamsodien" target="_blank" class="bi bi-github"></a>
</p>
<router-link class="navbar-brand" id="footpic" to="/" >
    <img class="logo" src="https://i.postimg.cc/90Tp9JFq/Untitled-design-1-removebg-preview.png" alt="Logo">
</router-link>  
</footer>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
 footer{
    background-color: #14004f;
    position: relative;
    width: 100%;
    bottom: 0;
        }
.fa-brands{
    text-decoration: none;
    color: white;
    padding: 6px;
}
.info{
    color: white;
        }
.bi{ 
    color: white;
    padding: 6px;
}
.logo{
height: 2rem;
margin-bottom: 1rem;
}
.logo:hover{
  transform: scale(1.2);
}

</style>