// #TONNAM MAP======================
const tonnamMap = L.map("tonnam-map").setView([18.787007, 98.984952], 7.2);
let okay = 1;
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 7,
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

// ShowMarker.onclick();
function province(id) {
  const result = markerMap.filter((e) => {
    return e.param == id;
  });
  //console.log(result[0]["param"]);
  if (okay != 1) {
    okay.clearLayers();
  }
  $.getJSON(
    "https://chemical-system.mididigital.co.th/api/marker/" +
      result[0]["param"],
    function (data) {
      tonnamMap.setView([result[0]["lat"], result[0]["long"]], 9);
      okay = L.geoJSON(data, {
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
          //console.log(feature.properties.Data);
        },
      }).addTo(tonnamMap);
    }
  );
}

function whenClick(f) {
  const result = markerMap.filter((e) => {
    return e.name == f.target.feature.properties.name;
  });

  province(result[0]["param"]);

  const provinceName = this.feature.properties.name;

  switch (provinceName) {
    case "ChiangMai":
      const chm = new tonnamMapinfoBox(
        "เชียงใหม่",
        "1,053",
        "1,308,452",
        "36,352",
        "35.99"
      );
      break;

    case "ChiangRai":
      new tonnamMapinfoBox(
        "เชียงราย",
        "1,129",
        "2,279,813",
        "13,133",
        "173.59"
      );
      break;

    case "Lamphun":
      new tonnamMapinfoBox("ลำพูน", "374", "404,025", "11,752", "34.38");
      break;

    case "Lampang":
      new tonnamMapinfoBox("ลำปาง", "361", "827,287", "6,293", "131.46");
      break;

    case "Nan":
      new tonnamMapinfoBox("น่าน", "389", "1,378,571", "6,664", "206.87");
      break;

    case "Phrae":
      new tonnamMapinfoBox("แพร่", "303", "683,149", "1,705", "400.67");
      break;
    case "Phayao":
      new tonnamMapinfoBox("พะเยา", "320", "986,136", "3,948", "249.78");
      break;
    case "MaeHongSon":
      new tonnamMapinfoBox("แม่ฮ่องสอน", "127", "383,954", "2,800", "137.13");
      break;
  }
}

class tonnamMapinfoBox {
  constructor(name, store, area, gap, gapPerArea) {
    (this.name = name),
      (this.store = store),
      (this.area = area),
      (this.gap = gap),
      (this.gapPerArea = gapPerArea),
      this.renderInfo();
  }

  renderInfo() {
    const infoBox = document.querySelector(".tonnam-map__info");
    infoBox.innerHTML = `
    <h1>${this.name}</h1>
    <p>จำนวนร้านค้าในจังหวัด - ${this.store} ร้าน</p>
    <p>พื้นที่เพาะปลูก - ${this.area} ไร่</p>
    <p>พื้นที่ GAP - ${this.gap} ไร่</p>
    <p>อัตราพื้นที่ GAP ต่อพื้นที่เพาะปลูก - 1 : ${this.gapPerArea} ไร่</>
    `;
  }
}

tonnamMap.on("zoomend", function () {
  //console.log(tonnamMap.getZoom());
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
