<template>
  <div class="home">
    <div id="mapContainer" ></div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';
import { GestureHandling } from 'leaflet-gesture-handling';
import elarisMap from '../../../public/assets/Elaris/elarismap/Firefinal.png';
import elarisCountries from '../../../public/assets/Elaris/elarismap/Fireoutline.png';
//import json from "/Kiriel/kiriel-project/public/assets/Elaris/ElarisCoordinates.json";

export default {
  name: 'ElarisMap',
  data() {
    return {
      center: [37, 7749, -122, 4194],
      // size of map area
      bounds: [
        [0, 0],
        [1500, 2250],
      ],
      //cord: json,
    };
  },
  created() {
    //to fix icon bug, might not be needed when custom markers
    L.Marker.prototype.options.icon = L.icon({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
  },
  methods: {
    addMarker() {
      var yx = L.latLng;

      var xy = function (x, y) {
        if (L.Util.isArray(x)) {
          // When doing xy([x, y]);
          return yx(x[1], x[0]);
        }
        return yx(y, x); // When doing xy(x, y);
      };

      var three = xy(920.0, 570.0);
      var four = xy(645.0, 600.0);
      var five = xy(920.0, 650.0);

      let normal = L.marker(three)
          .addTo(this.map)
          .bindPopup(
            `<img class="marker-image" src="${require('../../../public/assets/Elaris/images/zp-zhang-sketch-harbor.jpg')}">`
          ),
        normal1 = L.marker(four)
          .addTo(this.map)
          .bindPopup(
            `<img class="marker-image" src="${require('../../../public/assets/Elaris/images/tanguy-gringoire-final-screen-7.jpg')}">`
          );
      let normal2 = L.marker(five)
        .addTo(this.map)
        .bindPopup(
          `<img class="marker-image" src="${require('../../../public/assets/Elaris/images/jeremy-fenske-burned-village.jpg')}"><a href="stories/city_of_giants.html">city of giants</a>`
        );

      var cities = L.layerGroup([normal, normal1]);
      var aleria = L.layerGroup([normal2]);

      /* var markers = {
        Normal: cities,
        Aleria: aleria,
      }; */
      var layerControl = L.control.layers().addTo(this.map);
      layerControl.addOverlay(aleria, 'aleria');
      layerControl.addOverlay(cities, 'cities');
      // add the gesture handling aka ctrl zoom
      L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);
    },
  },
  mounted() {
    //define what map image
    let mapImage = L.imageOverlay(elarisMap, this.bounds);
    let countryOutlines = L.imageOverlay(elarisCountries, this.bounds);

    this.map = L.map('mapContainer', {
      center: [600, 1000],
      crs: L.CRS.Simple,
      zoom: 0,
      minZoom: 0,
      maxZoom: 2,
      layers: [mapImage],
      gestureHandling: true,
    });

    var baseLayers = {
      Map: mapImage,
    };

    var overlays = {
      Countries: countryOutlines,
    };

    /*  //marker loop
    this.cord.forEach((element) =>
      L.marker([element.long, element.lat])
        .addTo(this.map)
        .bindPopup(
          `<img class="marker-image" src="${require("../../public/assets/Elaris/images/zp-zhang-sketch-harbor.jpg")}"> asdlajkjdhkahd`
        )
    ); */

    L.control.layers(baseLayers, overlays, this.addMarker()).addTo(this.map);
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.scss';

#mapContainer {
  background-image: url('../../assets/img/texture-bw.png');
  background-size: 422px 422px;
  background-color: $bg-dark;
  background-blend-mode: overlay;
  background-repeat: repeat;
  height: 100vh;
}
</style>
