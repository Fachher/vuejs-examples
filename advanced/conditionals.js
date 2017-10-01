
/*

v-if vs v-show

v-if is “real” conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.
v-if is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won’t be rendered until the condition becomes true for the first time.
In comparison, v-show is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.
Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.

 */


$(function(){
    example1 = new Vue({
        el: '#example1',
        data: {
            show: false
        }
    });

    example2 = new Vue({
        el: '#example2',
        data: {
            show: true
        }
    });

    example3 = new Vue({
        el: '#example3',
        data: {
            show: true
        }
    });

    example4 = new Vue({
        el: '#example4',
        data: {
            show: true
        }
    });

});
