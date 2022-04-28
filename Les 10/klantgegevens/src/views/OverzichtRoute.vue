<template>
	<section>
		<div class="row">
			<div class="cell">
				<p><b>Voornaam</b></p>
			</div>
			<div class="cell">
				<p><b>Achternaam</b></p>
			</div>
			<div class="cell">
				<p><b>Geboortedatum</b></p>
			</div>
			<div class="cell">
				<p><b>Acties</b></p>
			</div>
		</div>
		<div v-for="(klant, index) in klantGegevens" v-bind:class="{ bg1: index % 2 === 0, bg2: !(index % 2 === 0) }" :key="index">
			<transition name="rowTransiton" mode="out-in">
				<div v-if="editKlant === index" class="row">
					<div class="cell">
						<input v-model="klant.vnaam" />
					</div>
					<div class="cell">
						<input v-model="klant.anaam" />
					</div>
					<div class="cell">
						<input v-model="klant.geboortedatum" />
					</div>
					<div class="cell"><button v-on:click="updateData(klant, index)" v-bind:style="buttonStyle">Bewaar</button><button v-on:click="cancelUpdateData(index)" v-bind:style="buttonStyle">Cancel</button></div>
				</div>
				<div v-else>
					<CustomerRow v-bind:klant="klant" v-bind:index="index" v-bind:buttonStyle="buttonStyle" v-on:edit-data="editData" v-on:remove-element="removeElement" />
				</div>
			</transition>
		</div>
	</section>
</template>
<script>
import CustomerRow from '../components/CustomerRow.vue';

export default {
	components: {
		CustomerRow,
	},
	data() {
		return {
			vnaam: '',
			anaam: '',
			geboortedatum: '',
			klantGegevens: [],
			buttonStyle: {
				backgroundColor: '#2196F3',
				cursor: 'pointer',
				padding: '8px 16px',
				verticalAlign: 'top',
			},
			editKlant: null,
			changesAreSaved: true,
			vorigeKlantGegevens: {},
		};
	},
	methods: {
		saveLocalStorage: function () {
			localStorage.setItem('klantGegevens', JSON.stringify(this.klantGegevens));
		},
		removeElement: function (index) {
			this.klantGegevens.splice(index, 1);
			this.saveLocalStorage();
		},
		updateData: function (klant, index) {
			if (klant.vnaam != '' && klant.anaam != '' && klant.geboortedatum != '') {
				this.klantGegevens[index] = {
					vnaam: klant.vnaam,
					anaam: klant.anaam,
					geboortedatum: klant.geboortedatum,
				};
				this.saveLocalStorage();
				this.editKlant = null;
				this.changesAreSaved = true;
			} else {
				alert('Geef alle waardes in aub.');
			}
		},
		checkIfSavedPageLeave: function (e) {
			if (!this.changesAreSaved) {
				e.returnValue = 'test';
				return;
			}
		},
		editData: function (index) {
			if (this.changesAreSaved == false) {
				alert('Andere data wordt aangepast, bewaar of cancel dit eerst.');
			} else {
				this.vorigeKlantGegevens = Object.assign({}, this.klantGegevens[index]);
				this.editKlant = index;
				this.changesAreSaved = false;
			}
		},
		cancelUpdateData: function (index) {
			Object.assign(this.klantGegevens[index], this.vorigeKlantGegevens);
			this.editKlant = null;
			this.changesAreSaved = true;
		},
	},
	mounted() {
		if (localStorage.getItem('klantGegevens')) {
			this.klantGegevens = JSON.parse(localStorage.getItem('klantGegevens'));
		}
		window.addEventListener('beforeunload', this.checkIfSavedPageLeave);
	},
	beforeRouteLeave(to, from, next) {
		console.log('changearesaved2' + this.changesAreSaved);
		if (this.changesAreSaved == false) {
			const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
			if (answer) {
				this.changesAreSaved = true;
				next();
			} else {
				next(false);
			}
		} else {
			next();
		}
	},
};
</script>
<style scoped>
.rowTransiton-enter-from,
.rowTransiton-leave-to {
	opacity: 0;
}
.rowTransiton-enter-active,
.rowTransiton-leave-active {
	transition: all 0.5s;
}
.rowTransiton-enter-to,
.rowTransiton-leave-from {
	opacity: 1;
}
</style>
