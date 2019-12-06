// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import DatePicker from '../src/index';
import '../src/style/index.scss';
import '../src/locale/zh-cn';

import App from './app';

DatePicker.install(Vue);
DatePicker.locale('en');

Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
  },
});

new Vue({
  render: h =>
    h(App, {
      props: {
        changeLocale: DatePicker.locale,
      },
    }),
}).$mount('#app');
