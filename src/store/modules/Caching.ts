import { Emoji } from '../../models/Emoji'
import { get } from '../../utils/dataAccess'

type State = {
	[Key in string]: Emoji
}

export enum ActionTypes {
	FETCH_EMOJIS = 'fetchEmoji',
}

export enum MutationTypes {
	STORE_EMOJIS = 'storeEmojis',
}

export enum GetterTypes {
	CHECK_FAVORITE = 'checkFavorite',
}

export const localStorageIdentifier: string = 'FAV_CACHE'

const state: State = {
	emojis: localStorage.getItem(localStorageIdentifier)
		? JSON.parse(localStorage.getItem(localStorageIdentifier)!)
		: {},
}

export default {
	state: state,
	mutations: {
		[MutationTypes.STORE_EMOJIS](state: any, es: any) {
			// check if emoji is a favorite
			// if not --> add
			state.emojis = es
			localStorage.setItem(localStorageIdentifier, JSON.stringify(state.emojis))
		},
	},
	actions: {
		async [ActionTypes.FETCH_EMOJIS]({ commit }: { commit: any }) {
			const emojis = await get('https://api.github.com/emojis')
			commit(MutationTypes.STORE_EMOJIS, emojis)
		},
	},
	getters: {},
}
