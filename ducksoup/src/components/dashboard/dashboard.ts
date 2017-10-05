import Vue from 'vue';
import Component from 'vue-class-component';
import {Logger} from '../../util/log';
import {WidgetComponent} from '../widget/widget';

// https://vuejs.org/v2/api/

@Component({
  template: require('./dashboard.html'),
  components: {
    'widget': WidgetComponent
  }
})
export class DashboardComponent extends Vue {

  // public
  repo: string = 'git.int.kn/projects/KLVC/repos/';
  mode: string = process.env.ENV;

  // protected
  protected logger: Logger;

  constructor() {
    super();
    if (!this.logger) this.logger = new Logger();
  }

  // public methods
  greetBack() {
    alert('Hello Child');
  }

}

// Nice to know
interface VuejsLifecycleHooks {
  beforeCreate();

  created();

  beforeMount();

  mounted();

  beforeUpdate();

  updated();

  beforeDestroy();

  destroyed();
}
