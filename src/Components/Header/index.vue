<template>
    <header class="container d-flex flex-wrap justify-content-between align-items-center">
        <div class="header-left d-flex align-items-center">
            <img src="../../assets/Images/bookme.png" alt="">
            <span class="account">Accountant &nbsp;<i class="fas fa-angle-down"></i></span>
        </div>
        <div class="header-right d-flex flex-column align-items-end justify-content-between">
            <div class="header-contact d-flex align-items-center">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-google-plus-g"></i>
                <p class="quotation-text">ABSOLUTELY Free <br>
                    QUOTATION NOW
                </p>
                <div class="partition"></div>
                <p class="call-number d-flex align-items-center">
                    <img src="../../assets/Images/call.png" alt="">
                    215 123 4567
                </p>
            </div>
            <nav>
                <ul class="d-flex">
                    <router-link active-class="active" 
                                    exact 
                                    class="nav-home" 
                                    to="/home" 
                                    tag="li">
                        <a>home</a>
                    </router-link>
                    <li class="nav-about"><a>about me</a></li>
                    <li class="nav-services"><a>services</a></li>
                    <li class="nav-whyme"><a>why me</a></li>
                    <li class="nav-features"><a>features</a></li>
                    <router-link active-class="active" 
                                 class="nav-home" 
                                 tag="li" 
                                 exact
                                 to="/blog">
                        <a>blog</a>
                    </router-link>
                    <li class="nav-contact"><a>contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data: function () {
        return {
            compName: 'salam'
        }
    },
    methods: {
        navigateTo(name){
            this.$router.push({ name: name })
        }
    }

}
</script>

<style lang="scss" scoped> 
    @import "./style.scss";
</style>