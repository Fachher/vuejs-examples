

import Component from 'vue-class-component';
import Vue from 'vue';
import {Prop, Provide} from 'vue-property-decorator';

@Component({
  template: require('./widget.html'),
})
export class WidgetComponent extends Vue {

  @Prop()
  private url: string;

  // @Model('input')
  // myinput: string;

  data () {
    return {
      myinput: ''
    };
  }

  greet () {
    alert('Hello');
  }

  get anyComputedValue(){
    return 'any computed value';
  }

}
