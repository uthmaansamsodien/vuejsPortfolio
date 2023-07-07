<template>
    <div class="home">
        <div class="headskill animate__animated animate__fadeInDownBig">
          <h1><ins>Contact</ins></h1>
          <p>Let's connect</p>
        </div>
        
            <form class="p-5" action="https://formspree.io/f/xqkonyvj" method="POST">
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
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>