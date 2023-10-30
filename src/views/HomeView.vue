<template>
  <div class="home">
    <br/>
        <br/>
        <br/>
        <br/>
      
    <div class="container text-center">
      <div class="row">
        
        <div class="col">
          <img
            class="photo animate__animated animate__fadeInLeftBig"
            src="https://i.postimg.cc/vTv25jC8/IMG-6957-sqaure.jpg"
            alt=""
          />
        </div>
        <div class="col" id="homeDetails">
          <!-- <div class="row text animate__animated animate__fadeInLeftBig">
          </div > -->
          <h1 class="animate__animated animate__fadeInRightBig">
            Hey, I'm Uthmaan Samsodien.
          </h1>
          <h5 class="animate__animated animate__fadeInRightBig 0.1s">
            An aspiring front-end developer.
          </h5>
          <router-link to="/contact">
            <button class="btnproject animate__animated animate__fadeInUpBig">
              Lets connect
            </button>
            <button class="btnproject animate__animated animate__fadeInUpBig">
              Download my CV
            </button>
            </router-link>
          <router-link to="https://drive.google.com/file/d/1PHy4OG_nt25stcZ3ponbJf3nc5WUZ_lg/view?usp=drive_link" target="_blank">
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  margin-bottom: 0;
  font-size: 3.3rem;
}
#homeDetails {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and (max-width: 800px) {
  .photo {
    width: 18rem;
    top: 0%;
    left: 0%;
    transform: translate(1%, 40%);
    padding: 1rem;
  }
  .headskill {
    padding-top: 1rem;
  }
  
}
</style>
