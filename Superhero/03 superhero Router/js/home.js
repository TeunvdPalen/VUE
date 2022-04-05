const home = {
	template: '#homeTemplate',
	data() {
		return {
			items: [
				{
					id: 1,
					naam: "hondenpak superman",
					omschrijving: "Neem je hond mee als sidekick op al je avonturen!",
					prijs: 29.99,
					src: "elias-castillo-7-ToFEHzMNw-unsplash.jpg",
					besteld: 0,
				},
				{
					id: 2,
					naam: "Wonder Woman",
					omschrijving: "Laat de kleine meid tonen hoe speciaal ze is!",
					prijs: 34.99,
					src: "gabriela-braga-CVEWeDNsJP4-unsplash.jpg",
					besteld: 0,
				},
				{
					id: 3,
					naam: "Spiderman masker",
					omschrijving: "Je wil niet altijd dat je herkent wordt voor je goede daden!",
					prijs: 14.99,
					src: "joey-nicotra-0EI_4R2r0qg-unsplash.jpg",
					besteld: 0,
				},
			],
		}
	},
	methods: {
		VoegToeAanWinkelwagen: function (index) {
			this.items[index].besteld++;
			this.$root.aantalInWinkelwagen++;
			setTimeout(() => {
				this.$root.showWinkelwagen = true;
			}, 500);
			this.$root.showWinkelwagen = false;
			this.saveLocalStorageWinkelwagen();
		},
		saveLocalStorageWinkelwagen: function () {
			let temp = this.items.filter((item) => item.besteld !== 0);
			localStorage.setItem("winkelwagen", JSON.stringify(temp));
		},
	},
	mounted() {
		if (localStorage.getItem("winkelwagen")) {
			let tempLs = JSON.parse(localStorage.getItem("winkelwagen"));
			let temp = 0
			tempLs.forEach((itemInLs) => {
				let gevondenItemInData = this.items.find((itemInData) => itemInData.id == itemInLs.id);
				if (gevondenItemInData) {
					gevondenItemInData.besteld = itemInLs.besteld;
					temp += itemInLs.besteld
					console.log(temp)
					this.$root.aantalInWinkelwagen = temp;
				}
			});
		}
	}
}