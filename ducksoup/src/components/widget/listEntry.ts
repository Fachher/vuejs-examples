
import Component from 'vue-class-component';
import Vue from 'vue';
import {Prop} from 'vue-property-decorator';

@Component({
  template: require('./listEntry.html')
})
export class ListEntry extends Vue {

  @Prop()
  thumbnailUrl: string;

  follow () {
    alert('Follow shipment with url: '+ this.thumbnailUrl);
    this.$parent.$emit('greetParent');
  }

  favorite () {
    alert('Favorite shipment');
    this.$parent.$emit('greetParent');
  }

}
