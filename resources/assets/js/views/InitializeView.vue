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
			if(this.$route.query && this.$route.query.redirectFrom) {
				this.$router.push({ path: this.$route.query.redirectFrom })	
			}
			else {
				this.$router.push({ path: '/dashboard' })
			}
		} catch(err) {
			console.log(err)
		}
	},
	methods: {
		...mapActions('init', ['initialized'])
	}
}
</script>