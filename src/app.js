var Vue = require('vue');
var App = require('./app.vue');
var Divider = require('./testdivider.vue');


new Vue({
	el:'#root',
	components:{
		app:App,
		divider:Divider
	}
})