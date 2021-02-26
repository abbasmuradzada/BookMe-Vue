<template>
    <footer>
        <div class="container d-flex flex-wrap justify-content-between">
            <div class="footer-details">
                <img src="../../assets/Images/bookme.png" alt="">
                <p class="copyright">Copyright 2015. <br>
                    All Rights Reserved.</p>
            </div>
            <div class="footer-column">
                <a href="">home</a>
                <a href="">about me</a>
                <a href="">services</a>
                <a href="">contact us</a>
            </div>
            <div class="footer-column">
                <a href="">why me</a>
                <a href="">features</a>
                <a href="">contact us</a>
            </div>
            <div class="footer-column">
                <a href="">accounting</a>
                <a href="">tax consulting</a>
                <a href="">salary management</a>
                <a href="">legal advice</a>
            </div>
            <div class="footer-address d-flex">
                <div style="background-color: gray;" class="add-bg">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details d-flex flex-column justify-content-between">
                    <span class="contact-details_name">JOHNATHAN DOE</span>
                    <span class="contact-details_address">Address will be appear here, some text <br>
                        will here, City, State, Country</span>
                    <span class="contact-details_number">Call Me : <b>+215 123 4567</b></span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
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