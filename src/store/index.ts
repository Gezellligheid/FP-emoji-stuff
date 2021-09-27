import { createStore } from 'vuex'

import favorites from './modules/favorites'

import caching from './modules/Caching'

const store = createStore({
	modules: {
		favorites,
		caching,
	},
})

export default store
