<template>
  <div class="home">
    <br />
    <br />
    <!-- <br /> -->
    <!-- <br /> -->

    <div class="container text-center">
      <div class="row">
        <div class="col">
          <br />
          <br />
          <br />
          <br />

          <img
            class="photo animate__animated animate__fadeInLeftBig"
            img
            src="https://i.postimg.cc/4xZYHSry/GEC-Uthmaan-2-Headshot-1.png"
            alt="logo"
          />
          <br />
        </div>
        <div class="col" id="homeDetails">
          <!-- <div class="row text animate__animated animate__fadeInLeftBig">
          </div > -->
          <h1 class="animate__animated animate__fadeInRightBig">
            Hey, I'm Uthmaan Samsodien.
          </h1>
          <h5 class="animate__animated animate__fadeInRightBig 0.1s">
            A Front-End Web Developer.
          </h5>
          <div>
            <router-link to="/contact">
              <button class="btnproject animate__animated animate__fadeInUpBig">
                Let's connect
              </button>
            </router-link>
            <a
              href="/files/Updated Resume of Uthmaan (Jan 2025).pdf"
              target="_blank"
            >
              <button class="btnCV animate__animated animate__fadeInUpBig">
                <i></i>View my CV
              </button>
            </a>
          </div>
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
  overflow: hidden;
  /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em;
  /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  font-size: 3rem;
  color: #000000;
  margin-top: 4rem;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: black;
  }
}

/* margin-bottom: 0;
  font-size: 3.3rem; */

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

  h1 {
    font-size: 1.11rem;
  }

  /* h5 {
    color: #000000 !important;
  } */
}

.btnproject:hover {
  transform: scale(1.1) !important;
  background-color: #6b6b6b;
  color: #ffff;
}
</style>
