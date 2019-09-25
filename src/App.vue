<template>

    <div id="app">
        <div id="cover"></div>
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
        }
    }

</script>

<style>
 /*#app{*/
 /*    color: aqua;*/
 /*}*/
 #cover{
     position: fixed;
     left: 0;
     top: 0;
     right: 0;
     bottom: 0;
     background-color: #999;
     opacity :.9;
     z-index: -1;
 }
</style>
