<template>
	<nav
		class="navbar header has-shadow is-primary"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item">
				<p class="title-text"><strong>Another XSS Example</strong></p>
			</router-link>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				@click="isOpen = !isOpen"
				v-bind:class="{ 'is-active': isOpen }"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div class="navbar-menu" v-bind:class="{ 'is-active': isOpen }">
			<div class="navbar-end">
				<a href="https://github.com/TiagoDanin/Another-XSS-Example" target="black" class="navbar-item is-tab">GitHub</a>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.title-text {
	color: #fff;
	text-decoration-style: solid;
	font-size: 24px;
}
</style>

<script>
export default {
	data: function() {
		return {
			isOpen: false
		};
	}
};
</script>
