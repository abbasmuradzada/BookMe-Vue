<template>
  <div id="news">
        <div class="container d-flex flex-wrap justify-content-between">
            <div class="news-main-section">
              <secHeader title='Whats going on' align='left' head='LATEST NEWS & UPDATES'>
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Pellent esque dignissim eros a sapien tempus, 
                    ut eleifend neque convallis.
              </secHeader>
                <a class="more-news" href="">Read more</a>
            </div>
            <div class="news-card">
                <img src="../../../assets/Images/news.png" alt="">
                <p class="news-card_header">just been moved to my new office</p>
                <p class="news-card_desc">Aug 12, 2015   In : <span>Accounting</span></p>
                <a class="news-card_more">READ MORE <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="news-card">
                <img src="../../../assets/Images/news.png" alt="">
                <p class="news-card_header">just been moved to my new office</p>
                <p class="news-card_desc">Aug 12, 2015   In : <span>Accounting</span></p>
                <a class="news-card_more">READ MORE <i class="fas fa-arrow-right"></i></a>
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