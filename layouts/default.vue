<template>
	<div>
		<Menu />

		<section class="main-content columns">
			<div class="container column is-10">
				<nuxt />
			</div>
		</section>
	</div>
</template>

<script>
import Menu from "@/components/Menu"
export default {
	components: {
		Menu
	}
}
</script>
