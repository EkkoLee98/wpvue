<template>

    <div id="app">
        <input v-model="message" placeholder="edit me"/>
        <router-view/>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                users: [], //接受后台返回的数组，在vue页面直接显示
                message:"",
            }
        },
        methods: {
            aa () {            //使用axios的get请求，es6语法的箭头函数
                this.$axios.post('/api/test.php').then(res => {
                    //  /api/test01/axiosphp.php是后台文件URL，api代表本
                    //机Apache端口：http://localhost:8080，需要在index.js设置
                    this.users = res.data;    //将PHP返回数组的值付给users
                    console.log('success');      //打印结果
                    console.log(this.users);
                    //console.log(res.data);
                    console.log(this.users.username);
                    //console.log(res.data.username);
                    this.message=this.users.username;
                })
            },
        },
        mounted() {
            this.aa();
        }
    }

</script>

<style>
 #app{
     color: aqua;
 }
</style>
