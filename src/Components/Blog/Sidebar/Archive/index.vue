<template>
    <div class="archives">
      <BlogSecTitle>
        Archive
      </BlogSecTitle>
      <select name="" id="">
        <option value="">Aug 2015 </option>
        <option value="">Dec 2014 </option>
      </select>
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