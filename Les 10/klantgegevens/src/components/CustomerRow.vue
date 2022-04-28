<template>
	<div class="row">
		<div class="cell">
			<p>{{ klant.vnaam }}</p>
		</div>
		<div class="cell">
			<p>{{ klant.anaam }}</p>
		</div>
		<div class="cell">
			<p>{{ klant.geboortedatum }}</p>
		</div>
		<div class="cell">
			<p>
				<button v-on:click="$emit('edit-data', index)" v-bind:style="buttonStyle">E</button>
				<button v-on:click="$emit('remove-element', index)" v-bind:style="buttonStyle">X</button>
			</p>
		</div>
	</div>
</template>
<script>
export default {
	props: ['klant', 'index', 'buttonStyle'],
	data: function () {
		return {};
	},
};
</script>
