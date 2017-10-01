$(function(){
    example1 = new Vue({
        el: '#example1',
        data: {
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    });

    example2 = new Vue({
        el: '#example2',
        data: {
            parentData: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    });

    example3 = new Vue({
        el: '#example3',
        data: {
            human: {
                age: 1,
                name: 'hans'
            }
        }
    });

    example4 = new Vue({
        el: '#example4',
        data: {
            items: [{id:2, name: 'steve'}, {id:1, name: 'mike'} ]
        }
    });

    setTimeout(function(){
        example4.items.push({id:0, name: 'brad'});
        example4.items.sort(function(a, b){
            return ((a.id < b.id) ? -1 : ((a.id > b.id) ? 1 : 0));
        });
    }, 2000);

    example5 = new Vue({
        el: '#example5',
        data: {
            items: [{id:2, name: 'dog'}, {id:1, name: 'cat'} ]
        }
    });

    example5.items = example5.items.filter(function(elem){
        return elem.id > 1
    });

    example6 = new Vue({
        el: '#example6',
        data:{
            numbers: [1,2,3,4,5,6]
        },
        computed:{
            evenNumbers: function(){
                return this.numbers.filter(function (number) {
                    return number % 2 === 0
                })
            }
        }
    });

    example7 = new Vue({
        el: '#example7',
        data:{
            todos: [{
                isComplete: true,
                name: 'washing'
            },{
                isComplete: false,
                name: 'eating'
            }]
        }
    });

    Vue.component('todo-item', {
        template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
        props: ['title']
    });

    new Vue({
        el: '#example8',
        data: {
            newTodoText: '',
            todos: [
                {
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
            nextTodoId: 4
        },
        methods: {
            addNewTodo: function () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                });
                this.newTodoText = ''
            }
        }
    })


});
