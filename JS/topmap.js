// Load Map
const tonnamMap = L.map("tonnam__map").setView([18.787007, 98.984952], 7.2);
let okie = 1;
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoid29yYXdhdHRyaSIsImEiOiJja2JnMHdqa3oxMHR0MzBubzd4MW54aW00In0.xpv91a9YP7GRa4BtJWts_A",
  }
).addTo(tonnamMap);

// Load Polygon
$.getJSON(
  "https://raw.githubusercontent.com/WorawatPP/todolist/master/map4",
  function (data) {
    okie = L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.on("mouseover", function () {
          this.setStyle({
            fillColor: "#fffff",
          });
          this.bindTooltip(
            "<h2>" +
              feature.properties.name +
              "</h2>" +
              "<br>" +
              "<h2>" +
              "จำนวนร้านค้า " +
              feature.properties.vendor +
              "<br>" +
              "จำนวนเกษตรกร ปี 58 " +
              feature.properties.farmer58 +
              "<br>" +
              "จำนวนเกษตรกร ปี 59 " +
              feature.properties.farmer59 +
              "<br>" +
              "จำนวนเกษตรกร ปี 60 " +
              feature.properties.farmer60 +
              "<br>" +
              "จำนวนเกษตรกร ปี 61 " +
              feature.properties.farmer61
          );
        });
        layer.on("mouseout", function () {
          this.setStyle({
            fillColor: "",
          });
        });
        layer.on({ click: whenClick });
      },
    }).addTo(tonnamMap);
  }
);

// Create marker array
const marker = [
  {
    name: "ChiangMai",
    param: "50",
    lat: 18.787007,
    long: 98.984952,
    zoom: 9,
  },
  {
    name: "Lamphun",
    param: "51",
    lat: 18.573955,
    long: 99.007959,
  },
  {
    name: "Lampang",
    param: "52",
    lat: 18.276409,
    long: 99.479696,
  },
  {
    name: "Phrae",
    param: "54",
    lat: 18.142647,
    long: 100.139286,
  },
  {
    name: "Nan",
    param: "55",
    lat: 18.772201,
    long: 100.771887,
  },
  {
    name: "Phayao",
    param: "56",
    lat: 19.21473,
    long: 100.212166,
  },
  {
    name: "ChiangRai",
    param: "57",
    lat: 19.896964,
    long: 99.811122,
  },
  {
    name: "MaeHongSon",
    param: "58",
    lat: 19.306468,
    long: 98.012313,
  },
];

// Show Marker onclick()
function province(id) {
  console.log(id);
  const result = marker.filter((e) => {
    return e.param == id;
  });
  console.log(result[0]["param"]);
  if (okie != 1) {
    okie.clearLayers();
  }
  $.getJSON(
    "https://chemical-system.mididigital.co.th/api/marker/" +
      result[0]["param"],
    function (data) {
      tonnamMap.setView([result[0]["lat"], result[0]["long"]], 9);
      okie = L.geoJSON(data, {
        onEachFeature: function (feature, layer) {
          let string =
            "<h2>" +
            feature.properties.Name +
            "</h2></n><h4>" +
            "สต็อกสารเคมี" +
            "</h4>";

          for (var i = 0; i < feature.properties.Data.length; i++) {
            string +=
              feature.properties.Data[i]["type"] +
              " " +
              feature.properties.Data[i]["volume_charmical"] +
              " ลิตร" +
              "<br>";
          }
          layer.bindPopup(string);
          console.log(feature.properties.Data);
        },
      }).addTo(tonnamMap);
    }
  );
}

function whenClick(f) {
  // console.log(f.target.feature.properties.name);

  const result = marker.filter((e) => {
    return e.name == f.target.feature.properties.name;
  });

  console.log(result);
  province(result[0]["param"]);
}

tonnamMap.on("zoomend", function () {
  console.log(tonnamMap.getZoom());
  if (tonnamMap.getZoom() < 9) {
    if (ok != 1) {
      okie.clearLayers();
    }
    $.getJSON(
      "https://raw.githubusercontent.com/WorawatPP/todolist/master/map4",
      function (data) {
        okie = L.geoJSON(data, {
          onEachFeature: function (feature, layer) {
            layer.on("mouseover", function () {
              this.setStyle({
                fillColor: "#fffff",
              });
              this.bindTooltip(
                "<h2>" +
                  feature.properties.name +
                  "</h2>" +
                  "<br>" +
                  "<h2>" +
                  "จำนวนร้านค้า " +
                  feature.properties.vendor +
                  "<br>" +
                  "จำนวนเกษตรกร ปี 58 " +
                  feature.properties.farmer58 +
                  "<br>" +
                  "จำนวนเกษตรกร ปี 59 " +
                  feature.properties.farmer59 +
                  "<br>" +
                  "จำนวนเกษตรกร ปี 60 " +
                  feature.properties.farmer60 +
                  "<br>" +
                  "จำนวนเกษตรกร ปี 61 " +
                  feature.properties.farmer61
              );
            });
            layer.on("mouseout", function () {
              this.setStyle({
                fillColor: "",
              });
            });
            layer.on({ click: whenClick });
          },
        }).addTo(tonnamMap);
      }
    );
  }
});
