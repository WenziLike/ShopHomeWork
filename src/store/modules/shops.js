export default {
    state() {
        return {
            shopList: [
                {
                    id: '1',
                    title: 'Nike',
                    descr: 'Lorem Ipsum è un testo segnaposto ' +
                        'utilizzato nel settore della tipografia' +
                        ' e della stampa. Lorem Ipsum è considerato ' +
                        'il testo segnaposto standard sin dal sedicesimo' +
                        ' secolo, quando un anonimo tipografo prese una' +
                        ' cassetta di caratteri e li assemblò per preparare ' +
                        'un testo campione. È sopravvissuto non solo a più di ' +
                        'cinque secoli, ma anche al passaggio alla videoimpaginazione,' +
                        ' pervenendoci sostanzialmente inalterato.',
                    img: require('../../assets/img/1.jpg'),
                    gallery: [
                        { name: 'Nike boots First', img: require('../../assets/img/1.jpg') },
                        { name: 'Nike boots First', img: require('../../assets/img/1.3.jpg') },
                        { name: 'Nike boots First', img: require('../../assets/img/1.4.jpg') }
                    ]
                },
                {
                    id: '2',
                    title: 'Reebook',
                    descr: 'Lorem Ipsum è un testo segnaposto ' +
                        'utilizzato nel settore della tipografia' +
                        ' e della stampa. Lorem Ipsum è considerato ' +
                        'il testo segnaposto standard sin dal sedicesimo' +
                        ' secolo, quando un anonimo tipografo prese una' +
                        ' cassetta di caratteri e li assemblò per preparare ' +
                        'un testo campione. È sopravvissuto non solo a più di ' +
                        'cinque secoli, ma anche al passaggio alla videoimpaginazione,' +
                        ' pervenendoci sostanzialmente inalterato.',
                    img: require('../../assets/img/2.jpg'),
                    gallery: [
                        { name: 'Nike boots First', img: require('../../assets/img/2.jpg') },
                        { name: 'Nike boots First', img: require('../../assets/img/2.1.jpg') },
                        { name: 'Nike boots First', img: require('../../assets/img/2.2.jpg') }
                    ]
                },
                {
                    id: '3',
                    title: 'Adidas',
                    descr: 'Lorem Ipsum è un testo segnaposto ' +
                        'utilizzato nel settore della tipografia' +
                        ' e della stampa. Lorem Ipsum è considerato ' +
                        'il testo segnaposto standard sin dal sedicesimo' +
                        ' secolo, quando un anonimo tipografo prese una' +
                        ' cassetta di caratteri e li assemblò per preparare ' +
                        'un testo campione. È sopravvissuto non solo a più di ' +
                        'cinque secoli, ma anche al passaggio alla videoimpaginazione,' +
                        ' pervenendoci sostanzialmente inalterato.',
                    img: require('../../assets/img/3.jpg'),
                    gallery: [
                        { name: 'Nike boots First', img: require('../../assets/img/3.jpg') },
                        { name: 'Nike boots First', img: require('../../assets/img/3.1.jpg') },
                        { name: 'Nike boots First', img: require('../../assets/img/3.2.jpg') }
                    ]
                }
            ]
        }
    },
    mutations: {},
    actions: {},
    getters: {
        getShopList(state) {
            return state.shopList
        },
        getProduct: (state) => (id) => {
            return state.shopList.find(product => product.id === id)
        }
    }
}