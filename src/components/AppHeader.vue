<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {},
})
</script>
<template>
	<header class="flex w-full justify-around py-12 align-center">
		<h1 class="font-semibold text-gray-800 text-lg">Emojis</h1>
		<button class="font-semibold text-gray-800 text-lg bg-white py-1 px-2 rounded-md">
			{{ 2 }} Favs
		</button>
	</header>
</template>
