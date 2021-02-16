<template>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <h4>Shop.vm</h4>
                </div>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in navbar" :key="link.title">
                        <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navbar: [
                { url: '/home', title: 'Home' },
                { url: '/shop', title: 'Shops' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #f2f6fc;
    padding: 10px 0;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h4 {
            font-size: 1.7rem;
            margin: 0;
            font-weight: bold;
            color: #273164;
        }
        .navbar-list {
            display: flex;
            li {
                padding-left: 15px;
                a {
                    color: #273164;
                    font-size: 1rem;
                }
                .active {
                    font-weight: bold;
                    color: #00aced;
                    font-size: 1.3rem;
                }
            }
        }
    }
}
</style>