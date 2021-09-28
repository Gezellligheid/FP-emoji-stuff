<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { get } from '../utils/dataAccess'
import Emoji from './Emoji.vue'
import { Emoji as EmojiModel } from '../models/Emoji'
import { useStore } from 'vuex'

export default defineComponent({
	components: {
		Emoji,
	},
	setup() {
		const store = useStore()
		const emojis = computed(() => store.state.caching.emojis)

		return {
			emojis,
		}
	},
})
</script>

<template>
	<div class="">
		<div
			v-if="Object.keys(emojis).size != 0"
			class="
				grid grid-cols-3
				lg:grid-cols-6
				mx-auto
				w-4/6
				mb-8
				justify-items-center
				gap-y-14
			"
		>
			<!-- <img
				v-for="(value, key) of emojis.data"
				:key="key"
				v-bind:src="value"
				class="h-6 w-6"
				alt=""
			/> -->
			<Emoji
				v-for="(value, key) of emojis"
				:key="value"
				:name="key.toString()"
				:image="value"
			/>
		</div>
		<div v-else>
			<h1 class="animate-spin">Loading</h1>
		</div>
	</div>
</template>
