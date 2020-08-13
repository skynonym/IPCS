// #MAIN MAP
// Load Map
const mymap = L.map("mapid").setView([13.2, 98.984952], 5);
let x = 1;
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
).addTo(mymap);

$.getJSON(
  "https://raw.githubusercontent.com/WorawatPP/todolist/master/polygon_thailand",
  function (data) {
    x = L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.on("mouseover", function () {
          this.setStyle({
            fillColor: "#fffff",
          });
          this.bindTooltip(
            "<h2>" +
              "จังหวัด " +
              feature.properties.tname +
              "</h2>" +
              "<h2>" +
              "เขตที่ " +
              feature.properties.area +
              "<br>" +
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
          if (typeof feature.properties.farmer58 == "undefined") {
            this.bindTooltip(
              "<h2>" +
                "จังหวัด " +
                feature.properties.tname +
                "</h2>" +
                "<h2>" +
                "เขตที่ " +
                feature.properties.area
            );
          }
          // console.log(layer.feature.properties.area)
        });
        layer.on("mouseout", function () {
          this.setStyle({
            fillColor: getAreaColor(feature),
          });
        });
        layer.on({
          click: whenClick,
        });
      },
      style: areaStyle,
    }).addTo(mymap);
  }
);

// Create marker array
const marker = [
  {
    name: "Chiang Mai",
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
    name: "Chiang Rai",
    param: "57",
    lat: 19.896964,
    long: 99.811122,
  },
  {
    name: "Mae Hong Son",
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
  if (x != 1) {
    x.clearLayers();
  }
  $.getJSON(
    "https://chemical-system.mididigital.co.th/api/marker/" +
      result[0]["param"],
    function (data) {
      mymap.setView([result[0]["lat"], result[0]["long"]], 9);
      x = L.geoJSON(data, {
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
          // console.log(feature.properties.Data)
        },
      }).addTo(mymap);
    }
  );
}

function whenClick(f) {
  // console.log(f.target.feature.properties.name);

  const result = marker.filter((e) => {
    return e.name == f.target.feature.properties.name;
  });

  // console.log(result)
  province(result[0]["param"]);
}

mymap.on("zoomend", function () {
  // console.log(mymap.getZoom())
  if (mymap.getZoom() < 9) {
    if (x != 1) {
      x.clearLayers();
    }
    $.getJSON(
      "https://raw.githubusercontent.com/WorawatPP/todolist/master/polygon_thailand",
      function (data) {
        x = L.geoJSON(data, {
          onEachFeature: function (feature, layer) {
            layer.on("mouseover", function () {
              this.setStyle({
                fillColor: "#fffff",
              });
              this.bindTooltip(
                "<h2>" +
                  "จังหวัด " +
                  feature.properties.tname +
                  "</h2>" +
                  "<h2>" +
                  "เขตที่ " +
                  feature.properties.area +
                  "<br>" +
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
              if (typeof feature.properties.farmer58 == "undefined") {
                this.bindTooltip(
                  "<h2>" +
                    "จังหวัด " +
                    feature.properties.tname +
                    "</h2>" +
                    "<h2>" +
                    "เขตที่ " +
                    feature.properties.area
                );
              }
            });
            layer.on("mouseout", function () {
              this.setStyle({
                fillColor: getAreaColor(feature),
              });
            });
            layer.on({
              click: whenClick,
            });
          },
          style: areaStyle,
        }).addTo(mymap);
      }
    );
  }
});

function getAreaColor(feature) {
  // console.log(feature)
  switch (feature.properties.area) {
    case 1:
      return "#009aff";
    case 2:
      return "#77deff";
    case 3:
      return "#b3c9ff";
    case 4:
      return "#a18294";
    case 5:
      return "#8b572a";
    case 6:
      return "#c69366";
    case 7:
      return "#417505";
    case 8:
      return "#7fd322";
    case 9:
      return "#2e8f64";
    case 10:
      return "#ceffb8";
    case 11:
      return "#f7e61c";
    case 12:
      return "#f5a623";
    case 13:
      return "#75b7fb";
      break;
  }
}

function areaStyle(feature) {
  return {
    fillColor: getAreaColor(feature),
    weight: 1,
    opacity: 0.5,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.6,
  };
}
// #TONNAM MAP======================
const tonnamMap = L.map("tonnam-map").setView([18.787007, 98.984952], 7.2);
let okay = 1;
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
    okay = L.geoJSON(data, {
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
const markerMap = [
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
// function province(id) {
//   console.log(id);
//   const result = markerMap.filter((e) => {
//     return e.param == id;
//   });
//   console.log(result[0]["param"]);
//   if (okay != 1) {
//     okay.clearLayers();
//   }
//   $.getJSON(
//     "https://chemical-system.mididigital.co.th/api/marker/" +
//       result[0]["param"],
//     function (data) {
//       tonnamMap.setView([result[0]["lat"], result[0]["long"]], 9);
//       okay = L.geoJSON(data, {
//         onEachFeature: function (feature, layer) {
//           let string =
//             "<h2>" +
//             feature.properties.Name +
//             "</h2></n><h4>" +
//             "สต็อกสารเคมี" +
//             "</h4>";

//           for (var i = 0; i < feature.properties.Data.length; i++) {
//             string +=
//               feature.properties.Data[i]["type"] +
//               " " +
//               feature.properties.Data[i]["volume_charmical"] +
//               " ลิตร" +
//               "<br>";
//           }
//           layer.bindPopup(string);
//           console.log(feature.properties.Data);
//         },
//       }).addTo(tonnamMap);
//     }
//   );
// }

function whenClick(f) {
  // console.log(f.target.feature.properties.name);

  const result = markerMap.filter((e) => {
    return e.name == f.target.feature.properties.name;
  });

  // console.log(result);
  province(result[0]["param"]);

  const provinceName = this.feature.properties.name;

  switch (provinceName) {
    case "ChiangMai":
      const chm = new tonnamMapinfoBox("เชียงใหม่", "1,053", "555", "5555");
      console.log(chm);
      break;

    case "ChiangRai":
      new tonnamMapinfoBox("เชียงราย", "1,129", "", "");
      break;

    case "Lamphun":
      new tonnamMapinfoBox("ลำพูน", "374", "", "");
      break;

    case "Lampang":
      new tonnamMapinfoBox("361");
      break;

    case "Nan":
      new tonnamMapinfoBox("389");
      break;

    case "Phrae":
      new tonnamMapinfoBox("303");
      break;
    case "Phayao":
      new tonnamMapinfoBox("320");
      break;
    case "MaeHongSon":
      new tonnamMapinfoBox("127");
      break;
  }
}

class tonnamMapinfoBox {
  constructor(name, store, area, gap) {
    (this.name = name),
      (this.store = store),
      (this.area = area),
      (this.gap = gap),
      this.renderInfo();
  }

  renderInfo() {
    const infoBox = document.querySelector(".tonnam-map__info");
    infoBox.innerHTML = `
    <h1>${this.name}</h1>
    <p>จำนวนร้านค้าในจังหวัด: ${this.store}</p>
    <p>พื้นที่เพาะปลูก: ${this.area} </p>
    <p>อัตราพื้นที่การเพาะปลูกต่อ GAP: ${this.gap} </p>
    `;
  }
}

tonnamMap.on("zoomend", function () {
  console.log(tonnamMap.getZoom());
  if (tonnamMap.getZoom() < 9) {
    if (okay != 1) {
      okay.clearLayers();
    }
    $.getJSON(
      "https://raw.githubusercontent.com/WorawatPP/todolist/master/map4",
      function (data) {
        okay = L.geoJSON(data, {
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
