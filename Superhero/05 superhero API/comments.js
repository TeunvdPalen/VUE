const comments = {
	template: '#commentsTemplate',
	data: function () {
		return {
			comments: null,
			error: false,
			loading: true,
		};
	},
	created() {
		axios
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
