<template>
  <div class="login-wrap">

<el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
    <!-- 用户登录 -->
    <h2>用户登录</h2>
  <el-form-item label="用户名">
    <el-input v-model="formdata.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password" v-model="formdata.password"></el-input>
  </el-form-item>
   <el-button @click.prevent='login()' class="login-btn" type="primary">登录</el-button>
</el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.formdata);
      console.log(res);
      const {
        meta: { msg, status },
        data
      } = res.data;
      if (status === 200) {
        //   提示用户登录成功
        this.$message.success(msg)
        // 设置token
        const token = data.token
        sessionStorage.setItem('token',token)
        // 编程式导航跳转
        this.$router.push({name:'home'})
      }
      else{
           this.$message.error(msg)
      }
    }
  }
};
</script>

<style>
.login-wrap {
  background: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 400px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
}
.login-btn {
  width: 100%;
}
</style>
