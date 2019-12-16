<template>
  <div id="Register">
    <div>
      <label class="text-center"  style="color: black; font-size: 30px">UserName</label>
      <input type="text" class="form-control inputSize" placeholder="username" style="margin-top: 20px; color: black; font-size: 25px; margin-left: 20px" v-model="username">
    </div>
    <div>
      <label class="text-center"  style="color: black; font-size: 30px">PassWord</label>
      <input type="text" class="form-control inputSize" placeholder="password" style="margin-top: 20px; color: black; font-size: 25px; margin-left: 20px" v-model="password">
    </div>
    <div>
      <label class="text-center"  style="color: black; font-size: 30px">Email</label>
      <input type="text" class="form-control inputSize" placeholder="email" style="margin-top: 20px; color: black; font-size: 25px; margin-left: 20px" v-model="email">
    </div>
    <div>
      <label class="text-center"  style="color: black; font-size: 30px">Phone</label>
      <input type="text" class="form-control inputSize" placeholder="phone number" style="margin-top: 20px; color: black; font-size: 25px; margin-left: 20px" v-model="phone">
    </div>
    <div>
      <button style="background-color: cornflowerblue; color: white; font-size: 30px;margin-top: 30px;outline: none;" v-on:click="post" >Register</button>
    </div>
    <div style="margin-top: 20px">
      <router-link to="/">Back to LogIn page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function () {
    return {
      username: '',
      password: '',
      email: '',
      phone: ''
    }
  },
  methods: {
    post: function () {
      this.$http.post('http://localhost:8081/register',
        {
          username: this.username,
          password: this.password,
          email: this.email,
          phone: this.phone
        },
        {
          withCredentials: true
        }
      ).then(
        function (res) {
          if (res.ok) {
            if (res.data === 'Register success') {
              this.$router.push({path: '/'})
            } else {
              alert(res.data)
            }
          }
        },
        function (res) {
          alert(res.data)
        })
    }
  }
}
</script>

<style scoped>

</style>
