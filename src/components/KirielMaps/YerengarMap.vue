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
  methods: {
    Layers() {
      let drawnItems = L.featureGroup().addTo(this.map);

      this.map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;

        drawnItems.addLayer(layer);
      });
      L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);
    },
  },
  mounted() {
    //define what map image
    let mapImage = L.imageOverlay(YerenGarMap, this.bounds);

    this.map = L.map('mapContainer', {
      center: [2500, 4500],
      crs: L.CRS.Simple,
      zoom: -3,
      minZoom: -3,
      maxZoom: 0,
      layers: [mapImage],
      gestureHandling: true,

    });

    var baseLayers = {
      Map: mapImage,
    };

    L.control.layers(baseLayers).addTo(this.map);
    this.Layers();
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
