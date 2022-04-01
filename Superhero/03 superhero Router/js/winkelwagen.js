const winkelwagen = {
	template: '#winkelwagenTemplate',
	data: function() {
		return {
			winkelwagen: [],
		}
	},
	methods: {
		verwijder: function (index) {
			this.winkelwagen.splice(index, 1);
			this.saveLocalStorageWinkelwagen();
		},
		aantalAanpassing: function (index) {
			if (this.winkelwagen[index].besteld == 0) {
				this.winkelwagen.splice(index, 1);
			}
			this.saveLocalStorageWinkelwagen();
		},
		saveLocalStorageWinkelwagen: function () {
			localStorage.setItem("winkelwagen", JSON.stringify(this.winkelwagen));
		},
	},
	computed: {
		totalePrijs: function () {
			let totaal = 0;
			this.winkelwagen.forEach((item) => {
				if (item.besteld > 0) {
					totaal += item.besteld * item.prijs;
				}
			});
			return totaal;
		},
		totaalAantalItems: function () {
			let totaal = 0;
			if (this.winkelwagen.length > 0) {
				this.winkelwagen.forEach((item) => {
					if (item.besteld > 0) {
						totaal += parseInt(item.besteld);
					}
				});
			}
			this.$root.aantalWinkelwagen = totaal
			return totaal;
		},
	},
	mounted() {
		if (localStorage.getItem('winkelwagen')) {
			this.winkelwagen = JSON.parse(localStorage.getItem("winkelwagen"));
		}
	}
}