import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f12711',
        secondary: '#f96605',
        accent: '#f5af19',
        error: '#e0360b',
        info: '#1ca0a6',
        success: '#00a64f',
        warning: '#f96605'
      },
    },
  },
});
