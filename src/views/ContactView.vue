<template>
    <div class="home">
        <div class="headskill animate__animated animate__fadeInDownBig">
          <h1><ins>Contact</ins></h1>
          <p class="word">Let's connect</p>
        </div>
        
      
  <div class="row align-items-center">
    <div class="col">
   
      <form class="p-5 animate__animated animate__fadeInLeftBig" action="https://formspree.io/f/xqkonyvj" method="POST">
            <div>
              <label for="exampleFormControlInput1" class="form-label">First Name:</label>
              <input name="firstname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="(required)"  required
              oninvalid="this.setCustomValidity('Please fill in the missing information')"
              oninput="this.setCustomValidity('')">
            </div>
            <div>
              <label for="exampleFormControlInput1" class="form-label">Surname:</label>
              <input name="surname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="(required)"  required
            oninvalid="this.setCustomValidity('Please fill in the missing information')"
            oninput="this.setCustomValidity('')">
            </div>
            <div>
              <label for="exampleFormControlInput1" class="form-label">Email Address:</label>
              <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="(required)" r required
            oninvalid="this.setCustomValidity('Please fill in the missing information')"
            oninput="this.setCustomValidity('')">
            </div>
              <label for="exampleFormControlTextarea1" class="form-label">Comment or Message:</label>
              <textarea name="message" class="form-control" id="exampleFormControlTextarea1" placeholder="Type a message here..." rows="4"></textarea>
              <br>
              <div class="middle d-flex justify-content-center">
                <button type="submit" class="btnproject">Submit</button>
              </div>
            </form>
    </div>
    <div class="col cont">
      <h1 class="con animate__animated animate__fadeInDownBig"><ins>Personal info</ins></h1> <br>
      <div class=" coninfo animate__animated animate__fadeInRightBig">
        <h5><ins>Gmail:</ins></h5><p><b>samsodienuthmaan@gmail.com</b></p>

        <br/>
        <h5><ins>Cell:</ins></h5><p><b>+27 73 476 0972</b></p>
        
        <br/>
        <h5><ins>Loacation:</ins></h5><p><b>Grassy Park, Cape Town 7941</b></p><br/>
        <h5><ins>
          
        </ins></h5><p><b></b>
    
        </p><br/>
      </div>

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
img{
  height: 30rem;
  margin-bottom: rem;
}
.word{
  font-size: 20px;
}
.con{
  font-size: 2rem;
}
.form-label{
  float: left;
}
.middle{
  float: left;
}
/* .coninfo{
  text-align: left;
} */
</style>