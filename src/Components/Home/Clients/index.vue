<template>
    <div id="clients">
        <div class="container d-flex flex-column align-items-center">
            <secHeader
                title="Awesome Clients"
                head="SOME OF COOL CLIENTS"
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque
                <br> convallis. Duis ac ligula nec sem fringilla. Mauris lacinia augue sagittis dolor.
            </secHeader>
                <!-- <div class="client-list">
                    <div class="client-card" v-for="item in imgList" :key="item">
                        <img src='../../../assets/Images/envato.png' alt="">
                    </div>
                </div> -->
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