<template>
<div class="sidebar">
    <el-row class="tac h-100">
        <el-col :span="12">
            <el-menu default-active="2" class="el-menu-vertical-demo h-100" @open="handleOpen" @close="handleClose">
                <el-menu-item index="1" @click.native="onHome">
                    <app-icon name="monitor" size="mx" class="fill-#000"></app-icon>
                    <span>LEFTALUG</span>              
                </el-menu-item>
                <el-menu-item index="2" @click.native="onStatus">
                    <app-icon name="now_widgets" size="mx" class="fill-#000"></app-icon>
                    <span>Status</span>               
                </el-menu-item>
                <el-menu-item index="3" @click.native="onDevice">
                    <app-icon name="microchip" size="mx" class="fill-#000"></app-icon>
                    <span>Device Setup</span>            
                </el-menu-item>
                <el-menu-item index="4" @click.native="onSystem">
                    <app-icon name="cogs" size="mx" class="fill-#000"></app-icon>
                    <span>System Setup</span>          
                </el-menu-item>
                <el-menu-item index="5" @click.native="onLocker">
                    <app-icon name="folder-plus" size="mx" class="fill-#000"></app-icon>
                    <span>Locker Setup</span>                   
                </el-menu-item>
                <el-menu-item index="6" @click.native="onPayment">
                    <app-icon name="wallet1" size="mx" class="fill-#000"></app-icon>
                    <span>Payment Setup</span>
                </el-menu-item>
                <el-menu-item index="7" @click.native="onCash">
                    <app-icon name="wallet1" size="mx" class="fill-#000"></app-icon>
                    <span>Cash</span>                  
                </el-menu-item>
                <el-menu-item index="8" @click.native="onPaper">
                    <app-icon name="clipboard2" size="mx" class="fill-#000"></app-icon>
                    <span>Paper</span>                   
                </el-menu-item>
                <el-menu-item index="9" class="el-success" @click.native="onHome">
                    <app-icon name="monitor" size="mx" class="fill-#000"></app-icon>
                    <span>Back To Ready</span>                     
                </el-menu-item>
                <el-menu-item index="10" class="el-exit" @click.native="onExit">
                    <app-icon name="exit" size="mx" class="fill-#000"></app-icon>
                    <span>Exit Program</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<script>
import router from '../../router'
const remote = require('electron').remote
let w = remote.getCurrentWindow()

export default {
  methods: {
    handleOpen: function (key, keyPath) {
        // console.log(key, keyPath)
    },
    handleClose: function (key, keyPath) {
        // console.log(key, keyPath)
    },
    onHome: function(){
        router.push('/');
    },
    onStatus: function(){
        router.push({path : '/dashboard/'});
    },
    onDevice: function(){
        router.push({name : 'device'});
    },
    onSystem: function(){
        router.push({name : 'system'});
    },
    onLocker: function(){
        router.push({name : 'locker'});
    },
    onPayment: function(){
        router.push({name : 'payment'});
    },
    onCash: function(){
        router.push({name : 'cash'});
    },
    onPaper: function(){
        router.push({name : 'paper'});
    },
    onExit: function(){
        w.close()
    }
  }
}
</script>
