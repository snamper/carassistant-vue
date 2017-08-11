<template>
    <div class="item" v-if="item.type=='person'" @click="edit">({{item.index}}) {{item.value.name}}</div>
</template>

<script>
    export default {
        props: ['item'],
        methods: {
            edit () {
                this.item.value.name += '*'
            },
        },
    }
</script>

<style lang="less" scoped>
    .item {
        height: 80/100rem;
        line-height: 80/100rem;
        padding-left: 20/100rem;
        border-bottom: 1px solid #eee;
    }
</style>