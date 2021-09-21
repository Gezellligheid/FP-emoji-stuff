<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { get } from '../utils/dataAccess'
import Emoji from './Emoji.vue'
interface Emojis {
	[name: string]: string
}

export default defineComponent({
	components: {
		Emoji,
	},
	setup() {
		let emojis = reactive<{ data: Emojis }>({ data: {} })

		// console.log(emojiData)
		const getData = async () => {
			const data = await get('https://api.github.com/emojis').then((res) => {
				return res
			})
			console.log(data)
			emojis.data = data
		}
		getData()
		return {
			emojis,
		}
	},
})
</script>

<template>
	<div class="">
		<div
			v-if="Object.keys(emojis.data).size != 0"
			class="grid grid-cols-6 mx-auto w-4/6 mb-8 justify-items-center gap-y-14"
		>
			<!-- <img
				v-for="(value, key) of emojis.data"
				:key="key"
				v-bind:src="value"
				class="h-6 w-6"
				alt=""
			/> -->
			<Emoji
				v-for="(value, key) of emojis.data"
				:key="value"
				:name="key"
				:image="value"
			/>
		</div>
		<div v-else>
			<h1 class="animate-spin">Loading</h1>
		</div>
	</div>
</template>
