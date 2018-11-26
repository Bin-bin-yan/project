<template>
<div>
   <el-container class="container">
  <el-header class="header">
      <el-row class="header-row">
  <el-col :span="4"><div class="grid-content bg-purple">
      <img src="../../assets/logo.png" alt="">
      </div>
      </el-col>
  <el-col :span="19"><div class="grid-content bg-purple-light middle">
      <h2>电商管理系统</h2>
      </div>
      </el-col>
  <el-col :span="1"><div class="grid-content bg-purple">
      <a href="javascript:;" class="logout" @click.prevent='logout()'>退出</a>
      </div>
      </el-col>
</el-row>
  </el-header>
  <el-container>
    <el-aside class="aside" width="200px">Aside</el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
    methods:{
        logout(){
            // 清除token
            sessionStorage.clear('token');
            // 跳转登录页
            this.$router.push({name:'login'})
            // 提示消息
            this.$message.success('退出成功')
        }
    }
}
</script>

<style>
.container {
  height: 100%;
}

.header {
  background-color: #b3c0d1;
  line-height: 60px;
}

.aside {
  background-color: #d3dce6;
}

.main {
  background-color: #e9eef3;
  height: 100%;
}
.middle h2{
    text-align: center;
    color: hotpink
}
.logout{
    text-decoration: none;
    color: coral
}
</style>
