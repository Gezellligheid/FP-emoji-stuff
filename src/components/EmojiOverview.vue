<script lang="ts">
import { defineComponent } from 'vue'
import { get } from '../utils/dataAccess'

export default defineComponent({
	setup() {
		let keys: string[] = []
		let values: string[] = []
		let emojis: any = {}
		// console.log(emojiData)
		const getData = async () => {
			const data = await get('https://api.github.com/emojis').then((res) => res)
			console.log(data)
			keys = Object.keys(data)
			values = Object.values(data)
			emojis = data
			return data
		}

		console.log(values)

		return {
			keys,
			values,
			emojis,
		}
	},
})
</script>

<template>
	<div class="">
		<div class="grid grid-cols-6 mx-auto w-4/6 mb-8 justify-items-center gap-y-14">
			<img
				v-for="key in keys"
				:key="key"
				v-bind:src="emojis[key]"
				class="h-6 w-6"
				alt=""
			/>
		</div>
	</div>
</template>
