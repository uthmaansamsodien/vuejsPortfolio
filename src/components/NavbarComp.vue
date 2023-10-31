<template>
    <div>
    <nav class="navbar navbar-expand-lg" >
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/" ><img class="logo" src="https://i.postimg.cc/cL6WNnD8/Untitled-design-1.png" alt="Logo"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="bi bi-list"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link bi-house" to="/">  Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi-person-fill" to="/about">  About</router-link>
              </li>
                <li class="nav-item ">
                  <router-link class="nav-link bi-pencil-square" to="/resume">  Resume</router-link>
                </li>
              <li class="nav-item">
                <router-link class="nav-link bi-rocket-takeoff" to="/projects">  Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi-file-earmark" to="/testimonials">  Testimonials</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link bi-telephone-fill" to="/contact">  Contact</router-link>
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

.nav-link:hover {
  color: #ffeca8;
}
.navbar-toggler-icon{
  color: #ffeca8;
}
.logo{
    height: 5rem;
    width: 5rem;
}
.navbar{
    background-color: #14004f;
    padding: 1.1rem;
}
.body{
    color: #ffeca8;
}

i{
  color: white;
}
</style>