import Vue from 'vue';

import { DashboardComponent } from './components/dashboard';

new Vue({
  el: '#app-main',
  components: {
    'dashboard': DashboardComponent
  }
});
