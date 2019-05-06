<template>
    <div class="head">
        <span>《</span>
        <div>{{title}}</div>
    </div>
</template>
<style>
.head{
    width: 100%;
    height: 6rem;
    background: #f33
}
</style>

<script>
export default {
    props: ['title']
}
</script>

