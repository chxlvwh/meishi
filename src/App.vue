<template>
<div id="app">
    <header-menu></header-menu>
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
@import './assets/css/reset.css';
#app {
}
</style>
