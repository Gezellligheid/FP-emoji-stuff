<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
	setup() {
		// WARNING vergeet de vuex module niet
		// const isDropdownOpen = reactive<boolean>(false)
		const copyToClipboard = (value: string) => {}
		const store = useStore()
		const favorites = computed(() => store.state.favorites.favs)
		return { favorites, copyToClipboard }
	},
})
</script>
<template>
	<header class="flex w-full justify-around py-12 align-center">
		<h1 class="font-semibold text-gray-800 text-lg">Emojis</h1>
		<button
			class="
				group
				flex
				relative
				items-center
				font-semibold
				text-gray-800 text-lg
				bg-white
				py-1
				space-x-3
				px-2
				rounded-md
				border border-transparent
				hover:border hover:border-pink-400
			"
		>
			<p>{{ Object.keys(favorites).length }} Favs</p>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
			<div
				class="
					opacity-0
					pointer-events-none
					group-hover:pointer-events-auto group-hover:opacity-100
					absolute
					bg-white
					rounded-lg
					shadow
					top-0
					min-w-max
					z-20
					p-3
					mt-10
					right-0
				"
			>
				<button
					v-for="(value, key) of favorites"
					:key="key"
					class="flex items-center text-left mb-3 opacity-50 hover:opacity-100"
					@click="copyToClipboard(value)"
				>
					<img :src="value" class="h-5 mr-3" alt="" />
					:{{ key }}:
				</button>
			</div>
		</button>
	</header>
</template>
