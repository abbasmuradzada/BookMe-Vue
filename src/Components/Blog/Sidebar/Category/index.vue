<template>
    <div>
      <BlogSecTitle>
        Category
      </BlogSecTitle>
      <div class="categories">
        <div v-for="category in categories" :key="category.name" class="category">
          <i class="fas fa-arrow-right"></i>&nbsp;&nbsp;{{category.name}}<span>({{category.count}})</span>
          <BlogDivider v-if="category.divider == true"/>
        </div>                   
      </div>
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
      categories: [
        {
          name: 'General Account ',
          count: '07',
          divider:true
        },
        {
          name: 'Tax Account  ',
          count: '05',
          divider:true
        },
        {
          name: 'Accounting ',
          count: '08',
          divider:true,
        },
        {
          name: 'Account Tax  ',
          count: '09',
          divider:true
        },
        {
          name: 'Account General ',
          count: '10'
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>