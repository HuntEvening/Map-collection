<template>
  <div class="home">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';
import { GestureHandling } from 'leaflet-gesture-handling';
import YerenGarMap from '../../../public/assets/YerenGar/YerenGar.png';
//import json from "/Kiriel/kiriel-project/public/assets/Elaris/ElarisCoordinates.json";

export default {
  name: 'YerengarMap',
  data() {
    return {
      center: [0, 0, 0, 0],
      // size of map area
      bounds: [
        [0, 0],
        [5000, 9000],
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
  methods: {},
  mounted() {
    L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

    // const sagas = L.layerGroup();
    const UnexpectedAppearance = L.marker([3100, 2070]).bindPopup(
      `<a href="/unexpected-appearance">Saga: Unexpected appearance</a>`
    );
    const LastJob = L.marker([4100, 4000]).bindPopup(
      `<img class="marker-image" src="${require('../../assets/img/storyImages/sergey-demidov-astral-island.jpg')}"><a href="/last-job">Saga: Just this last job</a>`
    );
    const AfterMath = L.marker([3610, 4230]).bindPopup(
      `<img class="marker-image" src="${require('../../assets/img/storyImages/raphael-lacoste-mushies-final-net.jpg')}"><a href="/aftermath">Saga: Aftermath</a>`
    );
    var sagas = L.layerGroup([UnexpectedAppearance, LastJob, AfterMath]);

    //define what map image
    let mapImage = L.imageOverlay(YerenGarMap, this.bounds);

    this.map = L.map('mapContainer', {
      center: [2500, 4500],
      crs: L.CRS.Simple,
      zoom: -3,
      minZoom: -3,
      maxZoom: 0,
      layers: [mapImage, sagas],
      gestureHandling: true,
    });

    var baseLayers = {
      Map: mapImage,
    };
    const overlays = {
      Sagas: sagas,
    };
    L.control.layers(baseLayers, overlays).addTo(this.map);
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
  height: 80vh;
}
</style>
