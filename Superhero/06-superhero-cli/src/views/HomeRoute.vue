<template>
	<div>
		<section id="inhoud">
			<h4>Nieuwe items</h4>
			<section id="nieuwe-items">
				<ItemHomeComponent v-bind:items="items" v-bind:pathSmall="pathSmall" v-bind:showBesteld="showBesteld" v-on:toonGroteFoto="toonGroteFoto" v-on:VoegToeAanWinkelwagen="VoegToeAanWinkelwagen" />
			</section>
		</section>
	</div>
</template>
<script>
import ItemHomeComponent from '../components/ItemHomeComponent.vue';

export default {
	name: 'HomeRoute',
	components: {
		ItemHomeComponent,
	},
	data: function () {
		return {
			pathSmall: './assets/images/small/',
			pathBig: './assets/images/big/',
			items: [
				{
					id: 1,
					naam: 'hondenpak superman',
					omschrijving: 'Neem je hond mee als sidekick op al je avonturen!',
					prijs: 29.99,
					src: 'elias-castillo-7-ToFEHzMNw-unsplash.jpg',
					besteld: 0,
				},
				{
					id: 2,
					naam: 'Wonder Woman',
					omschrijving: 'Laat de kleine meid tonen hoe speciaal ze is!',
					prijs: 34.99,
					src: 'gabriela-braga-CVEWeDNsJP4-unsplash.jpg',
					besteld: 0,
				},
				{
					id: 3,
					naam: 'Spiderman masker',
					omschrijving: 'Je wil niet altijd dat je herkent wordt voor je goede daden!',
					prijs: 14.99,
					src: 'joey-nicotra-0EI_4R2r0qg-unsplash.jpg',
					besteld: 0,
				},
			],
			winkelwagen: [],
			//aantalInWinkelwagen: 0,
			//showWinkelwagen: true,
			showBesteld: [],
		};
	},
	methods: {
		toonGroteFoto: function (src) {
			window.open(this.pathBig + src);
		},
		saveLocalStorageWinkelwagen: function () {
			let temp = this.items.filter(item => item.besteld !== 0);
			localStorage.setItem('winkelwagen', JSON.stringify(temp));
		},
		VoegToeAanWinkelwagen: function (index) {
			this.$root.showWinkelwagen = false;
			this.showBesteld[index] = false;

			this.items[index].besteld++;
			this.$root.aantalInWinkelwagen++;

			this.saveLocalStorageWinkelwagen();

			setTimeout(
				function (scope) {
					scope.$root.showWinkelwagen = true;
					scope.showBesteld[index] = true;
				},
				500,
				this
			);
		},
	},

	mounted() {
		if (localStorage.getItem('winkelwagen')) {
			this.$root.aantalInWinkelwagen = 0;
			let tempLS = JSON.parse(localStorage.getItem('winkelwagen'));

			tempLS.forEach(itemLS => {
				this.items.forEach((dataItem, index) => {
					if (itemLS.id == dataItem.id) {
						dataItem.besteld = itemLS.besteld;
						this.$root.aantalInWinkelwagen += parseInt(itemLS.besteld);
						this.showBesteld[index] = true;
					}
				});
			});
		}
	},
};
</script>
