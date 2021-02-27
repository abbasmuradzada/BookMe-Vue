<template>
    <div>
        <Slider/>
        <About/>
        <Services/>
        <News/>
        <Facts/>
        <AboutMe/>
        <Clients/>
    </div>    
</template>

<script>
import Slider from './Slider';
import About from './About';
import Services from './Services';
import News from './News';
import Facts from './Facts';
import Clients from './Clients';
import AboutMe from './AboutMe';
export default {
    components:{
        Slider,
        About,
        Services,
        News,
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