import { useStore } from 'vuex'
import { Emoji } from '../../models/Emoji'

type State = {
	[Key in string]: Emoji
}

export enum MutationTypes {
	TOGGLE_FAVORITE = 'toggleFavorite',
}

export enum GetterTypes {
	CHECK_FAVORITE = 'checkFavorite',
}

export const localStorageIdentifier: string = 'FAV_STORAGE'

const store = useStore()

const state: State = {
	favs: localStorage.getItem(localStorageIdentifier)
		? JSON.parse(localStorage.getItem(localStorageIdentifier)!)
		: {},
}

export default {
	state: state,
	mutations: {
		[MutationTypes.TOGGLE_FAVORITE](state: State, emoji: Emoji) {
			// check if emoji is a favorite
			// if yes --> delete
			const key: string = Object.keys(emoji)[0]
			if (state.favs.hasOwnProperty(key)) {
				delete state.favs[key]
			} else {
				state.favs[key] = emoji[key]
			}
			console.log(state)
			localStorage.setItem(localStorageIdentifier, JSON.stringify(state.favs))
			// if not --> add
		},
	},
	actions: {},
	getters: {
		[GetterTypes.CHECK_FAVORITE]: (state: State) => (emojiName: string) =>
			state.favs[emojiName] ? true : false,
	},
}
