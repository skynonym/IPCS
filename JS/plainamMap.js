const mymap = L.map("plainamMap").setView([18.787007, 98.984952], 5);
let x = 1;
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 7,
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoid29yYXdhdHRyaSIsImEiOiJja2JnMHdqa3oxMHR0MzBubzd4MW54aW00In0.xpv91a9YP7GRa4BtJWts_A",
  }
).addTo(mymap);

$.getJSON(
  "https://raw.githubusercontent.com/WorawatPP/todolist/master/plainam2",
  function (data) {
    x = L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.on("mouseover", function () {
          this.setStyle({
            fillColor: "#00000",
          });
          this.bindTooltip(
            "<h3>" + "จังหวัด " + feature.properties.tname + "</h3>"
          );
        });
        layer.on("mouseout", function () {
          this.setStyle({
            fillColor: getAreaColor(feature),
          });
        });
        layer.on({ click: whenClick });
      },
      style: areaStyle,
    }).addTo(mymap);
  }
);

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
    // fillColor: getAreaColor(feature),
    weight: 3,
    opacity: 0.6,
    color: "#006eff",
    dashArray: "0",
    fillOpacity: 0.3,
  };
}

// ######################################
function whenClick(f) {
  const result = markerMap.filter((e) => {
    return e.name == f.target.feature.properties.name;
  });

  province(result[0]["param"]);

  const provinceName = this.feature.properties.name;

  let provDetail;
  switch (provinceName) {
    // #เชียงใหม่
    case "ChiangMai":
      const contamChiangmai = new Dropdown({
        id: "select-contam",
        val: "ปี 2561",
        data: ["ปี 2561"],
      });
      ConInfo.clear();

      provDetail = new ConInfo(
        "2561",
        "แม่น้ำปิง",
        "กรมควบคุมมลพิษ",
        `
            <p class="substance"><mark>สารพาราควอต</mark></p>
              <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจสอบสารพาราควอตที่ความเข้มข้น <mark>\< 1.00 µ/L</p>
              <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.28 มก./กก.</mark></p>
            <p class="substance"><mark>สารไกลโฟเซต</mark></p>
              <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark> 1.00 µ/L</mark></p>
              <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark> 0.01 มก./กก.</mark></p>
            `
      );

      provDetail.render();

      break;

    // #เชียงราย
    case "ChiangRai":
      const contamChiangrai = new Dropdown({
        id: "select-contam",
        val: "ปี 2561",
        data: ["ปี 2560", "ปี 2561"],
        cb: function (newVal) {
          switch (newVal) {
            case "ปี 2560":
              ConInfo.clear();

              provDetail = [
                new ConInfo(
                  "2560",
                  "แม่น้ำกก",
                  "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
                  `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: ร้อยละ 80 ของตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.02 - 0.4 มก./กก</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 12 ตัวอย่าง ตรวจพบสารพาราควอต 4 ตัวอย่าง ที่ความเข้มข้น <mark>0.02 - 0.13  มก./กก.</mark></p>
                    `,
                  "kok-river"
                ),
              ];
              provDetail.forEach((sigleProv) => {
                sigleProv.render();
              });

              break;
            case "ปี 2561":
              ConInfo.clear();

              provDetail = [
                new ConInfo(
                  "2561",
                  "แม่น้ำกก",
                  "กรมควบคุมมลพิษ",
                  `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบพาราควอตที่ความเข้มข้น <mark>0.17 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซต ที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.02 มก./กก.</mark></p>
                    `,
                  "kok-river"
                ),
              ];
              provDetail.forEach((sigleProv) => {
                sigleProv.render();
              });
              break;
          }
        },
      });
      ConInfo.clear();

      provDetail = new ConInfo(
        "2561",
        "แม่น้ำกก",
        "กรมควบคุมมลพิษ",
        `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบพาราควอตที่ความเข้มข้น <mark>0.17 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซต ที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.02 มก./กก.</mark></p>
                    `,
        "kok-river"
      );
      provDetail.render();

      break;

    // #ลำพูน
    case "Lamphun":
      const contamLampoon = new Dropdown({
        id: "select-contam",
        val: "ปี 2559",
        data: ["ปี 2559"],
      });

      ConInfo.clear();
      provDetail = new ConInfo(
        "2559",
        "",
        "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
        `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 11 ตัวอย่าง มากกว่าร้อยละ 80 ตรวจพบสารพาราควอตในระดับความเข้มข้น <mark> 0.02 - 2.5 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 11 ตัวอย่าง โดยมี 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>0.04 มก./กก.</mark></p>
                    `
      );
      provDetail.render();

      break;

    // #ลำปาง
    case "Lampang":
      const contamLampang = new Dropdown({
        id: "select-contam",
        val: "ปี 2561",
        data: ["ปี 2559", "ปี 2561"],
        cb: function (newVal) {
          switch (newVal) {
            case "ปี 2559":
              ConInfo.clear();
              provDetail = new ConInfo(
                "2559",
                "แม่น้ำวัง",
                "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
                `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 22 ตัวอย่าง มากกว่าร้อยละ 80 ตรวจพบสารพาราควอต ในระดับความเข้มข้น <mark>0.02 - 1.4 มก./กก.</mark></p>
                    <p class="substance"><mark>สารคลอร์ไพริฟอส</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: ตรวจพบสารคลอร์ไพริฟอสในระดับความเข้มข้น <mark>0.11 - 1.83 มก.</mark></p>
                    `
              );
              provDetail.render();

              break;
            case "ปี 2561":
              ConInfo.clear();
              provDetail = new ConInfo(
                "2559",
                "แม่น้ำวัง",
                "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
                `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <marl>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.11 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.01 มก./กก.</mark></p>
                    `
              );
              provDetail.render();
              break;
          }
        },
      });

      ConInfo.clear();
      provDetail = new ConInfo(
        "2559",
        "แม่น้ำวัง",
        "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
        `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <marl>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.11 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.01 มก./กก.</mark></p>
                    `
      );
      provDetail.render();

      break;

    // #น่าน
    case "Nan":
      const contamNan = new Dropdown({
        id: "select-contam",
        val: "ปี 2562",
        data: ["ปี 2558", "ปี 2561", "ปี 2562"],
        cb: function (newVal) {
          switch (newVal) {
            case "ปี 2558":
              ConInfo.clear();
              provDetail = new ConInfo(
                "2558",
                "แม่น้ำน่าน",
                "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
                `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 4 ตัวอย่าง ทุกตัวอย่างตรวจพบสารพาราควอต ในระดับความเข้มข้น <mark>0.14 - 5.19 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 4 ตัวอย่าง ตรวจพบสารไกลโฟเซต 3 ตัวอย่าง ที่ความเข้มข้น <mark>0.03 - 0.05  มก./กก.</mark></p>
                    `
              );
              provDetail.render();

              break;
            case "ปี 2561":
              ConInfo.clear();
              provDetail = new ConInfo(
                "2561",
                "แม่น้ำน่าน",
                "กรมควบคุมมลพิษ",
                `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารพาราควอต ที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้นระหว่าง <mark>0.38 - 0.90 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้นระหว่าง 0.01 - 0.07 มก./กก.</mark></p>
                    `
              );
              provDetail.render();
              break;
            case "ปี 2562":
              ConInfo.clear();
              provDetail = new ConInfo(
                "2562",
                "แม่น้ำน่าน",
                "กรมควบคุมมลพิษ",
                `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ทุกตัวอย่างตรวจพบสารพาราควอตที่ความเข้มข้นระหว่าง <mark> 0.03 - 8.6 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้นระหว่าง <mark> 0.01 - 0.45 มก./กก.</mark></p>
                    <p class="substance"><mark>คลอร์ไพริฟอส</mark></p>
                      <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ตรวจพบสารคลอร์ไพริฟอสที่ความเข้มข้นระหว่าง <mark> 0.01 - 0.02 มก./กก.</mark></p>
                    `
              );
              provDetail.render();
              break;
          }
        },
      });

      ConInfo.clear();

      provDetail = new ConInfo(
        "2562",
        "แม่น้ำน่าน",
        "กรมควบคุมมลพิษ",
        `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ทุกตัวอย่างตรวจพบสารพาราควอตที่ความเข้มข้นระหว่าง <mark> 0.03 - 8.6 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้นระหว่าง <mark> 0.01 - 0.45 มก./กก.</mark></p>
                    <p class="substance"><mark>คลอร์ไพริฟอส</mark></p>
                      <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ตรวจพบสารคลอร์ไพริฟอสที่ความเข้มข้นระหว่าง <mark> 0.01 - 0.02 มก./กก.</mark></p>
                    `
      );
      provDetail.render();
      break;

    // #พะเยา
    case "Phayao":
      const contamPayao = new Dropdown({
        id: "select-contam",
        val: "ปี 2561",
        data: ["ปี 2561"],
      });

      ConInfo.clear();
      provDetail = new ConInfo(
        "2561",
        "กว๊านพะเยา",
        "กรมควบคุมมลพิษ",
        `
                    <p class="substance"><mark>สารพาราควอต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.09 มก./กก.</mark></p>
                    <p class="substance"><mark>สารไกลโฟเซต</mark></p>
                      <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
                      <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.01 มก./กก.</mark></p>
                    `
      );
      provDetail.render();

      break;
    default:
      console.log("new case");
  }
}

