<template>
    <div>
        <Services/>
        <Facts/>
        <AboutMe/>
        <Clients/>
    </div>    
</template>

<script>
import Services from './Services';
import Facts from './Facts';
import Clients from './Clients';
import AboutMe from './AboutMe';
export default {
    components:{
        Services,
        Facts,
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