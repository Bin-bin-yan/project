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
    <el-aside 
    class="aside" width="200px">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    :unique-opened="true"
    :router="true">
                  <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>

                    <el-menu-item index="users">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>用户列表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 2 -->
                 <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>权限管理</span>
                    </template>

                    <el-menu-item index="2-1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>角色列表</span>
                        </template>
                    </el-menu-item>
                     <el-menu-item index="2-2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>权限列表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 3 -->
                 <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                    </template>

                    <el-menu-item index="3-1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>商品列表</span>
                        </template>
                    </el-menu-item>
                     <el-menu-item index="3-2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>分类参数</span>
                        </template>
                    </el-menu-item>
                     <el-menu-item index="3-3">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>商品分类</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 4 -->
                 <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                    </template>

                    <el-menu-item index="4-1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>订单列表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>

                <!-- 5 -->
                 <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据统计</span>
                    </template>

                    <el-menu-item index="5-1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>数据报表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>
     
    </el-menu>
    </el-aside>
    <el-main class="main">
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  beforeCreate() {
    //   判断用户是否登录
    const token =sessionStorage.getItem('token')
    if(!token){
        this.$router.push({name:'login'})
    }
  },
  methods: {
    logout() {
      // 清除token
      sessionStorage.clear("token");
      // 跳转登录页
      this.$router.push({ name: "login" });
      // 提示消息
      this.$message.success("退出成功");
    }
  }
};
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
.middle h2 {
  text-align: center;
  color: hotpink;
}
.logout {
  text-decoration: none;
  color: coral;
}
</style>
