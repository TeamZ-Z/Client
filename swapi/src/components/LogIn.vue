<template>
  <div id="login">
    <div>
      <label class="text-center"  style="color: black; font-size: 30px">UserName</label>
      <input type="text" class="form-control inputSize" placeholder="username" style="margin-top: 20px; color: black; font-size: 25px; margin-left: 20px" v-model="username">
    </div>
    <div>
      <label class="text-center"  style="color: black; font-size: 30px">PassWord</label>
      <input type="text" class="form-control inputSize" placeholder="password" style="margin-top: 20px; color: black; font-size: 25px; margin-left: 20px" v-model="password">
    </div>
    <div>
      <button style="background-color: cornflowerblue; color: white; font-size: 30px;margin-top: 30px;outline: none;" v-on:click="register" >Register</button>
      <button style="background-color: cornflowerblue; color: white; font-size: 30px;margin-top: 30px; margin-left: 30px;outline: none;" v-on:click="post" >LogIn</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    post: function () {
      this.$router.push({path: '/search'})//  测试
      this.$http.post('http://localhost:8080/login',
        {
          username: this.username,
          password: this.password
        },
        {
          withCredentials: true
        }
      ).then(
        function (res) {
          if (res.ok) {
            let strContent = JSON.stringify(res.data)
            let jsonContent = JSON.parse(strContent)
            alert('hello ' + jsonContent['token'])
            this.$router.push({path: '/search'})
          } else {
            alert('Error: LogIn error!')
          }
        },
        function () {
          alert('error')
        })
    },
    register: function () {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style scoped>

</style>
