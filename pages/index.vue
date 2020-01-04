<template>
	<section class="section">
		<div class="rows">
			<div v-for="(item, key) of messages" :key="key">
				<Message :title="item.title">
					<span v-html="item.text" />
				</Message>
			</div>
		</div>

		<CreateMessage title="Send your message" />
	</section>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";
import Message from "@/components/Message"

export default {
	name: "HomePage",
	components: {
		Message,
		CreateMessage
	},
	asyncData: function({ $axios, params }) {
		return $axios.get('/api/v1/base').then(res => {
			return res.data
		})
	}
};
</script>
