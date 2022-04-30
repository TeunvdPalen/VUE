<template>
	<transition name="cookieTransition">
		<section id="cookies" v-if="showCookieMelding">
			<p>Deze site maakt gebruik van cookies. Door de site verder te gebruiken stem je toe met het gebruik van deze cookies.</p>
			<input type="checkbox" v-on:change="check()" />Deze melding niet meer tonen.
		</section>
	</transition>
</template>
<script>
export default {
	name: 'CookiemeldingComponent',
	data: function () {
		return {
			showCookieMelding: false,
		};
	},
	methods: {
		check: function () {
			this.showCookieMelding = false;
			localStorage.setItem('showCookieMelding', false);
		},
	},
	mounted() {
		if (localStorage.getItem('showCookieMelding')) {
			this.showCookieMelding = JSON.parse(localStorage.getItem('showCookieMelding'));
		} else {
			this.showCookieMelding = true;
		}
	},
};
</script>
