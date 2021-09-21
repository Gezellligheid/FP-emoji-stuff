<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {},
})
</script>

<template>
	<footer class="flex w-full bg-yellow-100 py-12">
		<div class="w-3/4 flex justify-between mx-auto">
			<p>&copy; {{ new Date().getFullYear() }}</p>
			<p>Gezellligheid</p>
		</div>
	</footer>
</template>
