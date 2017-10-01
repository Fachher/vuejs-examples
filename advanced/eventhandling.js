$(function(){
    example1 = new Vue({
        el: '#example1',
        data: {
            counter: 0
        }
    });

    example2 = new Vue({
        el: '#example2',
        data: {
            name: 'Vue.js'
        },
        // define methods under the `methods` object
        methods: {
            greet: function (event) {
                // `this` inside methods points to the Vue instance
                alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
                if (event) {
                    alert(event.target.tagName)
                }
            }
        }
    });

    example3 = new Vue({
        el: '#example3',
        methods: {
            say: function (message) {
                alert(message)
            }
        }
    });

    example4 = new Vue({
        el: '#example4',
        methods: {
            warn: function (message, event) {
                console.log(event);
                // now we have access to the native event
                if (event) event.preventDefault();
                alert(message)
            }
        }
    });


});
