
// Component defintions

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});


$(function(){
    new Vue({
       el: '#app1',
       data: {
           isActive: true,
           hasError: true
       }
    });

    // common pattern
    new Vue({
        el: '#example2',
        data: {
            isActive: true,
            error: true,
            errorClass: 'error-foobar'
        },
        computed: {
            classObject: function(){
                return {
                    'foobar': this.isActive,
                    'text-foobar' : this.error
                }
            }
        }
    });

    // common pattern
    new Vue({
        el: '#example3',
        data: {
            isActive: true,
            activeClass: 'actived',
            errorClass: 'erroneous',
            anyOtherClass: 'other-class'
        }
    })
});
