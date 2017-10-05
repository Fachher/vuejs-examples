import Vue from 'vue';
import Component from 'vue-class-component';
import axios, {AxiosResponse} from 'axios';
import {Logger} from '../../util/log';
import {WidgetComponent} from '../widget/widget';

interface PhotoResponse {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// https://vuejs.org/v2/api/

@Component({
  template: require('./dashboard.html'),
  components: {
    'widget': WidgetComponent
  }
})
export class DashboardComponent extends Vue {

  // public
  items: PhotoResponse[] = [];
  repo: string = 'git.int.kn/projects/KLVC/repos/';
  mode: string = process.env.ENV;

  // protected
  protected logger: Logger;
  protected axios;

  // private
  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor() {
    super();
    this.axios = axios;

    if (!this.logger) this.logger = new Logger();
  }

  // public methods
  greetBack() {
    alert('Hello Child');
  }

  // LIFECYCLE HOOKS
  beforeCreate() {
    if (!this.logger) this.logger = new Logger();
    this.logger.info('before created');
  }

  created() {
    this.logger.info('after created');
  }

  beforeMount() {
    this.logger.info('before component is mounted');
  }

  mounted() {
    // this context pointing to the Vue instance invoking it
    this.logger.info('Requesting data');

    this.$nextTick(() => {
      this.loadItems();
    });
  }

  beforeUpdate() {
    this.logger.info('before update');
  }

  updated() {
    this.logger.info('updated');
  }

  beforeDestroy() {
    this.logger.info('beforeDestroy');
  }

  destroyed() {
    this.logger.info('destroyed');
  }

  // privated methods
  private loadItems() {
    if(!this.items.length) {
      this.axios.get(this.url).then((response: AxiosResponse) => {
        this.items = response.data;
      }, (error) => {
        console.error(error);
      });
    }
  }
}
