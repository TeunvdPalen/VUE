<template>
	<section class="item" v-for="(item, index) in items" :key="item.id">
		<div class="item-img">
			<img v-bind:src="pathSmall + item.src" v-on:click="$emit('toonGroteFoto', item.src)" />
		</div>
		<div class="item-body">
			<div class="prijs">{{ item.prijs }}€</div>
			<h4>{{ item.naam }}</h4>
			<p>{{ item.omschrijving }}</p>
			<transition name="knopTransition" appear>
				<div>
					<a href="#" class="knop" v-on:click.prevent="$emit('VoegToeAanWinkelwagen', index)">BESTEL</a>
				</div>
			</transition>

			<transition name="besteldTransition">
				<p class="besteld" v-if="item.besteld > 0 && showBesteld[index]">Besteld: {{ item.besteld }}</p>
			</transition>
		</div>
	</section>
</template>

<script>
export default {
	props: ['items', 'pathSmall', 'showBesteld'],
	data: function () {
		return {};
	},
};
</script>
