<template>
  <div class="fact-card">
    <div class="fact-icon-bg d-flex justify-content-center align-items-center">
        <i :class="iconClass"></i>
    </div>
    <h3 class="fact-header">{{head}}</h3>
    <p class="fact-desc">
      <slot/>
    </p>
  </div> 
</template>

<script>
  export default {
    props: ['iconClass', 'head'],
    data: function () {
      return {
        
      };
    },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>