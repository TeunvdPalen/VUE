const home = {
	template: '#homeTemplate',
	data() {
		return {
			
		}
	},
	methods: {
		VoegToeAanWinkelwagen: function (index) {
			this.$root.items[index].besteld++;
			this.$root.aantalInWinkelwagen++;
			setTimeout(() => {
				this.$root.showWinkelwagen = true;
			}, 500);
			this.$root.showWinkelwagen = false;
			this.saveLocalStorageWinkelwagen();
		},
		saveLocalStorageWinkelwagen: function () {
			let temp = this.$root.items.filter((item) => item.besteld !== 0);
			localStorage.setItem("winkelwagen", JSON.stringify(temp));
		},
	},
	mounted() {
		if (localStorage.getItem("winkelwagen")) {
			let tempLs = JSON.parse(localStorage.getItem("winkelwagen"));
			tempLs.forEach((itemInLs) => {
				let gevondenItemInData = this.$root.items.find((itemInData) => itemInData.id == itemInLs.id);
				if (gevondenItemInData) {
					gevondenItemInData.besteld = itemInLs.besteld;
					this.$root.aantalInWinkelwagen += itemInLs.besteld;
				}
			});
		}
	}
}