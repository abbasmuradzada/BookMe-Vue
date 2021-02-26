<template>
    <div id="services" class="d-flex flex-wrap justify-content-between">
      <Service title='Awesome Service' name='GENERAL ACCOUNTING' iconClass='fas fa-suitcase' >
        Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Pellent esque dignissim eros a sapien tempus, 
                ut eleifend neque convallis.  
      </Service>
      <Service title='Awesome Service' name='GENERAL ACCOUNTING' iconClass='far fa-building' >
        Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Pellent esque dignissim eros a sapien tempus, 
                ut eleifend neque convallis.  
      </Service>
      <Service title='Awesome Service' name='GENERAL ACCOUNTING' iconClass='fas fa-pencil-alt' >
        Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit. Pellent esque dignissim eros a sapien tempus, 
                ut eleifend neque convallis.  
      </Service>
    </div>
</template>

<script>
import Service from "./Service";
export default {
  components: {
    Service
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