<template>
    <div>
        <Slider/>
        <About/>
        <Services/>
        <News/>
        <Facts/>
        <AboutMe/>
        <Clients/>
        <Book/>
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
import Book from './Book';
export default {
    components:{
        Slider,
        About,
        Services,
        News,
        Facts,
        Clients,
        AboutMe,
        Book
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