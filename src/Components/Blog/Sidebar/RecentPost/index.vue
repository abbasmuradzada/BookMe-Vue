<template>
    <div class="recent-post d-flex">
      <img src="../../../../assets/Images/recent-post-img.png" alt="">
      <div class="recent-post_details">
          <h6 class="recent-post_details_heading">Heading title here</h6>
          <span class="recent-post_details_desc">Aug 12, 2015  </span>
      </div>
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