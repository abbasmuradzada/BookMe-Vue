<template>
    <div id="about">
        <div class="container d-flex flex-wrap justify-content-between">
            <div class="about-details">
              <secHeader align='left' title='Something about me' head='WELL ORGANIZED. TRUSTED BY THOUSANDS.'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus interdum urna. 
                Phasellus ac lorem ut tellus ornare condimentum. Nulla facilisi. Nulla at facilisis nibh, 
                in ultricies arcu. Fusce elementum mollis eros, vel ultricies enim consequat in. 
                <br><br>
                Proin diam turpis, semper vitae libero at, pulvinar eleifend lacus. Maecenas vel nisi 
                dignissim, rutrum metus sit amet, facilisis enim. Maecenas quis elit viverra eros 
                congue pulvinar eu et est. Nam commodo semper nunc,
              </secHeader>
              <div class="about-details_properties d-flex justify-content-between">
                  <div class="about-prop">
                      <div class="connection-line"></div>
                      <img class="about-prop_img" src="../../../assets/Images/tick.png" alt="">
                      <p class="about-prop_desc">
                          ONTIME EVERYTIME
                          at service
                      </p>
                  </div>
                  <div class="about-prop">
                      <div class="connection-line"></div>
                      <img class="about-prop_img" src="../../../assets/Images/location.png" alt="">
                      <p class="about-prop_desc">
                          Available at your
                          location
                      </p>
                  </div>
                  <div class="about-prop">
                      <img class="about-prop_img" src="../../../assets/Images/browser.png" alt="">
                      <p class="about-prop_desc">
                          Online booking
                          appointment
                      </p>
                  </div>
              </div>
              <a class="more-news" href="">Read more</a>
            </div>
            <div class="about-images d-flex justify-content-between">
                <div v-for="item in 2" :key="item" class="about-images_img-column">
                    <img v-for="img in 2" :key="img" src="../../../assets/Images/about-bg.png" alt="">
                </div>
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