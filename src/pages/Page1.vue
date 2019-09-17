<template>
    <div>
        <pg1></pg1>
        <router-view/>
    </div>
</template>

<script>
    import Pg1 from '../components/page1'

    export default {
        name: "Page1",
        components:{
            pg1:Pg1
        }
    }
</script>

<style scoped>

</style>
