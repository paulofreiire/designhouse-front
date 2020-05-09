import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDCtzQKVESfh7B7nJYp2ietqXTvvE0GWEY',
    libraries: 'places'
  }
});
