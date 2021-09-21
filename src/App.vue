<script setup lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

import Emoji from './components/EmojiOverview.vue'
</script>

<template>
	<!-- <div class="flex items-center justify-center min-h-screen">
		<div class="w-2/6 flex items-center flex-col">
			<img src="./assets/googlelogo.png" class="w-60 mb-4" alt="" />
			<div class="w-full relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="absolute h-5 w-5 text-gray-400 top-3 left-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
				<input
					type="text"
					class="
						shadow
						outline-none
						border-1 border-gray-200
						w-full
						rounded-full
						py-2
						pl-12
						pr-12
					"
					placeholder="Make a search"
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="absolute h-5 w-5 text-gray-400 top-3 right-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div class="grid grid-cols-5 w-full gap-6 mt-12 justify-items-center">
				<div
					class="
						bg-gray-100
						cursor-pointer
						hover:shadow-md
						transition-shadow
						w-16
						h-16
						rounded-full
						flex
						justify-center
						items-center
					"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-red-600"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
						/>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
					</svg>
				</div>
				<div
					class="
						bg-gray-100
						w-16
						h-16
						rounded-full
						flex
						justify-center
						items-center
						cursor-pointer
						hover:shadow-md
						transition-shadow
					"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 text-red-600"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div> -->
	<div class="min-h-screen bg-gray-100">
		<AppHeader />
		<Emoji />
		<AppFooter />
	</div>
</template>
