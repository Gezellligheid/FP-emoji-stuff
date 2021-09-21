<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		name: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	setup() {
		return {}
	},
})
</script>

<template>
	<div class="flex flex-col justify-center group relative">
		<img class="h-6 w-6 self-center" :src="image" alt="" />

		<aside
			class="
				flex
				group-hover:opacity-100
				items-center
				space-x-3
				absolute
				opacity-0
				-bottom-6
				text-center
				-left-1/2
				-translate-x-1/2
				bg-white
				py-1
				px-3
				rounded-lg
				shadow-md
				transition-transform
				hover:opacity-100 hover:-bottom-6
			"
		>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-red-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</button>

			<button class="font-mono text-xs">:{{ name }}:</button>
		</aside>
		<span
			class="absolute top-0 right-0 w-2 h-2 bg-red-500 -mt-2 -mr-2 rounded-full"
		></span>
	</div>
</template>
