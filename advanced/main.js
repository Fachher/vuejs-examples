
// 1. add all properties to anyData even they are initially empty. (otherwise you don't have binding)

// Lifecycle of a vue instance
// 1. setup data observation
// 2. compile the template
// 3. mount the instance to the DOM
// 4. update the DOM when data changes
// call lifecycle hooks

// Attention
// 1. Don’t use arrow functions on an options property or callback, such as Since arrow functions are bound to the parent context


var anyData = {
    b : 100,
    isVisible: false
};

$(document).ready(function(){
	console.log("DOM ready!!!");

    var app1 = new Vue({
        data: anyData,
        created: function(){
            console.log('hook has been called!!');
            console.log(this.b);
        },
        mounted: function(){
            console.log('vue has been mounted');
            console.log(this.$el);
        },
        updated: function(){
            console.log('vue has been updated');
        },
        destroyed: function(){
            console.log('vue has been destroyed');
        }
    });

    app1.$mount('#app1');

    // vue exposed instance properties
    console.log(app1.$data);

    // vue exposed instance properties
    app1.$watch('a', function(newValue, oldValue) {
        // This callback will be called when `vm.a` changes
    });

    var app2 = new Vue({
        el: '#app2',
        data: {
            name: 'hanswurst'
        }
    });

    new Vue({
        el: '#button1',
        data: {
            isVisible: true,
            message: 'Foobar'
        },
        computed: {
            reversedMessage: function(){
                return this.message.split('').reverse().join('')
            },
            isVisible: {
                get: function(){
                    return this.isVisible;
                },
                set: function(newValue){
                    this.isVisible =  newValue;
                }
            }
        },
        methods: {
            sayHello: function(){
                console.log('Hello!!!')
            }
        },
        watch: {
            isVisible: function(val){
                console.log('Button is visible');
            }
        }
    })


});
