
// create variables for the earthquake and tectonic plates data
var earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var platesUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// read the data
d3.json(earthquakeUrl, function(data) {
  let earthquakeData = data.features
  d3.json(platesUrl, function(data) {
    let platesData = data.features

    createMap(earthquakeData,platesData)
  })
})
// create map function
function createMap(earthquakeData,platesData) {
// create variable for markers
    let earthquakeMarkers = earthquakeData.map((feature) =>
      L.circleMarker([feature.geometry.coordinates[1],feature.geometry.coordinates[0]],{
          radius: magCheck(feature.properties.mag), 
          stroke: true,
          color: 'black',
          opacity: 0.9,
          weight: 0.9,
          fill: true,
          fillColor: magColor(feature.properties.mag), 
          fillOpacity: 0.9   
      })
      .bindPopup("<h1> Magnitude : " + feature.properties.mag +
      "</h1><hr><h3>" + feature.properties.place +
      "</h3><hr><p>" + new Date(feature.properties.time) + "</p>")
    )
// earthquakes 
    let earthquakes = L.layerGroup(earthquakeMarkers);

    function makePolyline(feature, layer){
      L.polyline(feature.geometry.coordinates);
    }
 // tectonic plates    
    let plates = L.geoJSON(platesData, {
      onEachFeature: makePolyline,
        style: {
          color: 'green',
          opacity: 0.9
        }
    })

  
  // Define map layers
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 19,
    id: "dark-v10",
    accessToken: API_KEY
  });


  var satellite =  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 19,
    id: "mapbox.satellite",
    accessToken: API_KEY
  });




  var outdoors =  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 19,
    id: "outdoors-v11",
    accessToken: API_KEY
  });

  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap,
    "Satellite Map": satellite,
    "Outdoors Map": outdoors
  };

  var overlayMaps = {
    Earthquakes: earthquakes,
    Plates : plates
  };

  var myMap = L.map("map", {
    center: [45.94, -24.96],
    zoom: 3,
    layers: [streetmap, earthquakes]
  });

var legend = L.control({ position: "bottomright" });

legend.onAdd = function(myMap){
    var div = L.DomUtil.create("div","legend");
    div.innerHTML = [
        "<k class='maglt2'></k><span>0-2</span><br>",
        "<k class='maglt3'></k><span>2-3</span><br>",
        "<k class='maglt4'></k><span>3-4</span><br>",
        "<k class='maglt5'></k><span>4-5</span><br>",
        "<k class='maggt5'></k><span>5+</span><br>"
      ].join("");
    return div;
}

legend.addTo(myMap);
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}


     function magColor(mag) {
      var color = "";
      if (mag <= 2) { color = "#ffffb2"; }
      else if (mag <= 3) {color = "#fecc5c"; }
      else if (mag <= 4) { color = "#fd8d3c"; }
      else if (mag <= 5) {color = "#f03b20"; }
      else { color = "#bd0026"; }
    
    return color;
    
    };
function magCheck(mag){
  if (mag <= 1){
      return 6
  }
  return mag * 6;
}
