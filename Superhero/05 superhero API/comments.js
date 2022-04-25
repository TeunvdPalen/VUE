const comments = {
	template: '#commentsTemplate',
	data: function () {
			return {
				comments: null,
				error: false,
				loading: true,
			}
	},
	created() {
		axios.get("https://jsonplaceholder.typicode.com/comments")
		.then((response) => {
				this.comments = response.data.slice(0, 9);
			})
			.catch((error) => {
				console.log(error);
				// fout met de API request
				this.errored = true;
			})
			.finally(() => (this.loading = false));
	}
}