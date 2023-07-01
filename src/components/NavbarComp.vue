<template>
    <div>
    <nav class="navbar navbar-expand-lg" >
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/" ><img class="logo" src="https://i.postimg.cc/fbM8F0P4/5-removebg-preview.png" alt="Logo"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/projects">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/testimonials">Testimonials</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
              </li>
            </ul>   
          </div>
        </div>
      </nav>
</div>
        
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.nav-link{
    color: white;
}
.logo{
    height: 5rem;
    width: 5rem;
}
.navbar{
    background-color: #14004f;
}
.body{
    color: #ffeca8;
}
</style>