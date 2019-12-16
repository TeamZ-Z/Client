<template>
  <div>
    <div style="margin-top: 40px">
      <input type="text" class="form-control inputSize" placeholder="search api" style="margin-top: 20px; color: black; font-size: 25px; margin-left: 20px">
      <button style="background-color: cornflowerblue; color: white; font-size: 25px;margin-left: 30px;outline: none;" v-on:click="get" >Search</button>
    </div>
    <div style="margin-top: 20px">
      <textarea id="response" v-model="msg" rows="15" cols="80"/>
    </div>
    <div>
      <button style="background-color: cornflowerblue; color: white; font-size: 30px;margin-top: 30px;outline: none;" v-on:click="out" >LogOut</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function () {
    return {
      msg: '',
      content: '',
      pages: 1,
      contentTag: '',
      currentPage: 1
    }
  },
  methods: {
    get: function () {
      let flag = /^([a-z]{1,10}((\/[0-9]*)|(\/\?page\\=\d)))?$/.test(this.content)
      if (!flag) {
        alert('input error')
        return
      }
      this.$http.get('http://localhost:8080/api/' + this.content).then(
        function (res) {
          if (res.ok) {
            this.msg = JSON.stringify(res.data, null, 4)
          }
        }, function () {
          alert('response error')
        })
      if (this.content !== '') {
        this.getPages()
      }
    },
    getPages: function () {
      this.contentTag = this.content.split('/')[0]
      this.$http.get('http://localhost:8080/api/' + this.contentTag + '/pages').then(
        function (res) {
          this.pages = Math.ceil(parseInt(res.data) / 5)
          this.currentPage = this.content.indexOf('=') !== -1 ? parseInt(this.content.split('=')[1]) : 1
        }, function () {
          alert('Error: get page Error')
        })
    },
    out: function () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>
