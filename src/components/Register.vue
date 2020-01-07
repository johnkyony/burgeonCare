<template>
  <div class="sidenav container emp-profile" >
    <div class="login-main-text">
             <h1>Burgeon Care</h1>

        <p>Welcome to BurgeonCare client management application </p>

        <p>Manage all your client details for your book keeping business in one place , upload documents and keep business portfolio easily and have easy access to your client records</p>
    </div>
    <div class="main">
      <div class="col-md-12 col-sm-12 login-main-div">
        <div class="login-form" >
          <form   >
             <h1 class="login-main-text-label ">Welcome back</h1>
            <div class="form-group">
              <label class="login-main-text-label "> Email Address</label>
              <input type="text" class="form-control" placeholder="you@email.com" v-model="email">
            </div>
            <div class="form-group">
              <label class="login-main-text-label "> Password</label>
              <input type="password" class="form-control" placeholder="******" v-model="password">
            </div>
            <button class="btn btn-primary">Login</button>
            <button class="btn btn-secondary" @click="togglePasswordReset">Forgot Password</button>
          </form>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase"
export default {
  data(){
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async registerButtonPressed(){
      try{
        const {user} = await firebase.auth().createUserWithEmailAndPassword(this.email , this.password)
        //signout
        firebase.auth()
        .signOut()
        .then(user => {
          this.$router.push("/login")
        })
      }catch (error) {
        console.log(error.message)
      }
                            
    }
  }
  
}
</script>