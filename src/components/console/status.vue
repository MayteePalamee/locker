<template>
  <el-container class="console h-100 sub-content p2"> 
  Status
  </el-container>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<script>
export default {
  name: "status",
  methods: {
    handleOpen : function (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose : function (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
