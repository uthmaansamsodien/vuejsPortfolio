<template>
    <div>
    <nav class="navbar navbar-expand-lg" >
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/" ><img class="logo" src="https://i.postimg.cc/fbM8F0P4/5-removebg-preview.png" alt="Logo"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="bi bi-list"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home <i class="bi bi-house"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About <i class="bi bi-person-fill"></i></router-link>
              </li>
              <!-- <router-link class="nav-link" to="/resume"> -->
                <li class="nav-item ">
                  <router-link class="nav-link" to="/resume">Resume <i class="bi bi-pencil-square"></i></router-link>
                </li>
              <!-- </router-link> -->
              <li class="nav-item">
                <router-link class="nav-link" to="/projects">Projects <i class="bi bi-rocket-takeoff"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/testimonials">Testimonials <i class="bi bi-file-earmark"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact <i class="bi bi-telephone-fill"></i></router-link>
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
}
.body{
    color: #ffeca8;
}

i{
  color: white;
}
</style>