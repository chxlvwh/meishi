<template>
<div id="app">
    <header-menu></header-menu>
	<img src="./assets/logo.png">
	<router-view/>
</div>
</template>

<script>
import headerMenu from '@/components/headermenu';
export default {
	name: 'App',
	components: {
		headerMenu
	}
}
</script>

<style>
@import '../static/css/reset.css';
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
