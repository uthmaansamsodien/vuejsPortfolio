<template>
  <div class="home">
    <div class="headskill animate__animated animate__fadeInDownBig">
      <h1><ins>Let's connect</ins></h1>
      <p class="word">Get in touch with me!</p>
    </div>


    <div class="row align-items-center">
      <div class="col">

        <form class="p-5 animate__animated animate__fadeInLeftBig" action="https://formspree.io/f/xqkonyvj"
          method="POST">
          <div>
            <label for="exampleFormControlInput1" class="form-label">First Name:</label>
            <input name="firstname" type="text" class="form-control" id="exampleFormControlInput1"
              placeholder="(required)" required
              oninvalid="this.setCustomValidity('Please fill in the missing information')"
              oninput="this.setCustomValidity('')">
          </div>
          <div>
            <label for="exampleFormControlInput1" class="form-label">Surname:</label>
            <input name="surname" type="text" class="form-control" id="exampleFormControlInput1"
              placeholder="(required)" required
              oninvalid="this.setCustomValidity('Please fill in the missing information')"
              oninput="this.setCustomValidity('')">
          </div>
          <div>
            <label for="exampleFormControlInput1" class="form-label">Email Address:</label>
            <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="(required)"
              r required oninvalid="this.setCustomValidity('Please fill in the missing information')"
              oninput="this.setCustomValidity('')">
          </div>
          <label for="exampleFormControlTextarea1" class="form-label">Comment or Message:</label>
          <textarea name="message" class="form-control" id="exampleFormControlTextarea1"
            placeholder="Type a message here..." rows="4"></textarea>
          <br>
          <div class="middle d-flex justify-content-center">
            <button type="submit" class="btnproject">Submit</button>
          </div>
        </form>
      </div>
      <div class="col cont">
        <h1 class="con animate__animated animate__fadeInDownBig"><ins>Personal info</ins></h1> <br>
        <div class=" coninfo animate__animated animate__fadeInRightBig">
          <h5><ins>Gmail:</ins></h5>
          <p>samsodienuthmaan@gmail.com</p>

          <br />
          <h5><ins>Cell:</ins></h5>
          <p>+27 73 476 0972</p>

          <br />
          <h5><ins>Loacation:</ins></h5>
          <p>Grassy Park, Cape Town 7941</p><br />
          <h5>
          </h5>
          <p></p>
          <h5><ins>Links to connect:</ins></h5>

          <br />
          <!-- <a href="https://codepen.io/uthmaansamsodien" target="_blank" class="fa-brands fa-codepen"></a> -->
          <a href="https://www.instagram.com/samsodienuthmaan" target="_blank" class="bi bi-instagram"
            data-aos="fade-up"></a>
          <a href="https://www.linkedin.com/in/uthmaan-samsodien-416525276/" target="_blank" class="bi bi-linkedin"
            data-aos="fade-up"></a>
          <a href="https://github.com/uthmaansamsodien" target="_blank" class="bi bi-github" data-aos="fade-up"></a>

        </div>
        <br>
      </div>
    </div>
    <!-- <div>
      <img  class="animate__animated animate__fadeInRightBig" src="https://i.postimg.cc/cL902m03/Untitled-design-2-removebg-preview-1.png" alt="logo"> 
     </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
  height: 30rem;
  margin-bottom: rem;
}

.fa-brands {
  margin: .5rem;
  font-size: 2rem;
  text-decoration: none;
  color: #14004f;

}

.bi {
  margin: .5rem;
  font-size: 2rem;
  color: #525252;

}

.bi:hover {
  transform: scale(1.1) !important;
  color: black;
}

.word {
  font-size: 20px;
}

.con {
  font-size: 2rem;
}

.form-label {
  float: left;
}

.middle {
  float: left;
}

.headedu {
  /* padding: 3rem; */
  font-size: 5rem;
}

.btnproject {
  margin: 1rem !important;
}

.btnproject:hover {
  color: #ffffff;
  background-color: darkgray;
}

.col {
  font-size: 17px;
}
</style>