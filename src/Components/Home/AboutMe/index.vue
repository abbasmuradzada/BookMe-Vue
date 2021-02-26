<template>
  <div id="about-me">
        <div class="container d-flex justify-content-center flex-column">
            <secHeader title="Something About Me" head="WELL ORGANIZED. TRUSTED BY THOUSANDS.">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque <br>
              convallis. Duis ac ligula nec sem fringilla. Mauris lacinia augue sagittis dolor.
            </secHeader>
            <div class="about-me_list d-flex flex-wrap justify-content-between">
                <Feature iconClass='fas fa-history' name='ON TIME EVERYTIME'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Pellent esque dignissim eros a sapien tempus, 
                        ut eleifend neque convallis.
                </Feature>
                <Feature iconClass='fas fa-globe-europe' name='AVAILABLE AT YOUR LOCATION'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Pellent esque dignissim eros a sapien tempus, 
                        ut eleifend neque convallis.
                </Feature>
                <Feature iconClass='far fa-calendar-alt' name='ONline booking option'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Pellent esque dignissim eros a sapien tempus, 
                        ut eleifend neque convallis.
                </Feature>
            </div>
            <div class="about-me_buttons">
                <a class="more-news" href="">learn more</a>
                <a class="more-news" href="">Book now</a>
            </div>
        </div>
  </div>    
</template>

<script>
import secHeader from "../../Common/SecHeader";
import Feature from "./Feature";
export default {
  components: {
    secHeader,
    Feature
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