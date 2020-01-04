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
					<p>Author:</p>
					<input v-model="author" class="input" type="text">
					<p>Message:</p>
					<input v-model="text" class="input is-large" type="text" placeholder="...">
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
		const niceNames = [
			'Mario',
			'Luigi',
			'Ana',
			'Tiago',
			'Maria',
			'João'
		]
		return {
			isLoading: false,
			text: '',
			author: niceNames[Math.floor(Math.random()*niceNames.length)]
		}
	},
	methods: {
		sendMsg: function () {
			this.$data.isLoading = true
			this.$axios.post('/api/v1/set', {
				text: this.$data.text,
				author: this.$data.author
			}).then(res => {
				this.$data.isLoading = false
				this.$data.text = ""
				this.reload()
			})
		},
		deleteMsg: function () {
			this.$data.text = ""
		},
		reload: function () {
			this.$router.go(this.$router.currentRoute)
		}
	}
};
</script>
