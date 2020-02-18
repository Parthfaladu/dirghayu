<template>
	<div>Loading...</div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
	name: 'InitializeView',
	async mounted() {
		try {
			await this.initialized()
			this.$router.push({ path: '/dashboard' })
		} catch(err) {
			console.log(err)
		}
	},
	methods: {
		...mapActions('init', ['initialized'])
	}
}
</script>