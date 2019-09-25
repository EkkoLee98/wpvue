<template>
    <div id="a">
        <router-view/>
        <h-eader></h-eader>
        <t-odo></t-odo>
        <f-ooter></f-ooter>
<!--        <Header></Header>-->
<!--        <todo></todo>-->
<!--        <Footer></Footer>-->
    </div>
</template>

<script>
    import Pg1 from '../components/page1'
    import Header from '../components/header'
    import Footer from '../components/footer.jsx'
    import Todo from '../components/todo'
    import '../assets/styles/global.styl'

    export default {
        name: "Page1",
        components:{
            pg1:Pg1,
            'h-eader':Header,
            'f-ooter':Footer,
            't-odo':Todo,
        }
    }
</script>

<style scoped>
    #a{
        position:fixed;
        left: 0;
        right: 0;
        top :0;
        bottom: 0;
    }
</style>
