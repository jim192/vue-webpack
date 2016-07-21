<style>
	p{
		color: #fff;
	}
</style>

<template>
	<p v-on:click="test">test.vue 已经加载</p>
</template>

<script>
	module.exports = {
		methods: {
			test:function(){
				console.log('running...');
			}
		}
	}
</script>