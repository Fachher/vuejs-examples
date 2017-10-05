

import Component from 'vue-class-component';
import Vue from 'vue';
import {Prop, Provide} from 'vue-property-decorator';
import axios, {AxiosResponse} from 'axios';
import {Logger} from '../../util/log';

interface PhotoResponse {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  template: require('./widget.html'),
})
export class WidgetComponent extends Vue {

  @Prop()
  private url: string;

  items: PhotoResponse[] = [];

  private logger: Logger;

  protected axios;

  constructor() {
    super();
    this.axios = axios;
    if (!this.logger) this.logger = new Logger();
  }


  // @Model('input')
  // myinput: string;

  data () {
    return {
      myinput: ''
    };
  }

  greet () {
    alert('Hello');
    this.$emit('greetParent');
  }

  get anyComputedValue(){
    return 'any computed value';
  }

  // ======= PRIVATED METHODS ======
  private loadItems() {
    if(!this.items.length) {
      this.axios.get(this.url).then((response: AxiosResponse) => {
        this.items = response.data;
      }, (error) => {
        console.error(error);
      });
    }
  }

  // =========== LIFECYCLE HOOKS ======
  mounted() {
    // this context pointing to the Vue instance invoking it
    this.logger.info('Requesting data');

    this.$nextTick(() => {
      this.loadItems();
    });
  }

}
