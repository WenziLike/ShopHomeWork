import { createStore } from 'vuex'
import shops from './modules/shops'

export default createStore({
    modules: {
        shops
    }
})