<template>
	<div id="box">
		<input type="text">
	</div>
	<test></test>
	<divider></divider>
	<!-- <privatecomp></privatecomp> -->
	<testprop msg="text"></testprop>
</template>

<script>
	module.exports= {
		components : {
			'test' : require('./test.vue'),
			'divider': require('./testdivider.vue'),
			//parent component with private child component
			// 'privatecomp':require('./parentchild.vue')
			'testprop': require('./testprops.vue')
		}
	}
</script>