<template>
  <div class="about-me_card">
    <i :class="iconClass"></i>
    <span class="about-me_card_name">{{name}}</span>
    <p class="sec-desc">
      <slot/>
    </p>
  </div> 
</template>

<script>
  export default {
    props: ['iconClass', 'name'],
    data: function () {
      return {
        
      };
    },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>