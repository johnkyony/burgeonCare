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
          <form  v-if="showLoginForm" >
             <h1 class="login-main-text-label ">Welcome back</h1>
            <div class="form-group">
              <label class="login-main-text-label "> Email Address</label>
              <input type="text" class="form-control" placeholder="you@email.com">
            </div>
            <div class="form-group">
              <label class="login-main-text-label "> Password</label>
              <input type="password" class="form-control" placeholder="******">
            </div>
            <button class="btn btn-primary">Login</button>
            <button class="btn btn-secondary" @click="togglePasswordReset">Forgot Password</button>
          </form>
          <form v-else >
            <div>
              <h1 class="login-main-text-label ">Reset Password</h1>
              <p>We will send you an email to reset your password</p>

              <div class="form-group">
                <label class="login-main-text-label " >Email</label>
                <input type="text" placeholder="you@email.com"  class="form-control">
                <button class="btn btn-primary">Submit</button>
                <button class="btn btn-secondary" @click="togglePasswordReset"> Back To Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      loginForm: {
        email: '' ,
        password: ''
      },
      passwordForm: {
        email: ''
      },
      showLoginForm: true , 
       
      performingRequest: false , 
      errorMsg: ''
    }
  },
  methods: {
    togglePasswordReset(){
      this.showLoginForm = !this.showLoginForm
    }

  }
}
</script>
<style scoped>
body {
    font-family: "Lato", sans-serif;
}



.main-head{
    /* height: 150px; */
    background: #FFF;
   
}

.sidenav {
    height: 100%;
    background-color: #00c6ff;
    overflow-x: hidden;
    padding-top: 20px;
}


/* .main {
    padding: 0px 10px;
} */

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

/* @media screen and (min-width: 768px){
    .main{
        margin-left: 40%; 
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
} */


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}
.login-main-div{
    /* margin-top: 20%; */
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}
.login-main-text-label {
   color: #fff;
}

.btn-black{
   
    background-color: -webkit-linear-gradient(left, #3931af, #00c6ff) !important;
    color: #fff;
}
</style>