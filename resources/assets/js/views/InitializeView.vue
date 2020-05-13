<template>
	<div class="row align-items-center h-100 justify-content-center bg-color">
		<div class="sk-chase">
			<div class="sk-chase-dot"></div>
			<div class="sk-chase-dot"></div>
			<div class="sk-chase-dot"></div>
			<div class="sk-chase-dot"></div>
			<div class="sk-chase-dot"></div>
			<div class="sk-chase-dot"></div>
		</div>
		<div class="text-loading h3">Loading ...</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
import axios from "axios";

export default {
	name: 'InitializeView',
	async mounted() {
		try {
			await this.initialized()

			axios.defaults.headers.common.Authorization = this.$store.getters['auth/authHeaders'].Authorization

			if(this.$route.query && this.$route.query.redirectFrom) {
				this.$router.push({ path: this.$route.query.redirectFrom })	
			}
			else {
				this.$router.push({ path: '/dashboard' })
			}
		} catch(err) {
			this.$router.push({ path: '/login' })
		}
	},
	methods: {
		...mapActions('init', ['initialized'])
	}
}
</script>

<style>
.bg-color {
	background-color:#f7f9fa;
}
.text-loading {
    margin-top: 215px;
    margin-left: -97px;
}
.sk-chase {
  width: 70px;
  height: 70px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: black;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
</style>