<template>
    <TheNavbar/>
    <router-view></router-view>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
    components: { TheNavbar }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
