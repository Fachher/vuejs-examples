

import Component from 'vue-class-component';
import Vue from 'vue';
import {Model, Prop} from 'vue-property-decorator';

@Component({
  template: require('./widget.html'),
})
export class WidgetComponent extends Vue {

  @Prop()
  private url: string;

  @Model('change')
  myinput: string;

  greet () {
    alert('Hello');
  }

  get anyComputedValue(){
    return 'any computed value';
  }

}
