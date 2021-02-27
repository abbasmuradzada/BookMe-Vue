<template>
    <div id="book">
        <div class="container d-flex flex-wrap justify-content-between">
            <div class="book-details">
                <span class="sec-title">Satisfied?</span>
                <h2 class="sec-heading">AWESOME. <br>
                    BOOK ME NOW.
                </h2>
                <p class="sec-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus 
                    interdum urna. Phasellus ac lorem ut tellus ornare condimentum. Nulla 
                    facilisi. Nulla at facilisis nibh, in ultricies arcu.
                </p>
                <p class="featured">I am featured on</p>
                <div class="book-companies flex-wrap d-flex">
                    <img v-for="img in 3" :key="img" src="../../../assets/Images/envato1.png" alt="">
                </div>
            </div>
            <div class="book-calendar">
                <img src="../../../assets/Images/calendar.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import secHeader from "../../Common/SecHeader";
export default {
  components: {
    secHeader,
  },
  data: function () {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>