<template>
  <div class="service-card d-flex flex-column justify-content-center">
    <i :class="iconClass"></i>
    <p class="service-card-title">{{title}}</p>
    <h4 class="service-card-head">{{name}}</h4>
    <p class="service-card-desc">
      <slot/>
    </p>
    <a class="service-card-btn" href="">learn more</a>
  </div> 
</template>

<script>
  export default {
    props: ['iconClass', 'name', 'title'],
    data: function () {
      return {
        
      };
    },
};
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>