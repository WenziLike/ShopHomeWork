<template>
    <div class="wrapper-content">
        <section>
            <div class="container">
                <div class="product__wrapper">
                    <div class="product-slider">
                        <img :src="product.img" :alt="product.title">
                    </div>
                    <div class="product-content">
                        <h1>{{ product.title }}</h1>
                        <p class="descr">{{ product.descr }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    data() {
        return {
            product: null
        }
    },
    created() {
        const id = this.$route.params.id
        this.product = this.$store.getters.getProduct(id)
    }
}
</script>

<style lang="scss" scoped>
.container {
    .product__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .product-content {
            padding-left: 15%;
            font-size: 1.2rem;
        }
        img {
            box-shadow: 6px 6px 1px #c0c4cc;
            &:hover {
                box-shadow: none;
            }
        }
    }
}
</style>