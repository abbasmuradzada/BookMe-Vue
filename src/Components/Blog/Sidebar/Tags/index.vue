<template>
    <div>
      <BlogSecTitle>
        Tags
      </BlogSecTitle>
      <div class="tags">
        <div v-for="tag in tags" :key="tag.name" :class="tag.active ? 'tag active' : 'tag' ">
          {{tag.name}}
        </div>
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
      tags: [
        {
          name: "Lorem",
          active: false
        },
        {
          name: "Ipsum",
          active: true
        },
        {
          name: "DOLAR",
          active: false
        },
        {
          name: "LOREMSET",
          active: false
        },
        {
          name: "LOREMIpsum",
          active: true
        },
        {
          name: "ipsumset",
          active: false
        },
        {
          name: "ipsums",
          active: true
        },
      ]

    };
  },
};
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>