const infoText = document.querySelector(".only-info__box");

class ConInfo {
  constructor(year, river, source, detail, mapId) {
    this.year = year;
    this.river = river;
    this.detail = detail;
    this.source = source;
    this.mapId = mapId;
  }
  static clear() {
    infoText.innerHTML = ``;
  }

  render() {
    const detail = document.createElement("div");
    detail.className = "contam-detail";
    detail.innerHTML = `
    <h3 class="contam-river"><b>แหล่งน้ำ</b>: ${this.river}</h3>
    <h3 class="contam-year"><b>ปีที่ตรวจสอบ</b>: ปี ${this.year}</h3>
    <h3 class="contam-result"><b>ผลการตรวจสอบ</b> <img src="./images/wateryellow.svg" alt="" class="water-emoji" /> ${this.detail}</h3> 
    <h3 class="source"><b>ที่มา</b>: ${this.source} <p>
		`;

    const river = detail.querySelector(".contam-river");
    if (this.river == "") {
      river.innerHTML = "";
    }
    infoText.appendChild(detail);
  }
}

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
];

function province(id) {
  const result = markerMap.filter((e) => {
    return e.param == id;
  });
  //console.log(result[0]["param"]);
  if (x != 1) {
    x.clearLayers();
  }

  // *ปิง
  $.getJSON(
    "https://raw.githubusercontent.com/WorawatPP/todolist/master/plainam_marker",
    function (data) {
      mymap.setView([result[0]["lat"], result[0]["long"]], 9);
      x = L.geoJSON(data, {
        onEachFeature: function () {},
      }).addTo(mymap);
    }
  );
}

mymap.on("zoomend", function () {
  if (mymap.getZoom() < 9) {
    if (x != 1) {
      x.clearLayers();
    }
    $.getJSON(
      "https://raw.githubusercontent.com/WorawatPP/todolist/master/plainam2",
      function (data) {
        x = L.geoJSON(data, {
          onEachFeature: function (feature, layer) {
            layer.on("mouseover", function () {
              this.setStyle({
                fillColor: "#fffff",
              });
            });
            layer.on("mouseout", function () {
              this.setStyle({
                fillColor: "",
              });
            });
            layer.on({ click: whenClick });
          },
        }).addTo(mymap);
      }
    );
  }
});
