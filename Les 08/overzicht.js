const overzicht = {
	template: `
  <section>
      <div class="row">
          <div class="cell"><p><b>Voornaam</b></p></div>
          <div class="cell"><p><b>Achternaam</b></p></div>
          <div class="cell"><p><b>Geboortedatum</b></p>
          </div>
          <div class="cell"><p><b>Acties</b></p></div>
      </div>
      <div v-for="(klant,index) in klantGegevens" v-bind:class="{bg1:index%2 ===0, bg2: !(index%2===0)}"
      :key="index" >        
              <customer-row
                v-bind:klant="klant"
                v-bind:index="index"
                v-bind:buttonStyle="buttonStyle"
             v-bind:editKlant="editKlant"
       v-on:edit-data="editData(index)"
     v-on:remove-element="removeElement(index)"
            v-on:update-data="updateData(klant,index)"
 v-on:cancel-update-data="cancelUpdateData(index)"
              ></customer-row>
</div>
</section>`,
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
		console.log('changearesaved' + this.changesAreSaved);
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
