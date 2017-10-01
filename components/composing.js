// Don't change the value of an property

// Syntax sugar <input v-model="something"> => <input v-bind:value="something" v-on:input="something = $event.target.value">


Vue.component('child', {
    // declare the props
    props: ['myMessage'],
    // like data, the prop can be used inside templates and
    // is also made available in the vm as this.message
    template: '<span>{{ myMessage }}</span>',

});

Vue.component('validation-example', {
    props: {
        // basic type check (`null` means accept any type)
        propA: Number,
        // multiple possible types
        propB: [String, Number],
        // a required string
        propC: {
            type: String,
            required: true
        },
        // a number with default value
        propD: {
            type: Number,
            default: 100
        },
        // object/array defaults should be returned from a
        // factory function
        propE: {
            type: Object,
            default: function () {
                return { message: 'hello' }
            }
        },
        // custom validator function
        propF: {
            validator: function (value) {
                return value > 10
            }
        }
    }
});

Vue.component('bs-date-input', {
    template: '<input type="date" class="form-control">'
});

Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function () {
            this.counter += 1;
            this.$emit('increment')
        }
    }
});

Vue.component('my-component', {
    template: '<a href="#">Click me</a>'
});

// todo: This needs to be evaluated
// Vue.component('child-two', {
//    template: '<button v-on:click="informParent">Click me</button>',
//    methods: {
//        informParent: function(){
//            this.$emit('update:foo', 'Value from child published')
//        }
//    }
// });

Vue.component('currency-input', {
    template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)">\
    </span>\
  ',
    props: ['value'],
    methods: {
        // Instead of updating the value directly, this
        // method is used to format and place constraints
        // on the input's value
        updateValue: function (value) {
            var formattedValue = value
            // Remove whitespace on either side
                    .trim()
                    // Shorten to 2 decimal places
                    .slice(
                            0,
                            value.indexOf('.') === -1
                                    ? value.length
                                    : value.indexOf('.') + 3
                    );
            // If the value was not already normalized,
            // manually override it to conform
            if (formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }
            // Emit the number value through the input event
            this.$emit('input', Number(formattedValue))
        }
    }
});

Vue.component('my-checkbox', {
    template: '<input type="checkbox">',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean,
        // this allows using the `value` prop for a different purpose
        value: String
    }
});


$(function(){

    example1 = new Vue({
        el: '#example1'
    });

    example2 = new Vue({
        el: '#example2',
        data: {
            parentMsg: ''
        }
    });

    example3 = new Vue({
        el: '#example3'
    });

    example4 = new Vue({
        el: '#example4',
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function () {
                this.total += 1
            }
        }
    });

    example5 = new Vue({
        el: '#example5',
        methods: {
            doTheThing: function(){
                console.log('I have been clicked')
            }
        }
    });

    example6 = new Vue({
        el: '#example6',
        data: {
            price: 0
        }
    });

    example7 = new Vue({
        el: '#example7',
        data: {
            state: true
        }
    })





});
