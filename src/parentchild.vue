<template>
	<div id="parent">I\'m parent , my children is :<my-child></my-child></div>
<template>

<script>
	module.exports = {
		components:{
			'my-child':{
				template:'<div> A custom component!</div>'
			}
		}
	}
</script>