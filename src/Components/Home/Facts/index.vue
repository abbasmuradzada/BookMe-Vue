<template>
    <div id="facts">
        <div class="container d-flex flex-column align-items-center">
          <secHeader title="Some Cool Facts" head="WHY YOU SHOULD CHOOSE me">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellent esque dignissim eros a sapien tempus, ut eleifend neque 
            <br>convallis. Duis ac ligula nec sem fringilla. Mauris lacinia augue sagittis dolor.
          </secHeader>
          <div id="fact-list" class="d-flex flex-wrap justify-content-between">
              <Fact iconClass='far fa-clock' head='HARD WORKING. & ALWAYS ON TIME.'>
                        Lorem ipsum dolor sit amet, consectetur adi
                      elit. Pellent esque dignissim eros a sapien 
                      ut eleifend neque convallis.
              </Fact>
              <Fact iconClass='far fa-clock' head='Satisfaction Guaranteed always.'>
                        Lorem ipsum dolor sit amet, consectetur adi
                      elit. Pellent esque dignissim eros a sapien 
                      ut eleifend neque convallis.
              </Fact>
              <Fact iconClass='far fa-clock' head='INternational. & local accounting.'>
                        Lorem ipsum dolor sit amet, consectetur adi
                      elit. Pellent esque dignissim eros a sapien 
                      ut eleifend neque convallis.
              </Fact>
          </div>
        </div>
    </div>
</template>

<script>
import secHeader from "../../Common/SecHeader";
import Fact from "./Fact";
export default {
  components: {
    secHeader,
    Fact
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