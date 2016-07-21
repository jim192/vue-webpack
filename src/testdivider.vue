<template>
	<div>
		<div v-bind:style="styleObj"></div>
		<p v-bind:style="dividertext">华丽的分割线</p>
		<div v-bind:style="styleObj"></div>
	</div>
</template>

<script>
	module.exports= {
		data:function () {
			return {
				styleObj:{
					borderBottom:'2px solid #008000',
					width:'100%',
					height:'10px'
				},
				dividertext:{
					color:'green',
					textAlign:'center'
				}
			}
			
		}
	}
</script>