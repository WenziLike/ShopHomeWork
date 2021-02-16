<template>
    <div class="wrapper-content">
        <section>
            <div class="container">
                <shopItem
                  v-for="product in shopList"
                  :key="product.id"
                  :product="product"
                />
            </div>
        </section>
    </div>
</template>

<script>
import shopItem from './../components/ShopItem'

export default {
    components: {
        shopItem
    },
    data() {
        return {
            shopList: null
        }
    },
    created() {
        this.shopList = this.$store.getters.getShopList
        console.log(this.shopList)
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
</style>