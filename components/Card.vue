<template>
	<div class="column">
		<div class="card">
			<header class="card-header">
				<p class="card-header-title has-text-grey">
					{{ title }}
				</p>
			</header>
			<div class="card-content">
				<div class="content control" :class="isLoading ? 'is-loading' : ''">
					<input ref="input" v-model="text" class="input is-large" type="text" placeholder="...">
					<slot />
				</div>
			</div>
			<footer class="card-footer">
				<a v-on:click="sendMsg" class="card-footer-item">Save</a>
				<a v-on:click="deleteMsg" class="card-footer-item">Delete</a>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		}
	},
	data: function () {
		return {
			isLoading: false,
			text: ''
		}
	},
	methods: {
		sendMsg: function () {
			this.$data.isLoading = true
			// await done
			this.$data.isLoading = false
			this.$data.text = ""
		},
		deleteMsg: function () {
			this.$data.text = ""
		}
	}
};
</script>
