<template>
    <div :class="align == 'left' ? 'sec-header left' : 'sec-header' ">
        <span class="sec-title">{{title}}</span>
        <h2 class="sec-heading">{{head}}</h2>
        <p class="sec-desc">
            <slot/>
        </p>
        
    </div>
</template>

<script>
export default {
    props: {
        title: {
            default: 'enter title',
        },
        head: {
            default: 'enter heading',
        },
        align: {
            default: 'center',
        }
    },
    data: function () {
        return {
            compName: 'salam'
        }
    },
    methods: {
        navigateTo(name){
            this.$router.push({ name: name })
        }
    }

}
</script>

<style lang="scss" scoped> 
    @import "./style.scss";
</style>