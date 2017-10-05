

import Component from 'vue-class-component';
import Vue from 'vue';
import {Prop} from 'vue-property-decorator';
import axios, {AxiosResponse} from 'axios';
import {Logger} from '../../util/log';
import {ListEntry} from './listEntry';

interface PhotoResponse {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

Vue.filter('limit', function(array, length) {
  let limitCount = parseInt(length, 10);
  return array.slice(0, limitCount);
});

@Component({
  template: require('./widget.html'),
  components: {
    'listEntry': ListEntry
  }
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
