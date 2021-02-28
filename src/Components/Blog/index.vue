<template>
    <div>
        <PageNav/>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    content
                </div>
                <div class="col-md-4">
                    <Sidebar/>
                </div>
            </div>
        </div>
        <Quote/>
    </div>    
</template>

<script>
import PageNav from './PageNav';
import Sidebar from './Sidebar';
import Quote from './Quote';
export default {
    components:{
        PageNav,
        Sidebar,
        Quote,
    },
    data: function () {
        return {
            compName: 'Blog'
        }
    }
}
</script>

<style lang="scss" scoped> 

</style>