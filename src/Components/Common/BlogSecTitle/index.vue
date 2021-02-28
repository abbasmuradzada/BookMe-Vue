<template>
    <p class="blog-sec-title">
        <slot/>
    </p>
</template>

<script>
export default {
    data: function () {
        return {
            compName: 'salam'
        }
    },
}
</script>

<style lang="scss" scoped> 
    @import "./style.scss";
</style>