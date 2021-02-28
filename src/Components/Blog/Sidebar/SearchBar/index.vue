<template>
    <div>
      <BlogSecTitle>
        Search bar
      </BlogSecTitle>
      <input class="search-input" placeholder="Search here" type="text">
      <BlogDivider/>
    </div>
</template>

<script>
import BlogSecTitle from '../../../Common/BlogSecTitle'
import BlogDivider from '../../../Common/BlogDivider'
export default {
  components:{
          BlogSecTitle,
          BlogDivider
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