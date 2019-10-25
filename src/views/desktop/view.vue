<template>
    <el-container>
        <el-header>
            <div class="secrte">
                <router-link :to="{ path: 'login' }"><app-icon name="monitor" size="ml" fill class="fill"></app-icon></router-link>
                <span>LEFTALUG</span>
            </div>
        </el-header>
        <router-view></router-view>
    </el-container>
</template>

<script>
export default {
    name : 'views',
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>
