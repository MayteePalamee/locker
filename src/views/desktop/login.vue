<template>
    <el-container class="log-in" @click.native="onHide($event)">
        <div class="lk-width lk-pt lk-center">
            <el-row :gutter="10" class="d-flex align-items-center justify-content pb-1">
                <el-col :span="10" class="text-center">
                    <label class="label">Locker Setup</label>
                    <app-icon name="monitor" size="ml" class="fill"></app-icon>
                </el-col>
            </el-row>
            <el-row :gutter="10" class="d-flex flex-column align-items-center justify-content">
                <el-col :span="10" class="pb-1">
                    <input class="input lk-italic" name="username" placeholder="Username" v-model="username" 
                        @focus="onUserFocus = state.user = true"/>
                    <div v-if="state.user">
                        <SimpleKeyboard @onChange="onUserChange" @onKeyPress="onUserPress" :input="username"/>
                    </div>
                </el-col>
                <el-col :span="10" class="pb-1">
                    {{state.pwd}}
                    <input class="input lk-italic" name="pwd" placeholder="Password" v-model="pwd" 
                        @focus="onPwdFocus = state.pwd = true"/>
                    <div v-if="state.pwd">
                        <SimpleKeyboard @onChange="onPwdChange" @onKeyPress="onPwdPress" :input="pwd"/>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10" class="d-flex flex-row pb-1 align-items-center justify-content">
                <el-col :span="10" class="el-row--flex is-justify-space-around">
                    <el-button size="small" type="primary" @click="onAuth">Login</el-button>
                    <el-button size="small" type="danger" @click="onCancel">Cancel</el-button>
                </el-col>
            </el-row>
        </div>        
    </el-container>
</template>

<script>
import router from '../../router'
import SimpleKeyboard from "../../components/keyboard/keyboard";

export default {
    name : 'login',
    data() {
        return {
            username: '',
            pwd: '',
            state: {
                user: false,
                pwd:false
            }
        }
    },
    components : {
        SimpleKeyboard
    },
    methods: {
        onAuth: function(){
            router.push('/dashboard');
        },
        onCancel : function(){
            router.push('/');
        },
        onUserChange(input) {      
            this.username = input;
            this.state.user = true;
        },
        onUserPress: function(button){
        },
        onPwdChange(input) {  
            this.pwd = input;
            this.state.pwd = true;
        },
        onPwdPress: function(button){
        },
        onHide: function(event){
            if (
                // Target is not the input
                event.target.localName !== "input" &&
                // Target is not a keyboard button
                !event.target.classList.contains("hg-button")
            ) {
                this.state.user = false;
                this.state.pwd = false;
            }
        }
    },
}
</script>
