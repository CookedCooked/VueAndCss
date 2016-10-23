var Vue = require('vue');

var app = new Vue({
  el: '#app',
  data: function(){
    return {
      message: 'Hello Vue.js!'
    };
  },
  created:function(){
    var vm = this;
    console.log("========"+vm.message);
  }
});