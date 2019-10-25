<template>
  <el-container class="console">
    <sidebar />
    <router-view></router-view>
  </el-container>
</template>

<script>
import sidebar from "../../components/console/sidebar";
export default {
  name: 'staff',
  data() {
      return {
      }
  },
  components: {
      sidebar
  }
}
</script>

