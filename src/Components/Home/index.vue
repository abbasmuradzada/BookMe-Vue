<template>
    <div>
        <About/>
        <Services/>
        <Facts/>
        <AboutMe/>
        <Clients/>
    </div>    
</template>

<script>
import About from './About';
import Services from './Services';
import Facts from './Facts';
import Clients from './Clients';
import AboutMe from './AboutMe';
export default {
    components:{
        About,
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