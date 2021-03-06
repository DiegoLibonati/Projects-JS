const containerMap = document.querySelector(".contactus_container_map");

var map = new ol.Map({
  target: containerMap,
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 10
  })
});
