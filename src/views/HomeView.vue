<template>
  <div class="home">
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
            Hello, my name is Uthmaan.
          </h1>
          <h5 class="animate__animated animate__fadeInRightBig 0.1s">
            An aspiring front-end developer.
          </h5>
          <router-link to="/contact">
            <button
              class="btnproject animate__animated animate__fadeInRightBig"
            >
              Lets connect
            </button></router-link
          >
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
}

.home {
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
