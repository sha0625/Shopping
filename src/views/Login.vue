<template>
    <div class="login-container">
        <van-row type="flex" justify="center" class="img">
            <van-col span="1">&nbsp</van-col>
            <van-col span="22"><img src="../assets/top.png" alt="" width="100%" height="100%"></van-col>
            <van-col span="1">&nbsp</van-col>
        </van-row>
        <van-row type="flex" justify="center" class="line">
            <van-col span="3">&nbsp</van-col>
            <van-col span="18">
                <van-form :rules="rules1" ref="ruleForm2" :model="ruleForm2" >
                    <van-cell-group prop="username">
                        <van-field v-model="ruleForm2.username" left-icon="manager" name="用户名" label="用户名" placeholder="用户名" :rules="rules1.username">
                        </van-field>
                    </van-cell-group>
                    <van-cell-group prop="password">
                        <van-field v-model="ruleForm2.password" left-icon="lock" name="密码" label="密码" placeholder="密码" :rules="rules1.password"></van-field>
                    </van-cell-group>
                    <van-field name="checkbox" label="记住密码" size="small" style="flot">
                        <template #input>
                            <van-checkbox v-model="checked" shape="square" icon-size="14px"/>
                        </template>
                    </van-field>
                    <van-button plain @click="handleSubmit('ruleForm2')" :loading="logining" color="#3DC1D2" style="width:100%" >登录</van-button>
                </van-form>        
            </van-col>
            <van-col span="3">&nbsp</van-col>
        </van-row>
        
        <el-form ref="ruleForm2" :model="ruleForm2" >
        </el-form>
        
    <!--    <el-form class="demo-ruleForm login-page" status-icon :rules="rules1" ref="ruleForm2" :model="ruleForm2" label-position="left" label-width="0" >
            <h2>欢迎登录</h2>
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm2.username" placeholder="用户名" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="paddword"  v-model="ruleForm2.password" placeholder="密码" auto-complete="off"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
            <el-form-item style="width:100%">
                <el-button type="primary" @click="handleSubmit('ruleForm2')" :loading="logining" style="width:100%">登录</el-button>
            </el-form-item>
        </el-form> -->
    </div>
</template>

<script>
// import { Menu, MenuItem, MenuItemGroup, Col, Row, Button ,Form, Checkbox} from 'element-ui'
// const Base64 = require('js-base64').Base64
export default {
    // components:{Menu, MenuItem, MenuItemGroup, Col, Row, Button ,Form, Checkbox},
    data(){
        return {
            logining: false,
            checked: false,
             rules1:{
                username:[{ required: true, message: 'please enter your account', trigger: 'blur'}],
                password:[{ required: true, message: 'enter your password ', trigger: 'blur'}]
            },
            // rules1:{
            //     username:[{pattern:'^[a-zA-Z]{4,17}$', required: true, message: 'please enter your account', trigger: 'blur'}],
            //     password:[{pattern:'^[A-Za-z0-9]{5,17}$', required: true, message: 'enter your password ', trigger: 'blur'}]
            // },
            ruleForm2:{
                username:'admin',
                password:'123123'
            }
        }
    },
    // created () {
    //     // 页面加载时从cookie获取登录信息
    //     let username2 = this.getCookie('username')
    //     let password2 = Base64.decode(this.getCookie('password'))
    //     // 如果存在赋值给表单，并且将记住密码勾选
    //     // @ts-ignore
    //     if(userName){
    //         this.ruleForm2.username = username2
    //         this.username2.password = password2
    //         this.checked = true
    //     }

    // },
    //页面加载调用获取cookie值
    mounted() {
        this.getCookie();
    },
    methods: {
        handleSubmit(event){
            const self = this;
            if(self.checked == true){
                // 判断复选框是否被勾选 勾选则调用配置cookie方法
                console.log("checked == true ");
                // 传入账户名、密码和保存天数三个参数
                self.setCookie(self.ruleForm2.username, self.ruleForm2.password, 7)
            }else{
                console.log("清空Cookie")
                self.clearCookie();
            }
            this.$refs.ruleForm2.validate((valid) => {
                if(valid){
                    this.logining = true;
                    if(this.ruleForm2.username === 'admin' && this.ruleForm2.password === '123123'){
                        this.logining = false;
                        // 保存对话
                        sessionStorage.setItem('user', this.ruleForm2.username);
                        this.$router.push({path: '/HelloWorld'});
                    }else{
                        this.logining = false;
                        this.$alert('username or password wrong!', 'info',{
                            confirmButtonText: 'ok'
                        })
                    }
                }else{
                    console.log('error submit!')
                    return false;
                }
            })
        },
        // 设置Cookie
        setCookie(c_name,c_pwd,exdays){
            console.log("setCookie");
            var exdate = new Date();//获取时间
            exdate.setTime(exdate.getTime() + 24* 60 * 60 * 1000 * exdays);//保存天数
            // 字符串拼接cookie
            window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toUTCString();
            window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toUTCString();

        },
        // 读取cookie
        getCookie: function() {
            console.log("getCookie");
            if(document.cookie.length > 0) {
                var arr = document.cookie.split('; ');
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('=');
                    // 判断查找相应的值
                    if (arr2[0] == 'userName'){
                        this.ruleForm2.username = arr2[1];//保存到保存数据的地方
                        console.log("arr1")
                    }else if (arr2[0] == 'userPwd' ){
                        this.ruleForm2.password = arr2[1];
                        console.log("arr2")

                    }
                }
            }
        },
        // 清除cookie
        clearCookie: function() {
            console.log("clearCookie");
            this.setCookie("", "", -1);//修改2值都为空，天数为负1天就好了
        },
        // handleSubmit(event){
        //     this.$refs.ruleForm2.validate((valid) => {
        //         if(valid){
        //             this.logining = true;
        //             if(this.ruleForm2.username === 'admin' && this.ruleForm2.password === '123123'){
        //                 this.logining = false;
        //                 // 保存对话
        //                 sessionStorage.setItem('user', this.ruleForm2.username);
        //                 this.$router.push({path: '/HelloWorld'});
        //             }else{
        //                 this.logining = false;
        //                 this.$alert('username or password wrong!', 'info',{
        //                     confirmButtonText: 'ok'
        //                 })
        //             }
        //         }else{
        //             console.log('error submit!')
        //             return false;
        //         }
        //     })
        // }
    },
    
    // account(){
    //     if(document.cookie.length <= 0){
    //         console.log(this.getCookie("moile"))
    //         this.ruleForm2.username = this.getCookie('')
    //     }
    // }
};
</script>

<style scoped>
    /deep/ .van-field__label {
        width: 4.2em;
    }   
    /deep/ .van-icon .van-icon-manager{
        margin-right: 15px;
    }
    /deep/ .van-field__left-icon{
        margin-right: 15px;
    }
    /deep/ .line{
        margin-top: 20px;
    }
    /deep/ .van-cell-group {
        border-bottom: 1px solid #3DC1D2;
    }
    /deep/ .van-cell--small{
         padding: 10px 0px;
    }
    <!--  -->
    .login-container {
        width: 100%;
        height: 100%;
    }
    .login-page {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    label.el-checkbox.remember {
        margin: 0px 0px 15px;
        text-align: left;
    }
</style>