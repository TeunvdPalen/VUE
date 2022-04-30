<template>
	<section id="inhoud">
		<div v-if="errored">
			<p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
		</div>
		<div v-else>
			<div v-if="loading">Loading...</div>
			<div v-for="(comment, index) in comments" class="comment" :key="index">
				<h1>Comment {{ comment.id }}</h1>
				<p>Naam: {{ comment.name }}</p>
				<p>E-mail: {{ comment.email }}</p>
				<p>Comment: {{ comment.body }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CommentRoute',
	data: function () {
		return {
			comments: null,
			error: false,
			loading: true,
		};
	},
	created() {
		this.axios
			.get('https://jsonplaceholder.typicode.com/comments', {
				params: {
					_limit: 10,
				},
			})
			.then(response => {
				this.comments = response.data;
			})
			.catch(error => {
				console.log(error);
				// fout met de API request
				this.errored = true;
			})
			.finally(() => (this.loading = false));
	},
};
</script>
