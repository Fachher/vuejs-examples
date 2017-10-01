// globals
var data = { counter: 0 }

// global registration of components
Vue.component('global-component', {
    template: '<div>Hello from global component</div>'
});

Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // data is technically a function, so Vue won't
    // complain, but we return the same object
    // reference for each component instance
    data: function () {
        // return data
        return {
            counter: 0
        }
    }
});


Vue.component('another-global-component', {
    template: '<span>{{ message }}</span>',
    data: function () {
        return {
            message: 'hello'
        }
    }
});

// local registration of components


$(function () {
    example1 = new Vue({
        el: '#example1'
    });

    example2 = new Vue({
        el: '#example2',
        components: {
            'local-component': {
                template: '<div>Hello from local component</div>'
            }
        }
    });

    example3 = new Vue({
        el: '#example3',
        components: {
            'my-row': {
                template: '<tr><td>Table row 1</td></tr>'
            }
        }
    });

    example4 = new Vue({
        el: '#example4'
    });

    example5 = new Vue({
        el: '#example5'
    })
});
