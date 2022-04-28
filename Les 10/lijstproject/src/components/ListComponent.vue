<template>
	<div>
		<ul>
			<li v-for="item in listItems" :key="item.id">
				{{ item.land }}
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: ['listItems'],
};
</script>
