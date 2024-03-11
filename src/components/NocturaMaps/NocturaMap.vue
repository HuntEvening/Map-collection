<template>
  <div class="home">
    <div id="mapContainer" ></div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { GestureHandling } from "leaflet-gesture-handling";
import NocturaMap from '../../../public/assets/Noctura/NocturaMini.png';



export default {
  name: 'NocturaMap',
  components: {},
  data() {
    return {
      center: [0, 0, 0, 0],
      // size of map area
      bounds: [
        [0, 0],
        [1400, 3100],
      ],

    };
  },
  methods: {
    
    Layers() {
      let drawnItems = L.featureGroup().addTo(this.map);

      this.map.addControl(
        new L.Control.Draw({
          edit: {
            marker: false,
            featureGroup: drawnItems,
            polyline: {
              metric: true,
              feet: false,
            },
            polygon: {
              allowIntersection: false,
            },
          },

          draw: {
            polyline: {
              metric: true,
              feet: false,
            },
            marker: false,
            polygon: {
              allowIntersection: false,
              showArea: true,
            },
          },
        })
      );

      // add the gesture handling aka ctrl zoom
      L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

      this.map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        drawnItems.addLayer(layer);
      });
    },
  },
  mounted() {
    //define what map image
    let mapImage = L.imageOverlay(NocturaMap, this.bounds);
   

    this.map = L.map('mapContainer', {
      center: [600, 1000],
      crs: L.CRS.Simple,
      zoom: 0,
      minZoom: 0,
      maxZoom: 2,
      layers: [mapImage],
      // scrollWheelZoom: false,
      gestureHandling: true


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
  height: 100vh;
}
</style>
