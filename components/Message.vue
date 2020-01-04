<template>
	<div class="column">
		<article class="message">
			<div class="message-header">
				<p>{{ title }}</p>
			</div>
			<div class="message-body">
				<slot />
			</div>
		</article>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		}
	}
};
</script>
