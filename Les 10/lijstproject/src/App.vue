<template>
	<DitIsDeInterneList
		:listItems="[
			{ id: 1, land: 'België' },
			{ id: 2, land: 'Nederland' },
			{ id: 3, land: 'Luxemburg' },
		]"
	/>
</template>
<script>
import DitIsDeInterneList from './components/ListComponent.vue';
// DitIsDeInterneList kies je zelf
// ListComponent.vue is de verwijzing naar het bestand, dus die moet kloppen
export default {
	name: 'app',
	components: { DitIsDeInterneList },
};
</script>
