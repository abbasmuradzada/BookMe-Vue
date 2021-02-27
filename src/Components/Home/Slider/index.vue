<template>
    <div id="app-detail">
        <div class="add">+</div>
        <div class="container">
            <div class="header-details">
                <span class="header-title" >Quality Accounting</span>
                <h1 class="app-header">ACCOUNTING <br>
                    DONE<span>.</span>RIGHT<span>.</span>FAST
                </h1>
                <p class="app-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent
                    esque dignissim eros a sapien tempus, ut eleifend neque 
                    convallis. Duis ac ligula nec sem fringilla.
                </p>
                <div class="header-details_buttons">
                    <a href="">learn more</a>
                    <a href="">ask quote</a>
    
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
      imgList: [
            'gearhead.png', envato.png, themedesigner_FINAL.png, swan.png, johnys.png, swanser.png,
            swanser.png, johnys.png, swan.png, themedesigner_FINAL.png, envato.png, ,gearhead.png, 
            ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>