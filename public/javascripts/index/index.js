/**
 * Created by PC on 2016/10/23.
 */
require("./index.css");

var Vue = require("vue");

var vue = new Vue({
    el:'#app',
    data:function(){
        return {
            message:'Hello World!这是一个测试'
        };
    },
    created:function(){
        var vm = this;
        console.log(vm.message);
    }
});
