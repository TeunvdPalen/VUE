<template>
	<nav>
		<router-link class="router-link" to="/">Home</router-link>
		<span> - </span>
		<router-link class="router-link" to="/Overzicht">Overzicht</router-link>
	</nav>
	<router-view></router-view>
</template>
<script>
export default {
	name: 'App',
};
</script>
<style>
p,
span,
option,
input {
	font-size: 20px;
}

.row {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 70px;
}
.cell {
	border: none;
	padding-left: 5px;
	padding-right: 5px;
	width: 30%;
	vertical-align: middle;
	text-align: center;
}

#ingave {
	margin: 10px;
}
.bg1 {
	background-color: #ffe633;
}

.bg2 {
	background-color: #d4ca87;
}

section {
	margin: 50px 20px;
}

nav {
	margin-bottom: 20px;
}
.router-link-active {
	font-weight: bold;
}
</style>
