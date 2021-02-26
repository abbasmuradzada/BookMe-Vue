<template>
    <div>
        <AboutMe/>
        <Clients/>
    </div>    
</template>

<script>
import Clients from './Clients';
import AboutMe from './AboutMe';
export default {
    components:{
        Clients,
        AboutMe
    },
    data: function () {
        return {
            compName: 'salam'
        }
    }
}
</script>

<style lang="scss" scoped> 
    @import "./style.scss";
</style>