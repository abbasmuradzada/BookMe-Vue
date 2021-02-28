<template>
    <div id="sidebar">
      <SearchBar/>
      <Category/>
      <BlogSecTitle>recent posts</BlogSecTitle>
      <div>
        <RecentPost/>
        <RecentPost/>
      </div>
      <BlogDivider/>
      <Archive/>
      <Tags/>
    </div>
</template>

<script>
import BlogSecTitle from '../../Common/BlogSecTitle'
import BlogDivider from '../../Common/BlogDivider'
import SearchBar from './SearchBar'
import Category from './Category'
import RecentPost from './RecentPost'
import Archive from './Archive'
import Tags from './Tags'
export default {
  components: {
    BlogSecTitle,
    BlogDivider,
    SearchBar,
    Category,
    RecentPost,
    Archive,
    Tags
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