<template>
    <div>
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../Header'
    import Footer from '../Footer'
    export default {
        components:{
            Header,
            Footer
        },
        data: function () {
            return {
                compName: 'salam'
            }
        }
    }
</script>

<style lang="scss" scoped>
    //   @import "../assets/style/_variables.scss";  
    //   @import "../assets/style/_common.scss";  
</style>