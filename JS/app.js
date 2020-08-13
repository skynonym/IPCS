const menu = document.querySelector(".menu");
const navItems = document.querySelector(".big-list");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileContainer = document.querySelector(".mobile-nav__container");
const burger = document.querySelector(".burger__container");
const burgerLine = burger.querySelectorAll(".line");

// #Scroll
const topSection = document.getElementById("top");
let prevScroll = window.pageYOffset;
const navBar = document.querySelector("nav");

const navbarObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      window.onscroll = () => {
        navBar.style.top = "0";
        burger.style.top = "15px";
        mobileMenu.style.top = "70px";
      };
    } else {
      window.onscroll = () => {
        let currentScroll = window.pageYOffset;
        if (prevScroll > currentScroll) {
          navBar.style.top = "0";
          burger.style.top = "15px";
          mobileMenu.style.top = "70px";
        } else {
          if (mobileMenu.classList.contains("open")) {
            openNavHandler();
          }
          navBar.style.top = "-70px";
          burger.style.top = "-70px";
          mobileMenu.style.top = "-70px";
        }

        prevScroll = currentScroll;
      };
    }
  });
});

navbarObserver.observe(topSection);

// #EVENTS
addEventListener("DOMContentLoaded", mediaQuery);
addEventListener("resize", mediaQuery);

burger.addEventListener("click", openNavHandler);
window.addEventListener("click", (e) => {
  if (
    !mobileContainer.contains(e.target) &&
    mobileMenu.classList.contains("open")
  ) {
    openNavHandler();
  }
});

for (let i = 0; i < navItems.children.length; i++) {
  const item = navItems.children[i].children[0];
  const nextItem = navItems.children[i].nextElementSibling;
  const prevItem = navItems.children[i].previousElementSibling;

  navItems.children[i].addEventListener("mouseenter", () => {
    item.classList.add("green");

    if (nextItem !== null && prevItem !== null) {
      nextItem.children[0].classList.add("whiteLeft");
      prevItem.children[0].classList.add("whiteRight");
    } else if (nextItem !== null && prevItem == null) {
      nextItem.children[0].classList.add("whiteLeft");
    } else {
      prevItem.children[0].classList.add("whiteRight");
    }
  });

  navItems.children[i].addEventListener("mouseleave", () => {
    if (i === 0) {
      item.classList.remove("green");
      nextItem.children[0].classList.remove("whiteLeft");
    } else if (i === 3) {
      item.classList.remove("green");
      prevItem.children[0].classList.remove("whiteRight");
    } else {
      item.classList.remove("green");
      nextItem.children[0].classList.remove("whiteLeft");
      prevItem.children[0].classList.remove("whiteRight");
    }
  });
}

// #FUNCTIONS

function mediaQuery() {
  const logoTitle = document.querySelector(".logo h3");

  if (innerWidth < 1360) {
    logoTitle.innerHTML = `ศูนย์พัฒนานโยบาย<br>แห่งชาติด้านสารเคมี`;
  } else {
    logoTitle.innerHTML = `ศูนย์พัฒนานโยบายแห่งชาติด้านสารเคมี`;
  }

  if (window.innerWidth > 1200 && mobileMenu.classList.contains("open")) {
    openNavHandler();
  } else {
    return;
  }
}

function openNavHandler() {
  burgerLine[1].classList.toggle("bye");
  burgerLine[0].classList.toggle("tilt-right");
  burgerLine[2].classList.toggle("tilt-left");

  mobileMenu.classList.toggle("open");
}

const logos = document.querySelector(".logo__container");
const rightContainer = document.querySelector(".right__container");
const leftContainer = document.querySelector(".left__container");

addEventListener("DOMContentLoaded", mediaQuery);
addEventListener("resize", mediaQuery);

function mediaQuery() {
  if (innerWidth < 845) {
    rightContainer.appendChild(logos);
  } else {
    leftContainer.appendChild(logos);
  }
}

function Dropdown(opt) {
  this.options = opt;

  window.getdd = (elem) => {
    const id = elem.closest(".prov-opts").parentElement.id;
    return window.dropdowns[id];
  };

  this.init = function () {
    this.elem = document.getElementById(this.options.id);
    const val = this.options.val;
    const arrowImg = `<img src='./images/arrow.svg'>`;
    let html = `<div class="prov-opts">
									<div class="prov-first">
										<span class="dropdown-value">${val}</span>
										<span class="dropdown-arrow">${arrowImg}</span>
									</div>
									<div class="dropdown__panel">
										<div class="dropdown__items" > 
										</div>
									</div>
								</div>`;
    this.elem.innerHTML = html;
    const elem = this.elem;

    // *store a hash of dropdowns
    if (!window.dropdowns) window.dropdowns = {};
    window.dropdowns[this.options.id] = this;

    // *get elements
    this.items = elem.querySelector(".dropdown__items");
    this.firstBox = elem.querySelector(".prov-first");
    this.arrow = elem.querySelector("img");
    this.value = elem.querySelector(".dropdown-value");

    // *populate dropdown data
    const data = this.options.data;
    html = "";
    data.forEach(function (elem) {
      html += `<div class="dropdowm__item" onmousedown="const self=getdd(this);self.clicked(this)">${elem}</div>`;
    });
    this.items.innerHTML = html;

    const self = this;

    // *close whem click outside the box
    document.addEventListener("mousedown", () => {
      self.hide();
    });

    // *drop the dropdown
    this.elem.addEventListener("mousedown", () => {
      event.stopPropagation();
      if (self.isVisible) self.hide();
      else self.show();
    });
  };

  // *functions
  this.clicked = (elem) => {
    event.stopPropagation();
    this.hide();
    let newVal = elem.innerHTML;
    this.value.innerHTML = newVal;

    if (this.options.cb) this.options.cb(newVal);
  };
  this.show = () => {
    this.isVisible = true;
    this.items.style.transform = "translate(0px, 0px)";
    this.arrow.style.transform = "rotateX(180deg)";
    this.firstBox.classList.add("radius");
  };

  this.hide = () => {
    this.isVisible = false;
    this.items.style.transform = "translate(0px, -320px)";
    this.firstBox.classList.remove("radius");
    this.arrow.style.transform = "rotateX(0deg)";
  };

  this.init();
  return this;
}

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
      new tonnamMapinfoBox("ลำปาง");
      break;

    case "Nan":
      new tonnamMapinfoBox("น่าน");
      break;

    case "Phrae":
      new tonnamMapinfoBox("แพร่");
      break;
    case "Phayao":
      new tonnamMapinfoBox("พะเยา");
      break;
    case "MaeHongSon":
      new tonnamMapinfoBox("แม่ฮ่องสอน");
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

const pieCon = document.querySelector(".only-pie");
const pieInfoCon = document.getElementById("info");
const pieClickMe = document.querySelector(".click-pie");
const colCon = document.querySelector(".onlyColumn");
const colInfoCon = document.getElementById("info-types");
const colClickMe = document.querySelector(".click-bar");

// #PIE CHART
// @Select
const optsOne = new Dropdown({
	id: "prov-options",
	val: "ภาพรวม",
	data: [
		"ภาพรวม",
		"เชียงใหม่",
		"เชียงราย",
		"ลำพูน",
		"ลำปาง",
		"น่าน",
		"แพร่",
		"พะเยา",
		"แม่ฮ่องสอน",
	],
	cb: function (newVal) {
		let oc;
		let herb;
		switch (newVal) {
			case "ภาพรวม":
				oc = 195.39;
				herb = 3634.42;
				para = 2022.94;
				glyp = 1611.48;
				chlo = 195.39;
				break;
			case "เชียงใหม่":
				oc = 140.06;
				herb = 1147.83;
				para = 534.68;
				glyp = 613.15;
				chlo = 140.06;
				break;
			case "เชียงราย":
				oc = 23.28;
				herb = 1166.15;
				para = 800.58;
				glyp = 365.57;
				chlo = 23.28;
				break;
			case "ลำพูน":
				oc = 12.78;
				herb = 194.17;
				para = 63.42;
				glyp = 130.75;
				chlo = 12.78;
				break;
			case "ลำปาง":
				oc = 1.99;
				herb = 264.06;
				para = 119.23;
				glyp = 144.83;
				chlo = 1.99;
				break;
			case "น่าน":
				oc = 3.5;
				herb = 152.79;
				para = 57.81;
				glyp = 94.98;
				chlo = 3.5;
				break;
			case "แพร่":
				oc = 1.99;
				herb = 123.68;
				para = 73.46;
				glyp = 50.22;
				chlo = 1.99;
				break;
			case "พะเยา":
				oc = 11.02;
				herb = 511.04;
				para = 336.86;
				glyp = 174.18;
				chlo = 11.02;
				break;
			case "แม่ฮ่องสอน":
				oc = 0.77;
				herb = 74.7;
				para = 36.9;
				glyp = 37.8;
				chlo = 0.77;
				break;
		}
		drawChart(oc, herb);
		drawStuff(para, glyp, chlo);
	},
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(oc = 195.39, herb = 3634.42) {
	const data = google.visualization.arrayToDataTable([
		["กลุ่มสารเคมี", "ตัน"],
		["Organophosphate & Carbamate", oc],
		["Herbicides", herb],
	]);

	const options = {
		colors: ["#ffc302", "#0f979b"],
		legend: { position: "none" },
		width: "100%",
		height: "100%",
		chartArea: {
			left: "5%",
			top: "5%",
			bottom: "5%",
			right: "5%",
			height: "100%",
			width: "100%",
		},
	};

	const chart = new google.visualization.PieChart(
		document.getElementById("piechart")
	);

	// *show more info
	function selectHandler() {
		const selectedItem = chart.getSelection()[0];
		let info;
		if (!selectedItem) {
			return;
		} else if (selectedItem.row === 0) {
			info = new AllInfo(
				"Organophosphate & Carbamate",
				"สารเคมีสำหรับกำจัดแมลง โดยออร์กาโนฟอสเฟตเป็นกลุ่มที่มีฟอสฟอรัสเป็นองค์ประกอบ และคาร์บาเมตเป็นกลุ่มที่มีคาร์บาริลเป็นองค์ประกอบสําคัญ ",
				"กลุ่มออร์กาโนฟอสเฟตมีฤทธิ์ขัดขวางการทำงานของระบบประสาทส่วนกลางและระบบประสาทส่วนปลาย ผู้ที่ได้รับสารกลุ่มนี้จะมีอาการม่านตาหรี่ หายใจลำบาก เวียนศีรษะ อาเจียน มือสั่น เดินโซเซ ชัก และหมดสติ <br> ส่วนกลุ่มคาร์บาเมตนั้นออกฤทธิ์คล้ายกับกลุ่มออร์กาโนฟอสเฟต แต่ความเป็นพิษน้อยกว่า อาการที่เกิดขึ้นเหมือนกับการได้รับสารกลุ่มออร์กาโนฟอสเฟต",
				"195.39 ตัน",
				"ตัวอย่างสารเคมีในกลุ่มนี้ : คลอร์ไพริฟอส (chlorpyrifos)"
			);
		} else {
			info = new AllInfo(
				"Herbicides",
				"สารเคมีกำจัดวัชพืช เป็นสารชนิดไม่เลือกทำลาย (Non-selective herbicide) ทำลายวัชพืชใบแคบ ใบกว้าง หรือกก แนะนำให้ใช้กำจัดวัชพืชในที่ที่ไม่มีการปลูกพืช หรือถ้าจะพ่นในที่ที่มีพืชขึ้นอยู่หรืออยู่ใกล้เคียง ต้องพ่นอย่างระมัดระวัง",
				"มีกลไกการออกฤทธิ์เร็วและจะเสื่อมฤทธิ์ทันทีเมื่อตกถึงพื้นดิน สารนี้ละลายน้ำและแอลกอฮอล์ได้ดี ไม่มีสี มีกลิ่นอ่อน ๆ คล้ายกลิ่นแอมโมเนีย มีความเป็นพิษต่อผิวหนังและเยื่อเมือก พบอาการทางผิวหนัง หากรับประทานเข้าไปทำให้เกิดพังผืดที่ปอด รวมถึงการหายใจล้มเหลว",
				"3634.42 ตัน",
				"ตัวอย่างสารเคมีในกลุ่มนี้ : พาราควอต (paraquat), ไกลโฟเซต (glyphosate)"
			);
		}
		const sentInfo = new RenderInfo(info, pieCon, pieInfoCon, pieClickMe);
		sentInfo.render();
	}

	google.visualization.events.addListener(chart, "select", selectHandler);

	chart.draw(data, options);
}
// *make it responsive
$(window).resize(function () {
	drawChart();
});

// #COLUMN CHART---------------------------
google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff(
	paraquat = 2022.94,
	glyphosate = 1611.48,
	chlorpyrifos = 195.39
) {
	const numbers = {
		paraquat: paraquat,
		glyphosate: glyphosate,
		chlorpyrifos: chlorpyrifos,
		total() {
			const total = this.paraquat + this.glyphosate + this.chlorpyrifos;
			return total;
		},
	};

	const calc = (para, gly, chlor) => {
		const total = numbers.total();
		const paraPer = (para / total) * 100;
		const glyPer = (gly / total) * 100;
		const chlorPer = (chlor / total) * 100;

		const all = [paraPer.toFixed(2), glyPer.toFixed(2), chlorPer.toFixed(2)];
		return all;
	};

	const percent = calc(
		numbers.paraquat,
		numbers.glyphosate,
		numbers.chlorpyrifos
	);

	const data = new google.visualization.arrayToDataTable([
		["สาร", "ร้อยละ", { role: "style" }],
		["พาราควอต", paraquat, "#9AE2E4"],
		["ไกลโฟเซต", glyphosate, "#404B4B"],
		["คลอร์ไพริพอส", chlorpyrifos, "#CECECE"],
		// ["พาราควอต", 52.82, "#9AE2E4"],
		// ["ไกลโฟเซต", 42.08, "#404B4B"],
		// ["คลอร์ไพริพอส", 5.1, "#CECECE"],
	]);

	const options = {
		width: "100%",
		chartArea: {
			left: "15%",
			bottom: "15%",
			top: "5%",
			right: "5%",
			height: "90%",
			width: "100%",
		},
		legend: { position: "none" },
		axes: {
			x: {
				0: { side: "top" }, //* Top x-axis.
			},
		},
		bar: { groupWidth: "70%" },
		hAxis: {
			textStyle: {
				fontSize: 15,
				color: "#7D7C7C",
			},
		},
	};

	const chart = new google.visualization.ColumnChart(
		document.getElementById("typeColumn")
	);

	// *SELECT
	function selectHandler() {
		const selectedItem = chart.getSelection()[0];
		let info;
		if (!selectedItem) {
			return;
		} else if (selectedItem.row === 0) {
			console.log("im 0");
			info = new AllInfo(
				"พาราควอต (Paraquat)",
				"สารป้องกันกำจัดวัชพืช (Herbicides)",
				"มีความเป็นพิษต่อผิวหนังและเยื่อเมือก เช่น ผิวแห้งแตก มีผื่นแดง เป็นแผล เล็บซีดขาว และเล็บเปราะ อาการทางระบบหายใจ เช่น อาการไอ เลือดกำเดาไหล และเจ็บคอ ",
				"2022.94 ตัน",
				""
			);
		} else if (selectedItem.row === 1) {
			info = new AllInfo(
				"ไกลโฟเซต (Glyphosate)",
				"สารเคมีกำจัดวัชพืชที่อยู่ในผลิตภัณฑ์ยาฆ่าหญ้า",
				"มีส่วนกระตุ้นการเจริญเติบโตของเซลล์มะเร็งเต้านม ส่งผลกระทบต่อไต และออกฤทธิ์ทำลายระบบประสาทส่วนกลางในระยะยาว อันนำไปสู่โรคทางระบบประสาท",
				"1611.48 ตัน",
				""
			);
		} else {
			info = new AllInfo(
				"คลอร์ไพริพอส (Chlorpyrifos)",
				"วัตถุมีพิษทางการเกษตรเพื่อใช้กำจัดแมลงศัตรูพืช โดยการออกฤทธิ์ยับยั้งการทำงานของระบบประสาทในตัวแมลง",
				"ผู้ที่ได้รับพิษเฉียบพลันอาจมีอาการปวดศีรษะ  น้ำตาไหล เหงื่อออกมาก  คลื่นไส้อาเจียน ท้องเสีย ตาพร่า มองภาพไม่ชัดเจน ตัวชาหรือไม่สามารถรับรู้ ความรู้สึกคล้ายเป็นอัมพาต กล้ามเนื้อหดเกร็งตัว หรือเกิดตะคริว มีอาการชักกระตุก หมดสติ และมีอาการโคม่า",
				"195.39 ตัน",
				""
			);
		}
		const sentInfo = new RenderInfo(info, colCon, colInfoCon, colClickMe);
		sentInfo.render();
	}

	google.visualization.events.addListener(chart, "select", selectHandler);

	// *Convert the Classic options to Material options.
	chart.draw(data, options);
}

// *make it responsive
$(window).resize(function () {
	drawStuff();
});

// #SHOW INFO----------------------------
class AllInfo {
	constructor(title, desc, cons, amount, ex) {
		(this.title = title),
			(this.desc = desc),
			(this.cons = cons),
			(this.amount = amount),
			(this.examples = ex);
	}
}

class RenderInfo {
	constructor(info, chartCon, infoCon, clickMe) {
		this.info = info;
		this.chartCon = chartCon;
		this.infoCon = infoCon;
		this.clickMe = clickMe;
	}

	render() {
		const infoContent = this.infoCon.querySelector(".content");
		const container = (infoContent.innerHTML = `
  <h1> ${this.info.title} </h1>
  <p>${this.info.desc}</p>
  <br>
  <p>ผลข้างเคียง: ${this.info.cons}</p>
  <br>
  <p>ในเขตสุขภาพที่ 1 มีการครอบครองสารกลุ่มนี้ ${this.info.amount}</p>
  <br>
  <p>${this.info.examples}</p>`);
		this.toggle();

		return container;
	}

	toggle() {
		if (innerWidth > 800) {
			if (this.infoCon.style.opacity === "1") {
				this.hide();
			} else {
				this.show();
			}
		} else if (innerWidth < 800) {
			this.infoCon.style.opacity = "1";
			this.smallQuery();
		}

		this.closeBtn = this.infoCon.querySelector("button");
		this.closeBtn.addEventListener("click", () => {
			this.hide();
		});
	}

	show() {
		this.infoCon.style.opacity = "1";
		this.infoCon.style.borderRadius = "10px";
		this.infoCon.style.pointerEvents = "all";
		this.chartCon.style.transform = "translateX(20%)";
		this.clickMe.style.opacity = "0";
	}

	hide() {
		this.infoCon.style.width = "40%";
		this.infoCon.style.opacity = "0";
		this.chartCon.style.transform = "translateX(0)";
		this.infoCon.style.pointerEvents = "none";
		this.clickMe.style.opacity = "1";
	}

	smallQuery() {
		this.infoCon.style.pointerEvents = "all";
		this.infoCon.style.width = "100%";
		this.infoCon.style.borderRadius = "0px";
		this.chartCon.style.transform = "translateX(0%)";
		this.clickMe.style.opacity = "0";
	}
}

const DOMquery = () => {
	if (
		(innerWidth > 800 && pieInfoCon.style.opacity === "1") ||
		colInfoCon.style.opacity === "1"
	) {
		pieInfoCon.style.width = "40%";
		colInfoCon.style.width = "40%";
		pieInfoCon.style.opacity = "0";
		colInfoCon.style.opacity = "0";
		colCon.style.transform = "translateX(0)";
		pieCon.style.transform = "translateX(0)";
		colInfoCon.style.pointerEvents = "none";
		pieInfoCon.style.pointerEvents = "none";
		colClickMe.style.opacity = "1";
		pieClickMe.style.opacity = "1";
	} else {
		return;
	}
};

addEventListener("DOMContentLoaded", DOMquery);
addEventListener("resize", DOMquery);

const imgUser = document.querySelector(".img__container");
const tableUser = document.getElementById("userTable");
// const tableUserContainer = document.querySelector(".table__container");

addEventListener("DOMContentLoaded", userQuery);
addEventListener("resize", userQuery);

function userQuery() {
	if (innerWidth < 1062) {
		tableUser.appendChild(imgUser);
	} else {
		tableUser.prepend(imgUser);
	}
}

const options = {
	series: [
		{
			name: "เชียงใหม่",
			data: [33363, 41397, 43081, 39741, 38256, 36352],
		},
		{
			name: "เชียงราย",
			data: [14742, 15607, 18010, 16886, 15768, 13133],
		},
		{
			name: "ลำพูน",
			data: [16658, 14839, 11942, 9785, 10688, 11752],
		},
		{
			name: "ลำปาง",
			data: [8906, 9146, 8221, 7488, 8341, 6293],
		},
		{
			name: "น่าน",
			data: [5081, 4998, 4858, 5375, 6174, 6664],
		},
		{
			name: "แพร่",
			data: [1224, 1140, 1296, 1385, 1564, 1705],
		},
		{
			name: "พะเยา",
			data: [2643, 3348, 3500, 3739, 3696, 3948],
		},
		{
			name: "แม่ฮ่องสอน",
			data: [1151, 2799, 3567, 3551, 2780, 2800],
		},
	],
	chart: {
		height: 450,
		type: "line",
		dropShadow: {
			enabled: true,
			color: "#000",
			top: 10,
			left: 7,
			blur: 5,
			opacity: 0.1,
		},
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
	},
	colors: [
		"#3D7BB4",
		"#52cde2",
		"#8c6ce4",
		"#fd9ff8",
		"#e96f6f",
		"#f3972d",
		"#ffdb0e",
		"#abce2b",
	],
	stroke: {
		curve: "smooth",
		width: 3,
	},
	title: {
		text: undefined,
		align: "left",
	},
	grid: {
		borderColor: "#c7c7c7",
		row: {
			colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
			opacity: 0.5,
		},
		padding: {
			top: 30,
		},
	},
	markers: {
		size: 5,
		hover: {
			size: undefined,
			sizeOffset: 3,
		},
	},

	xaxis: {
		categories: ["2558", "2559", "2560", "2561", "2562", "2563"],
		title: {
			text: "ปี",
		},
	},
	yaxis: {
		title: {
			text: "จำนวนแปลง (ไร่)",
		},
		tickAmount: 8,
		max: 45000,
	},
	legend: {
		show: true,
		position: "top",
		horizontalAlign: "right",
		floating: true,
		offsetX: -5,
	},
};

const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

/* *List for searching
- RESIDUE
- FREQUENCY
- TYPE PIE
- ANALYSIS PIE CHART
- ANALYSIS BAR CHART ***
- IMPORT CHART
- CHEM SOLD
- MONITOR
- FREQUENCY 2
*/

// #RESIDUE#######################################
const seeResult = document.querySelector(".see-full-results");
const fullResult = document.querySelector(".full-results");
const resTable = document.querySelector(".residue-table");

// seeResult.addEventListener("click", () => {
//   fullResult.classList.toggle("open");
// });

const ResTableSelect = new Dropdown({
	id: "select-year--residue",
	val: "2563",
	data: ["2558", "2559", "2560", "2561", "2562", "2563"],
	cb: function (newVal) {
		switch (newVal) {
			case "2558":
				const res2558 = new ResVegFru(
					["4,470", "12", "0.27"],
					[
						["ดอกหอม", "2.94"],
						["พริกสด", "1.26"],
						["กวางตุ้ง", "1.15"],
						["พริกหนุ่ม", "0.87"],
						["ถั่วฝักยาว", "0.57"],
						["กะหล่ำปลี", "0.26"],
					],
					["183", "1", "0.55"],
					[["ส้ม", "2.17"]]
				);
				res2558.tableRender();
				break;
			case "2559":
				const res2559 = new ResVegFru(
					["3,403", "28", "0.82"],
					[
						["พริกแห้ง", "8.82"],
						["ต้นหอม", "2.47"],
						["บร็อคโคลี", "2.13"],
						["ขึ้นฉ่าย", "1.43"],
						["ผักชี", "0.93"],
						["แตงกวา", "0.77"],
						["กะหล่ำปลี", "0.74"],
						["พริกสด", "0.73"],
						["คะน้า", "0.5"],
						["ถั่วฝักยาว", "0.48"],
					],
					["243", "0", "0"],
					[["-", "-"]]
				);
				res2559.tableRender();
				break;
			case "2560":
				const res2560 = new ResVegFru(
					["8,625", "59", "0.68"],
					[
						["หัวไชเท้า", "7.23"],
						["ดอกหอม", "4.88"],
						["สะระแหน่", "4"],
						["พริกแห้ง", "3.92"],
						["บร็อคโคลี", "2.94"],
						["กระเทียม", "2.67"],
						["ผักชีฝรั่ง", "2.26"],
						["แครอท", "1.43"],
						["ถั่วลันเตา", "1.22"],
						["โหระพา", "1.12"],
					],
					["404", "9", "2.23"],
					[
						["ส้ม", "5.19"],
						["แอปเปิล", "1.89"],
					]
				);
				res2560.tableRender();
				break;
			case "2561":
				const res2561 = new ResVegFru(
					["6,902", "72", "1.04"],
					[
						["บร็อคโคลี", "5.08"],
						["กระเทียม", "3.66"],
						["พริกหยวก", "3.51"],
						["พริกแห้ง", "3"],
						["ต้นหอม", "2.68"],
						["ผักกาดเขียว", "2.63"],
						["ผักชีฝรั่ง", "2.08"],
						["พริกสด", "2.03"],
						["หอมแดง", "1.88"],
						["กะหล่ำดอก", "1.74"],
					],
					["805", "14", "1.74"],
					[
						["ส้ม", "13.11"],
						["สตรอว์เบอร์รี", "4.17"],
						["มะเขือเทศ", "0.46"],
						["อื่น ๆ", "1.14"],
					]
				);
				res2561.tableRender();
				break;
			case "2562":
				const res2562 = new ResVegFru(
					["6,959", "59", "0.85"],
					[
						["หัวไชเท้า", "10.68"],
						["กระเทียม", "3.3"],
						["หอมหัวใหญ่", "2.22"],
						["พริกหนุ่ม", "2"],
						["ดอกหอม", "1.85"],
						["บร็อคโคลี", "1.43"],
						["เห็ด", "1.41"],
						["กะหล่ำดอก", "1.37"],
						["ถั่วลันเตา", "1.37"],
						["พริกสด", "1.36"],
					],
					["336", "7", "2.08"],
					[["ส้ม", "6.67"]]
				);
				res2562.tableRender();
				break;
			case "2563":
				const res2563 = new ResVegFru(
					["1,466", "17", "1.16"],
					[
						["ต้นหอม", "3.75"],
						["ผักกาดขาว", "2"],
						["ผักชี", "2.44"],
						["แตงกวา", "1.52"],
						["ถั่วฝักยาว", "1.47"],
						["ขึ้นฉ่าย", "1.23"],
						["พริกสด", "1.22"],
					],
					["56", "6", "10.71"],
					[
						["ส้ม", "**"],
						["พุทรา", "**"],
					]
				);
				res2563.tableRender();
				break;
			default:
				console.log("new case detected");
		}
		ResVegFru.noteRender();
	},
});

class TableRender {
	render(veggies, fruits) {
		// const resTable = document.querySelector(".residue-table");
		resTable.innerHTML = `
    <tr>
      <th rowspan="2">ประเภท</th>
      <th rowspan="2" class="t-no">จำนวนตัวอย่าง</th>
      <th colspan="2">การพบสารตกค้าง</th>
      <th colspan="2">ตัวอย่างที่พบสารตกค้าง</th>
    </tr>
    <tr>
    <th>จำนวน</th>
    <th>ร้อยละ</th>
    <th class="t-ex">ชนิด</th>
      <th>ร้อยละ</th>
    </tr>
    ${veggies}
    ${fruits}
    `;
	}
}

class ResVegFru {
	constructor(vegInfo, veg, fruitInfo, fruits) {
		this.vegInfo = vegInfo;
		this.veg = veg;
		this.fruitInfo = fruitInfo;
		this.fruits = fruits;
	}

	tableRender() {
		resTable.innerHTML = `
    <tr>
      <th rowspan="2">ประเภท</th>
      <th rowspan="2" class="t-no">จำนวนตัวอย่าง</th>
      <th colspan="2">การพบสารตกค้าง*</th>
      <th colspan="2">ตัวอย่างที่พบสารตกค้าง</th>
    </tr>
    <tr>
    <th>จำนวน</th>
    <th>ร้อยละ</th>
    <th class="t-ex">ชนิด</th>
      <th>ร้อยละ</th>
    </tr>
`;

		this.vegRender();
		this.fruitRender();
	}

	vegRender() {
		const vegHead = document.createElement("tr");
		vegHead.innerHTML = `    
    <tr>
      <td rowspan="${this.veg.length}">ผัก</td>
      <td rowspan="${this.veg.length}">${this.vegInfo[0]}</td>
      <td rowspan="${this.veg.length}">${this.vegInfo[1]}</td>
      <td rowspan="${this.veg.length}">${this.vegInfo[2]}</td>
      <td>${this.veg[0][0]}</td>
      <td>${this.veg[0][1]}</td>
    </tr>`;
		resTable.appendChild(vegHead);

		if (this.veg.length >= 2) {
			this.veg.forEach((item, index) => {
				if (index < 1) return;
				const veggie = document.createElement("tr");
				veggie.innerHTML = `
          <td>${item[0]}</td>
          <td>${item[1]}</td>
          `;
				resTable.appendChild(veggie);
			});
		}
	}

	fruitRender() {
		const fruitHead = document.createElement("tr");
		fruitHead.innerHTML = `
    <tr>
      <td rowspan="${this.fruits.length}">ผลไม้</td>
      <td rowspan="${this.fruits.length}">${this.fruitInfo[0]}</td>
      <td rowspan="${this.fruits.length}">${this.fruitInfo[1]}</td>
      <td rowspan="${this.fruits.length}">${this.fruitInfo[2]}</td>
      <td>${this.fruits[0][0]}</td>
      <td>${this.fruits[0][1]}</td>
    </tr>`;
		resTable.appendChild(fruitHead);

		if (this.fruits.length >= 2) {
			this.fruits.forEach((item, index) => {
				if (index < 1) return;
				const fruit = document.createElement("tr");
				fruit.innerHTML = `
          <td>${item[0]}</td>
          <td>${item[1]}</td>
          `;
				resTable.appendChild(fruit);
			});
		}
	}

	static noteRender() {
		const note = document.createElement("tr");
		note.innerHTML = `
    <tr>
      <td colspan="6" class="note">
        ผลวิเคราะห์จากชุดทดสอบเบื้องต้น GT-Test Kit สามารถตรวจสอบความเป็นพิษตกค้างจากการใช้สารเคมีกำจัดศัตรูพืช (Pesticide) และ/หรือ สารพิษอื่นๆ ที่อาจปนเปื้อนหรือตกค้างในอาหาร โดยสามารถตรวจหาความเป็นพิษของสารเคมีกำจัดศัตรูพืช 2 กลุ่ม คือ กลุ่ม Organophosphate, Carbamate และสารพิษอื่นๆ ที่เป็นสาร Cholinesterase inhibitor โดยคลอร์ไพริฟอส (Chlorpyrifos) จัดอยู่ในกลุ่ม Organophosphate เป็นสารอินทรีย์ที่มีฟอสฟอรัสเป็นองค์ประกอบที่สำคัญ มีฤทธิ์ยับยั้งการทำงานของเอนไซม์โคลีนเอสเทอเรสแบบถาวร
        <br>
        * การพบสารตกค้าง หมายถึง การพบสารตกค้างในระดับอันตราย ซึ่งเป็นยาฆ่าแมลงในระดับที่ยับยั้งการทำงานของเอนไซม์โคลีนเอสเทอเรสมากกว่าร้อยละ 50
        <br>
        ** จำนวนตัวอย่างไม่ถึง 30 ตัวอย่าง ไม่สามารถนำมาอ้างอิงทางสถิติได้
        <br>
        ผลวิเคราะห์ปี 2563 เป็นการนำข้อมูลถึงเดือนพฤษภาคม 2563 (ข้อมูล ณ วันที่ 4 มิถุนายน 2563)
      </td>
    </tr>
    `;
		resTable.appendChild(note);
	}
}

// #FREQUENCY#######################################

new Chart(document.getElementById("res-frequency"), {
	type: "bar",
	data: {
		labels: [
			"Carbendazim",
			"Cypermethrin",
			"Imidacloprid",
			"Azoxystrobin",
			"Chlorpyrifos",
			"Profenofos",
			"Acetamiprid",
			"Difenoconazole",
			"Ethion",
			"Fipronil",
			"Chlorfenapyr",
			"Pyridaben",
			"Thiamethoxam",
			"Dimethoxam",
			"Acephate",
			"Chlorantraniliprole",
			"Metalaxyl",
			"Prochloraz",
			"Lambda Cyhalothrin",
			"Methomy",
			"Carbofuran",
			"Chlorothalonil",
			"Emamectin",
			"Iprodione",
			"Propargite",
			"Buprofezine",
			"Mathamidophos",
			"Tebuconazole",
			"Amitraz",
			"Captan",
		],
		datasets: [
			{
				backgroundColor: [
					"#EDB500",
					"#ffc302",
					"#ffd342",
					"#ffedb0",
					"#ffdab0",
					"#ffc786",
					"#ffb560",
					"#ffa641",
					"#eb8612",
					"#eb6212",
					"#dd460a",
					"#f55337",
					"#fd7861",
					"#ff9a89",
					"#ffb5a8",
					"#ffa8c9",
					"#ff88b5",
					"#ff619e",
					"#e755c8",
					"#d33ab2",
					"#c63ad3",
					"#d470dd",
					"#e08fe7",
					"#bf8fe7",
					"#a758e7",
					"#9f41ec",
					"#8b1fe4",
					"#641fe4",
					"#633af5",
					"#5426f8",
				],
				data: [
					57,
					54,
					41,
					39,
					38,
					24,
					23,
					17,
					17,
					16,
					15,
					15,
					13,
					12,
					11,
					11,
					11,
					11,
					10,
					10,
					9,
					9,
					9,
					9,
					9,
					8,
					8,
					8,
					7,
					7,
				],
			},
		],
	},
	options: {
		legend: { display: false },
		title: {
			display: false,
			text: "Predicted world population (millions) in 2050",
		},
	},
});

// #TYPE PIE#######################################
new Chart(document.getElementById("res-type"), {
	type: "pie",
	data: {
		labels: [
			"ไพรีทรอยด์",
			"ออร์กาโนฟอสเฟต",
			"คาร์บาเมต",
			"สารกำจัดรา",
			"สารกำจัดวัชพืช",
			"สารกำจัดแมลงกลุ่มอื่น ๆ",
		],
		datasets: [
			{
				backgroundColor: [
					"#EDB500",
					"#ffd342",
					"#eb6212",
					"#ac4937",
					"#ffffff",
					"#7b7b7b",
				],
				data: [12, 19, 4, 42, 2, 21],
			},
		],
	},
	options: {
		title: {
			display: false,
			text: "Predicted world population (millions) in 2050",
		},
		legend: { position: "bottom" },
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					var dataset = data.datasets[tooltipItem.datasetIndex];
					var total = dataset.data.reduce(function (
						previousValue,
						currentValue,
						currentIndex,
						array
					) {
						return previousValue + currentValue;
					});
					var currentValue = dataset.data[tooltipItem.index];
					var percentage = Math.floor((currentValue / total) * 100 + 0.5);
					return percentage + "%";
				},
			},
		},
	},
});

// #ANALYSIS PIE CHART#######################################
new Chart(document.getElementById("res-ana-pie"), {
	type: "pie",
	data: {
		labels: ["สูงกว่า MRL", "ต่ำกว่า MRL", "ไม่พบ"],
		datasets: [
			{
				backgroundColor: ["#ff7c65", "#ffffff", "#7b7b7b"],
				data: [42, 1, 33],
			},
		],
	},
	options: {
		title: {
			display: false,
			text: "Predicted world population (millions) in 2050",
		},
		legend: { position: "bottom" },
	},
});

// #ANALYSIS BAR CHART#######################################
new Chart(document.getElementById("res-ana-bar"), {
	type: "bar",
	data: {
		labels: ["พาราควอต", "ไกลโฟเซต", "อะทราซีน"],
		datasets: [
			{
				label: "สูงกว่า MRL",
				backgroundColor: "#EDB500",
				data: [38, 6, 4],
			},
			{
				label: "ต่ำกว่า MRL",
				backgroundColor: "#0f979b",
				data: [1, 0, 2],
			},
			{
				label: "ไม่พบ",
				backgroundColor: "#0ed4ca",
				data: [37, 70, 70],
			},
		],
	},
	options: {
		legend: { position: "bottom" },
		animation: {
			duration: 10,
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					gridLines: { display: false },
				},
			],
			yAxes: [
				{
					stacked: true,
				},
			],
		}, // scales
		legend: { display: true },
	}, // options
});

//#IMPORT CHART#######################################
window.onload = function () {
	var resImport = document.getElementById("res-import").getContext("2d");
	var resImportChart = new Chart(resImport, {
		type: "pie",
		data: {
			datasets: [
				{
					data: [14, 18, 9, 1, 45, 11, 1, 1],
					backgroundColor: [
						"#9e623f",
						"#EDB500",
						"#ffd342",
						"#ffdab0",
						"#7b7b7b",
						"#2e5f43",
						"#1e9652",
						"#3ccf7c",
					],
					label: "Dataset 1",
				},
			],
			labels: [
				"ไพรีทรอยด์",
				"ออร์กาโนฤอสเฟต",
				"คาร์บาเมต",
				"ออร์กาโนคสอรีน",
				"สารกำจัดรา",
				"สารกำจัดแมลงกลุ่มอื่น",
				"สารกำจัดจัดไร",
				"สารกำจัดวัชพืช",
			],
		},
		options: {
			legend: { position: "bottom" },
			animation: {
				duration: 10,
			},
			responsive: true,
			tooltips: {
				callbacks: {
					label: function (tooltipItem, data) {
						var label = data.labels[tooltipItem.datasetIndex] || "";

						if (label) {
							label += ": ";
						}
						label += data.datasets[0].data[tooltipItem.index];
						label += "%";
						return label;
					},
				},
			},
		},
	});
};

// #CHEM SOLD#######################################
// @select year
const selectResSold = new Dropdown({
	id: "res-sold__select",
	val: "2562",
	data: ["2561", "2562"],
	cb: function (val) {
		switch (val) {
			case "2561":
				const sold2561 = new soldTable(
					[24, 16, 3, 5],
					[16, 12, 3, 1],
					[10, 7, 0, 2],
					[5, 5, 0, 0],
					[15, 10, 2, 3],
					[8, 6, 2, 0],
					[5, 2, 2, 1],
					["-", "-", "-", "-"],
					[83, 58, 12, 12],
					[100, 69.88, 14.46, 14.46]
				);
				break;
			case "2562":
				const sold2562 = new soldTable(
					[7, 6, 1, 0],
					[9, 8, 1, 0],
					[6, 5, 0, 1],
					["-", "-", "-", "-"],
					[7, 6, 1, 0],
					[7, 7, 0, 0],
					[7, 5, 0, 2],
					[7, 6, 0, 1],
					[50, 43, 3, 4],
					[100, 86, 6, 8]
				);
				break;
		}
	},
});

class soldTable {
	constructor(
		chiangmai,
		chiangrai,
		lampoon,
		lampang,
		nan,
		prea,
		payao,
		maehongsorn,
		total,
		percent
	) {
		(this.chm = chiangmai),
			(this.chr = chiangrai),
			(this.lpo = lampoon),
			(this.lpa = lampang),
			(this.nan = nan),
			(this.pre = prea),
			(this.pay = payao),
			(this.mae = maehongsorn),
			(this.total = total),
			(this.percent = percent);
		this.render();
	}

	render() {
		const soldTable = document.getElementById("res-sold");
		soldTable.innerHTML = `<tr>
									<th>จังหวัด</th>
                  <th>จำนวนตัวอย่างทั้งหมด</th>
                  <th>ปลอดภัย</th>
                  <th>พบผ่านเกณฑ์มาตรฐาน</th>
                  <th>พบไม่ผ่านเกณฑ์มาตรฐาน</th>
								</tr>
                <tr>
                  <td>เชียงใหม่</td>
                  <td>${this.chm[0]}</td>
                  <td>${this.chm[1]}</td>
                  <td>${this.chm[2]}</td>
                  <td>${this.chm[3]}</td>
                </tr>
                <tr>
                  <td>เชียงราย</td>
                  <td>${this.chr[0]}</td>
                  <td>${this.chr[1]}</td>
                  <td>${this.chr[2]}</td>
                  <td>${this.chr[3]}</td>
                </tr>
                <tr>
                  <td>ลำพูน</td>
                  <td>${this.lpo[0]}</td>
                  <td>${this.lpo[1]}</td>
                  <td>${this.lpo[2]}</td>
                  <td>${this.lpo[3]}</td>
                </tr>
                <tr>
                  <td>ลำปาง</td>
                  <td>${this.lpa[0]}</td>
                  <td>${this.lpa[1]}</td>
                  <td>${this.lpa[2]}</td>
                  <td>${this.lpa[3]}</td>
                </tr>
                <tr>
                  <td>น่าน</td>
                  <td>${this.nan[0]}</td>
                  <td>${this.nan[1]}</td>
                  <td>${this.nan[2]}</td>
                  <td>${this.nan[3]}</td>
                </tr>
                <tr>
                  <td>แพร่</td>
                  <td>${this.pre[0]}</td>
                  <td>${this.pre[1]}</td>
                  <td>${this.pre[2]}</td>
                  <td>${this.pre[3]}</td>
                </tr>
                <tr>
                  <td>พะเยา</td>
                  <td>${this.pay[0]}</td>
                  <td>${this.pay[1]}</td>
                  <td>${this.pay[2]}</td>
                  <td>${this.pay[3]}</td>
                </tr>
                <tr>
                  <td>แม่ฮ่องสอน</td>
                  <td>${this.mae[0]}</td>
                  <td>${this.mae[1]}</td>
                  <td>${this.mae[2]}</td>
                  <td>${this.mae[3]}</td>
                </tr>
                <tr>
                  <td>รวม</td>
                  <td>${this.total[0]}</td>
                  <td>${this.total[1]}</td>
                  <td>${this.total[2]}</td>
                  <td>${this.total[3]}</td>
                </tr>
                <tr>
                  <td>ร้อยละ</td>
                  <td>${this.percent[0]}</td>
                  <td>${this.percent[1]}</td>
                  <td>${this.percent[2]}</td>
                  <td>${this.percent[3]}</td>
                </tr>
								`;
	}
}

// #MORNITOR#######################################
const selectMonitor = new Dropdown({
	id: "res-monitor__select",
	val: "2562",
	data: ["2561", "2562"],
	cb: function (val) {
		const monitorChartContainer = document.getElementById("res-monitor2");
		const note = document.querySelector(".monitor__note");
		switch (val) {
			case "2561":
				new Chart(monitorChartContainer, {
					type: "pie",
					data: {
						datasets: [
							{
								data: [70, 14.5, 14.5, 1],
								backgroundColor: ["#9e623f", "#ff7c65", "#7b7b7b", "#0f979b"],
								label: "Dataset 1",
							},
						],
						labels: [
							"ผ่านมาตรฐาน",
							"พบแต่ไม่เกินมาตรฐาน",
							"พบตกมาตรฐาน",
							"พบสารห้ามใช้",
						],
					},
					options: {
						legend: { position: "bottom" },
						animation: {
							duration: 10,
						},
						responsive: true,
						tooltips: {
							callbacks: {
								label: function (tooltipItem, data) {
									var label = data.labels[tooltipItem.datasetIndex] || "";

									if (label) {
										label += ": ";
									}
									label += data.datasets[0].data[tooltipItem.index];
									label += "%";
									return label;
								},
							},
						},
					},
				});

				note.innerHTML =
					"*ข้อมูลจากจังหวัดเชียงใหม่ เชียงราย แพร่ น่าน  ลำพูน พะเยา";
				break;
			case "2562":
				new Chart(monitorChartContainer, {
					type: "pie",
					data: {
						datasets: [
							{
								data: [86, 6, 8],
								backgroundColor: ["#9e623f", "#ffc302", "#7b7b7b"],
								label: "Dataset 1",
							},
						],
						labels: ["ปลอดภัย", "พบผ่านเกณฑ์มาตรฐาน", "ไม่ผ่านเกณฑ์มาตรฐาน"],
					},
					options: {
						legend: { position: "bottom" },
						animation: {
							duration: 10,
						},
						responsive: true,
						tooltips: {
							callbacks: {
								label: function (tooltipItem, data) {
									var label = data.labels[tooltipItem.datasetIndex] || "";

									if (label) {
										label += ": ";
									}
									label += data.datasets[0].data[tooltipItem.index];
									label += "%";
									return label;
								},
							},
						},
					},
				});
				note.innerHTML =
					"*ข้อมูลจากจังหวัดเชียงใหม่ เชียงราย แพร่ น่าน  ลำพูน พะเยา และแม่ฮ่องสอน";

				break;
		}
	},
});

new Chart(document.getElementById("res-monitor2"), {
	type: "pie",
	data: {
		datasets: [
			{
				data: [86, 6, 8],
				backgroundColor: ["#9e623f", "#ffc302", "#7b7b7b"],
				label: "Dataset 1",
			},
		],
		labels: ["ปลอดภัย", "พบผ่านเกณฑ์มาตรฐาน", "ไม่ผ่านเกณฑ์มาตรฐาน"],
	},
	options: {
		legend: { position: "bottom" },
		animation: {
			duration: 10,
		},
		responsive: true,
		tooltips: {
			callbacks: {
				label: function (tooltipItem, data) {
					var label = data.labels[tooltipItem.datasetIndex] || "";

					if (label) {
						label += ": ";
					}
					label += data.datasets[0].data[tooltipItem.index];
					label += "%";
					return label;
				},
			},
		},
	},
});

// #FREQUENCY 2#######################################
new Chart(document.getElementById("res-frequecy2-1"), {
	type: "bar",
	data: {
		labels: [
			"Cypermethrin",
			"Fipronil",
			"Chlopynifos",
			"Cypermethrin",
			"Metalaxyl",
			"Lambda-cyhalothrin",
			"Propargite",
			"Bifenthrin",
			"Carbofuran",
			"Acephate",
			"Carbary",
			"Ethion",
			"Profenofos",
			"Cyfluthrin",
			"Dimethoate",
			"Malathion",
			"Methamidophos",
			"Tetradifon",
		],
		datasets: [
			{
				data: [10, 7, 5, 5, 5, 4, 4, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1],
				backgroundColor: [
					"#FFFF99",
					"#FFCC99",
					"#FFCC66",
					"#FFCC33",
					"#FFCC00",
					"#FF9900",
					"#FF9933",
					"#FF9966",
					"#FF9999",
					"#FF9966",
					"#FF9933",
					"#FF9900",
					"#FF6600",
					"#FF6633",
					"#FF6666",
					"#ff619e",
					"#d33ab2",
					"#9f41ec",
				],
			},
		],
	},
	options: {
		animation: {
			duration: 10,
		},
		// title: {
		//   display: true,
		//   text:
		//     "ความถี่ของชนิดป้องกันและกำจัดศัตรูพืช ที่พบตกค้างในผักผลไม้ปี 2561",
		// },
		scales: {
			xAxes: [
				{
					stacked: true,
					gridLines: { display: false },
				},
			],
			yAxes: [
				{
					stacked: true,
				},
			],
		}, // scales
		legend: { display: false },
	}, // options
});

// @2562!!!!!!!!!!!!!!
new Chart(document.getElementById("res-frequecy2-2"), {
	type: "bar",
	data: {
		labels: [
			"Cypermethrin",
			"Chlorpyri fos",
			"Carbenda zim",
			"Carbofuran",
			"Chlorfena pyr",
			"Ethion",
			"Metalaxyl",
			"Methomyl",
			"Profenofos",
		],
		datasets: [
			{
				data: [5, 3, 1, 1, 1, 1, 1, 1, 1],
				backgroundColor: [
					"#eb6212",
					"#fd7861",
					"#ffb5a8",
					"#ffa8c9",
					"#ff619e",
					"#d470dd",
					"#c63ad3",
					"#9f41ec",
					"#641fe4",
				],
			},
		],
	},
	options: {
		animation: {
			duration: 10,
		},
		// title: {
		//   display: true,
		//   text:
		//     "ความถี่ของชนิดป้องกันและกำจัดศัตรูพืช ที่พบตกค้างในผักผลไม้ปี 2562",
		// },
		scales: {
			xAxes: [
				{
					stacked: true,
					gridLines: { display: false },
				},
			],
			yAxes: [
				{
					stacked: true,
				},
			],
		}, // scales
		legend: { display: false },
	}, // options
});

const frequency61 = document.querySelector(".frequency2561");
const frequency62 = document.querySelector(".frequency2562");

const selectFrequecy2 = new Dropdown({
	id: "res-frequecy2__select",
	val: "2562",
	data: ["2561", "2562"],
	cb: function (val) {
		switch (val) {
			case "2561":
				if (frequency62.classList.contains("open")) {
					frequency62.classList.remove("open");
					frequency61.classList.add("open");
				} else {
					return;
				}
				break;
			case "2562":
				if (frequency61.classList.contains("open")) {
					frequency61.classList.remove("open");
					frequency62.classList.add("open");
				} else {
					return;
				}
				break;
		}
	},
});

const allPatientOptions = {
	series: [
		{
			name: "รวม",
			data: [1716, 778, 653],
		},
		{
			name: "สารกำจัดแมลง",
			data: [754, 419, 240],
		},
		{
			name: "สารกำจัดวัชพืช",
			data: [380, 199, 256],
		},
		{
			name: "สารกำจัดศัตรูพืชอื่นๆ",
			data: [580, 160, 157],
		},
	],
	chart: {
		height: 450,
		type: "line",
		dropShadow: {
			enabled: true,
			color: "#000",
			top: 10,
			left: 7,
			blur: 5,
			opacity: 0.1,
		},
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
	},
	colors: ["#3D7BB4", "#e96f6f", "#f3972d", "#ffdb0e"],
	stroke: {
		curve: "smooth",
		width: 3,
		dashArray: [5, 0, 0, 0],
	},
	title: {
		text: undefined,
		align: "left",
	},
	grid: {
		borderColor: "#c7c7c7",
		row: {
			colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
			opacity: 0.5,
		},
		padding: {
			top: 30,
		},
	},
	markers: {
		size: 5,
		hover: {
			size: undefined,
			sizeOffset: 3,
		},
	},

	xaxis: {
		categories: ["2560", "2561", "2562"],
		title: {
			text: "ปี",
		},
	},
	yaxis: {
		title: {
			text: "จำนวนผู้ป่วย (คน)",
		},
		tickAmount: 8,
		max: 1780,
	},
	legend: {
		show: true,
		position: "top",
		horizontalAlign: "right",
		floating: true,
		offsetX: -5,
	},
};

const allPatientChart = new ApexCharts(
	document.querySelector("#all-patients"),
	allPatientOptions
);
allPatientChart.render();

// #STACKED COLUMN----------------------------
const stackedColOptions = {
	series: [
		{
			name: "สารกำจัดแมลง",
			data: [754, 419, 240],
		},
		{
			name: "สารกำจัดวัชพืช",
			data: [380, 199, 256],
		},
		{
			name: "สารกำจัดศัตรูพืชอื่นๆ",
			data: [580, 160, 157],
		},
	],
	chart: {
		type: "bar",
		height: 350,
		stacked: true,
		stackType: "100%",
		toolbar: {
			show: false,
		},
	},
	colors: ["#404B4B", "#0F979B", "#9CD0D1"],

	responsive: [
		{
			breakpoint: 480,
			options: {
				legend: {
					position: "bottom",
					offsetX: -10,
					offsetY: 0,
				},
			},
		},
	],
	xaxis: {
		categories: ["2560", "2561", "2562"],
	},
	fill: {
		opacity: 1,
	},
	legend: {
		position: "top",
		offsetX: 0,
		offsetY: 0,
	},
};

const stackedChart = new ApexCharts(
	document.querySelector("#stackedCol"),
	stackedColOptions
);
stackedChart.render();

// #SECTION3-----------------
// @graphs
const sec3ChiangMai = document
	.getElementById("sec3-chiangmai__chart")
	.getContext("2d");
let myChart = new Chart(sec3ChiangMai, {
	type: "bar",
	data: {
		labels: ["2560", "2561", "2562"],
		datasets: [
			{
				label: "สารกำจัดแมลง",
				backgroundColor: "#bee26a",
				data: [11.39, 6.34, 7.75],
			},
			{
				label: "สารกำจัดวัชพืช",
				backgroundColor: "#45c490",
				data: [11.15, 5.3, 5.94],
			},
			{
				label: "สารกำจัดศัตรูพืชอื่น ๆ",
				backgroundColor: "#008d93",
				data: [2.42, 3.29, 3.38],
			},
		],
	},
	options: {
		tooltips: {
			displayColors: true,
			callbacks: {
				mode: "x",
			},
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					gridLines: {
						display: false,
					},
				},
			],
			yAxes: [
				{
					stacked: true,
					ticks: {
						beginAtZero: true,
					},
					type: "linear",
				},
			],
		},
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: "bottom" },
	},
});

// @active class
const secThreeOpt = document.querySelectorAll(".sec3-opt");
const sec3AllWrapper = document.querySelector(".sec3-wrapper--all");

const chiangMaiChart = document.getElementById("sec3-chiangmai");
const chiangRaiChart = document.getElementById("sec3-chiangrai");
const paYaoChart = document.getElementById("sec3-payao");
const praeChart = document.getElementById("sec3-prae");
const lamPoonChart = document.getElementById("sec3-lampoon");
const lamPangChart = document.getElementById("sec3-lampang");
const nanChart = document.getElementById("sec3-nan");
const maeHongSornChart = document.getElementById("sec3-maehongsorn");

for (let i = 0; i < secThreeOpt.length; i++) {
	secThreeOpt[i].addEventListener("click", function (e) {
		const current = document.querySelector(".active");
		current.className = current.className.replace("active", "");
		this.className = "active";

		// *showing/hiding charts
		const openItem = sec3AllWrapper.querySelector(".open");
		openItem.className = openItem.className.replace("open", "");

		const text = e.target.innerHTML;
		switch (text) {
			case "เชียงใหม่":
				if (chiangMaiChart.classList[1] === "open") {
					return;
				} else {
					chiangMaiChart.classList.add("open");
				}

				break;
			case "เชียงราย":
				let sec3ChiangRai;
				if (chiangRaiChart.classList[1] === "open") {
					return;
				} else if (chiangRaiChart.classList[1] !== "open") {
					chiangRaiChart.classList.add("open");
					sec3ChiangRai = document
						.getElementById("sec3-chiangrai__chart")
						.getContext("2d");
					const crChart = new Chart(sec3ChiangRai, {
						type: "bar",
						data: {
							labels: ["2560", "2561", "2562"],
							datasets: [
								{
									label: "สารกำจัดแมลง",
									backgroundColor: "#caf270",
									data: [14.1, 5.05, 3.66],
								},
								{
									label: "สารกำจัดวัชพืช",
									backgroundColor: "#45c490",
									data: [9.65, 4.06, 6.54],
								},
								{
									label: "สารกำจัดศัตรูพืชอื่น ๆ",
									backgroundColor: "#008d93",
									data: [28.52, 4.06, 6.54],
								},
							],
						},
						options: {
							tooltips: {
								displayColors: true,
								callbacks: {
									mode: "x",
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										gridLines: {
											display: false,
										},
									},
								],
								yAxes: [
									{
										stacked: true,
										ticks: {
											beginAtZero: true,
										},
										type: "linear",
									},
								],
							},
							responsive: true,
							maintainAspectRatio: false,
							legend: { position: "bottom" },
						},
					});
				}
				break;
			case "พะเยา":
				if (paYaoChart.classList[1] === "open") {
					return;
				} else if (paYaoChart.classList[1] !== "open") {
					paYaoChart.classList.add("open");
					const sec3PaYao = document
						.getElementById("sec3-payao__chart")
						.getContext("2d");
					const pyChart = new Chart(sec3PaYao, {
						type: "bar",
						data: {
							labels: ["2560", "2561", "2562"],
							datasets: [
								{
									label: "สารกำจัดแมลง",
									backgroundColor: "#caf270",
									data: [7.18, 4.38, 3.59],
								},
								{
									label: "สารกำจัดวัชพืช",
									backgroundColor: "#45c490",
									data: [1.03, 0.77, 2.21],
								},
								{
									label: "สารกำจัดศัตรูพืชอื่น ๆ",
									backgroundColor: "#008d93",
									data: [2.56, 3.09, 3.31],
								},
							],
						},
						options: {
							tooltips: {
								displayColors: true,
								callbacks: {
									mode: "x",
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										gridLines: {
											display: false,
										},
									},
								],
								yAxes: [
									{
										stacked: true,
										ticks: {
											beginAtZero: true,
										},
										type: "linear",
									},
								],
							},
							responsive: true,
							maintainAspectRatio: false,
							legend: { position: "bottom" },
						},
					});
				}
				break;
			case "แพร่":
				if (praeChart.classList[1] === "open") {
					return;
				} else if (praeChart.classList[1] !== "open") {
					praeChart.classList.add("open");
					const sec3Prae = document
						.getElementById("sec3-prae__chart")
						.getContext("2d");
					const prChart = new Chart(sec3Prae, {
						type: "bar",
						data: {
							labels: ["2560", "2561", "2562"],
							datasets: [
								{
									label: "สารกำจัดแมลง",
									backgroundColor: "#caf270",
									data: [102.36, 5.72, 7.39],
								},
								{
									label: "สารกำจัดวัชพืช",
									backgroundColor: "#45c490",
									data: [7.23, 3.92, 6.16],
								},
								{
									label: "สารกำจัดศัตรูพืชอื่น ๆ",
									backgroundColor: "#008d93",
									data: [69.85, 3.92, 1.54],
								},
							],
						},
						options: {
							tooltips: {
								displayColors: true,
								callbacks: {
									mode: "x",
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										gridLines: {
											display: false,
										},
									},
								],
								yAxes: [
									{
										stacked: true,
										ticks: {
											beginAtZero: true,
										},
										type: "linear",
									},
								],
							},
							responsive: true,
							maintainAspectRatio: false,
							legend: { position: "bottom" },
						},
					});
				}
				break;
			case "ลำพูน":
				if (lamPoonChart.classList[1] === "open") {
					return;
				} else if (lamPoonChart.classList[1] !== "open") {
					lamPoonChart.classList.add("open");
					const sec3LamPoon = document
						.getElementById("sec3-lampoon__chart")
						.getContext("2d");
					const lpoChart = new Chart(sec3LamPoon, {
						type: "bar",
						data: {
							labels: ["2560", "2561", "2562"],
							datasets: [
								{
									label: "สารกำจัดแมลง",
									backgroundColor: "#caf270",
									data: [7.57, 10.27, 5.07],
								},
								{
									label: "สารกำจัดวัชพืช",
									backgroundColor: "#45c490",
									data: [7.57, 2.78, 5.64],
								},
								{
									label: "สารกำจัดศัตรูพืชอื่น ๆ",
									backgroundColor: "#008d93",
									data: [2.16, 5.83, 1.97],
								},
							],
						},
						options: {
							tooltips: {
								displayColors: true,
								callbacks: {
									mode: "x",
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										gridLines: {
											display: false,
										},
									},
								],
								yAxes: [
									{
										stacked: true,
										ticks: {
											beginAtZero: true,
										},
										type: "linear",
									},
								],
							},
							responsive: true,
							maintainAspectRatio: false,
							legend: { position: "bottom" },
						},
					});
				}
				break;
			case "ลำปาง":
				if (lamPangChart.classList[1] === "open") {
					return;
				} else if (lamPangChart.classList[1] !== "open") {
					lamPangChart.classList.add("open");
					const sec3LamPang = document
						.getElementById("sec3-lampang__chart")
						.getContext("2d");
					const lpaChart = new Chart(sec3LamPang, {
						type: "bar",
						data: {
							labels: ["2560", "2561", "2562"],
							datasets: [
								{
									label: "สารกำจัดแมลง",
									backgroundColor: "#caf270",
									data: [5.58, 33.21, 3.93],
								},
								{
									label: "สารกำจัดวัชพืช",
									backgroundColor: "#45c490",
									data: [5.4, 2.69, 4.12],
								},
								{
									label: "สารกำจัดศัตรูพืชอื่น ๆ",
									backgroundColor: "#008d93",
									data: [2.27, 3.59, 3.56],
								},
							],
						},
						options: {
							tooltips: {
								displayColors: true,
								callbacks: {
									mode: "x",
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										gridLines: {
											display: false,
										},
									},
								],
								yAxes: [
									{
										stacked: true,
										ticks: {
											beginAtZero: true,
										},
										type: "linear",
									},
								],
							},
							responsive: true,
							maintainAspectRatio: false,
							legend: { position: "bottom" },
						},
					});
				}
				break;
			case "น่าน":
				if (nanChart.classList[1] === "open") {
					return;
				} else if (nanChart.classList[1] !== "open") {
					nanChart.classList.add("open");
					const sec3Nan = document
						.getElementById("sec3-nan__chart")
						.getContext("2d");
					const nnChart = new Chart(sec3Nan, {
						type: "bar",
						data: {
							labels: ["2560", "2561", "2562"],
							datasets: [
								{
									label: "สารกำจัดแมลง",
									backgroundColor: "#caf270",
									data: [7.59, 6.37, 5.9],
								},
								{
									label: "สารกำจัดวัชพืช",
									backgroundColor: "#45c490",
									data: [8.14, 10.25, 6.46],
								},
								{
									label: "สารกำจัดศัตรูพืชอื่น ๆ",
									backgroundColor: "#008d93",
									data: [3.8, 3.32, 1.69],
								},
							],
						},
						options: {
							tooltips: {
								displayColors: true,
								callbacks: {
									mode: "x",
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										gridLines: {
											display: false,
										},
									},
								],
								yAxes: [
									{
										stacked: true,
										ticks: {
											beginAtZero: true,
										},
										type: "linear",
									},
								],
							},
							responsive: true,
							maintainAspectRatio: false,
							legend: { position: "bottom" },
						},
					});
				}
				break;
			case "แม่ฮ่องสอน":
				if (maeHongSornChart.classList[1] === "open") {
					return;
				} else if (maeHongSornChart.classList[1] !== "open") {
					maeHongSornChart.classList.add("open");
					const sec3MaeHongSorn = document
						.getElementById("sec3-maehongsorn__chart")
						.getContext("2d");
					const mhsChart = new Chart(sec3MaeHongSorn, {
						type: "bar",
						data: {
							labels: ["2560", "2561", "2562"],
							datasets: [
								{
									label: "สารกำจัดแมลง",
									backgroundColor: "#caf270",
									data: [11.67, 6.87, 8.77],
								},
								{
									label: "สารกำจัดวัชพืช",
									backgroundColor: "#45c490",
									data: [16.44, 9.52, 17.53],
								},
								{
									label: "สารกำจัดศัตรูพืชอื่น ๆ",
									backgroundColor: "#008d93",
									data: [4.77, 2.12, 4.38],
								},
							],
						},
						options: {
							tooltips: {
								displayColors: true,
								callbacks: {
									mode: "x",
								},
							},
							scales: {
								xAxes: [
									{
										stacked: true,
										gridLines: {
											display: false,
										},
									},
								],
								yAxes: [
									{
										stacked: true,
										ticks: {
											beginAtZero: true,
										},
										type: "linear",
									},
								],
							},
							responsive: true,
							maintainAspectRatio: false,
							legend: { position: "bottom" },
						},
					});
				}
				break;
			default:
				console.log("unexpected situation!!!!!");
		}
	});
}

// #TABLE
const paTable = document.getElementById("patients");

const paTableVal = new Dropdown({
	id: "select-year",
	val: "2562",
	data: ["2560", "2561", "2562"],
	cb: function (newVal) {
		switch (newVal) {
			case "2560":
				const pa2560 = [
					new ProvinceInfo("เชียงใหม่", "1,282,113", "322", "146", "143", "31"),
					new ProvinceInfo("เชียงราย", "922,099", "482", "130", "89", "263"),
					new ProvinceInfo("ลำพูน", "369,878", "64", "28", "28", "8"),
					new ProvinceInfo("ลำปาง", "573,881", "76", "32", "31", "13"),
					new ProvinceInfo("น่าน", "368,741", "72", "28", "30", "4"),
					new ProvinceInfo("แพร่", "332,150", "596", "340", "24", "232"),
					new ProvinceInfo("พะเยา", "390,209", "42", "28", "4", "10"),
					new ProvinceInfo("แม่ฮ่องสอน", "188,583", "62", "22", "31", "9"),
				];
				ProvinceInfo.tableRender();
				pa2560.forEach((item) => {
					item.insideRender();
				});
				break;
			case "2561":
				const pa2561 = [
					new ProvinceInfo("เชียงใหม่", "1,245,397", "186", "79", "66", "41"),
					new ProvinceInfo("เชียงราย", "911,253", "120", "46", "37", "37"),
					new ProvinceInfo("ลำพูน", "360,269", "68", "37", "10", "21"),
					new ProvinceInfo("ลำปาง", "557,029", "220", "185", "15", "20"),
					new ProvinceInfo("น่าน", "361,086", "72", "23", "37", "12"),
					new ProvinceInfo("แพร่", "331,954", "45", "19", "13", "13"),
					new ProvinceInfo("พะเยา", "388,082", "32", "17", "3", "12"),
					new ProvinceInfo("แม่ฮ่องสอน", "189,097", "35", "13", "18", "4"),
				];
				ProvinceInfo.tableRender();
				pa2561.forEach((item) => {
					item.insideRender();
				});

				break;
			case "2562":
				const pa2562 = [
					new ProvinceInfo("เชียงใหม่", "1,282,113", "207", "94", "72", "41"),
					new ProvinceInfo("เชียงราย", "922,099", "151", "33", "59", "59"),
					new ProvinceInfo("ลำพูน", "369,878", "45", "18", "20", "7"),
					new ProvinceInfo("ลำปาง", "573,881", "62", "21", "22", "19"),
					new ProvinceInfo("น่าน", "368,741", "50", "21", "23", "6"),
					new ProvinceInfo("แพร่", "332,150", "49", "24", "20", "5"),
					new ProvinceInfo("พะเยา", "390,209", "33", "13", "8", "12"),
					new ProvinceInfo("แม่ฮ่องสอน", "188,583", "56", "16", "32", "8"),
				];
				ProvinceInfo.tableRender();
				pa2562.forEach((item) => {
					item.insideRender();
				});
				break;
			default:
				console.log("error! new case detected");
		}
	},
});

class ProvinceInfo {
	constructor(province, population, all, insect, weed, others) {
		(this.province = province),
			(this.pop = population),
			(this.all = all),
			(this.ins = insect),
			(this.weed = weed),
			(this.oth = others);
	}

	static tableRender() {
		paTable.innerHTML = `
    <tr>
      <th>จังหวัด</th>
      <th class="pop">ประชากร</th>
      <th>ผู้ป่วยจากสารเคมีทั้งหมด (คน)</th>
      <th>สารกำจัดแมลง (คน)</th>
      <th>สารกำจัดวัชพืช (คน)</th>
      <th>สารอื่น ๆ (คน)</th>
    </tr>
    `;
	}

	insideRender() {
		const row = document.createElement("tr");
		row.innerHTML = `
      <td>${this.province}</td>
      <td>${this.pop}</td>
      <td>${this.all}</td>
      <td>${this.ins}</td>
      <td>${this.weed}</td>
      <td>${this.oth}</td>
    `;
		paTable.appendChild(row);
	}
}
// #CONTAMINANT#######################################
const provs = document.querySelectorAll(".prov");
const allProvs = document.querySelector(".prov-seals");
const infoBox = document.getElementById("con-info__box");
const infoText = document.querySelector(".con-info__text");
const imgBox = document.querySelector(".info-img");
// const current = allProvs.querySelector(".active");

provs.forEach((prov) => {
	prov.addEventListener("click", function (e) {
		const current = allProvs.querySelector(".active");
		if (current !== null) {
			current.className = current.className.replace("active", "");
			this.classList.add("active");
		} else {
			e.target.classList.add("active");
		}

		const txt = prov.children[1].innerHTML;
		let provDetail;
		switch (txt) {
			case "เชียงใหม่":
				ConInfo.clear();
				provDetail = [
					new ConInfo(
						"เชียงใหม่",
						"แม่น้ำปิง",
						"สะพานช่อแล บ.ช่อแล อ.แม่แตง จ.เชียงใหม่",
						"<0.01",
						"0.28",
						"chm"
					),
				];
				provDetail.forEach((sigleProv) => {
					sigleProv.render();
				});
				ConInfo.addImg("ping.png");

				break;
			case "เชียงราย":
				ConInfo.clear();

				provDetail = [
					new ConInfo(
						"เชียงราย",
						"แม่น้ำกก",
						"สะพานแม่น้ำกก อ.เชียงแสน จ.เชียงราย",
						"<0.02",
						"0.17",
						"chr"
					),
				];
				provDetail.forEach((sigleProv) => {
					sigleProv.render();
				});
				ConInfo.addImg("kok.png");

				break;
			case "น่าน":
				ConInfo.clear();
				//     infoText.innerHTML = `
				//         <p> แหล่งน้ำ: <mark class="mark-river">แม่น้ำน่าน</mark> <img src="./images/water.svg" class="water-emoji"> </p>
				// <p>บริเวณที่ตรวจสอบ: <mark class="mark-others">สะพานดอนศรีเสริม ต.ในเวียง อ.เมือง จ.น่าน</mark> </p>
				// <p>ผลการตรวจสอบตัวอย่างน้ำ: </p>
				// <p class="result">- Glyphosate (u/L): <mark class="mark-others"><1.00</mark></p>
				// <p class="result">- Paraquat (u/L): <mark class="mark-others"><1.00</mark> </p>
				// <p>ผลการตรวจสอบตะกอนดินท้องน้ำ: </p>
				// <p class="result">- Glyphosate (u/L): <mark class="mark-others"><0.02</mark></p>
				// <p class="result">- Paraquat (u/L): <mark class="mark-others">"0.49"</mark></p>
				// <p>ปีที่ตรวจสอบ: 2561</p>

				// `;
				provDetail = [
					new ConInfo(
						"น่าน",
						"แม่น้ำน่าน",
						"สะพานดอนศรีเสริม ต.ในเวียง อ.เมือง จ.น่าน",
						"<0.02",
						"0.49",
						"nan"
					),
					new ConInfo(
						"น่าน",
						"แม่น้ำน่าน",
						"จุดสูบน้ำแรงดันต่ำการประปาน่าน ต.ฝายแก้ว อ.ภูเพียง จ.น่าน",
						"<0.01",
						"0.38",
						"nan"
					),
					new ConInfo(
						"น่าน",
						"แม่น้ำน่าน",
						"จุดสูบน้ำการประปาท่าวังผา ต.ท่าวังผา อ.ท่าวังผา จ.น่าน",
						"<0.07",
						"0.9",
						"nan"
					),
				];
				provDetail.forEach((sigleProv) => {
					sigleProv.render();
				});
				ConInfo.addImg("nan.png");
				prov;
				prov.classList.toggle("active");

				break;
			case "พะเยา":
				ConInfo.clear();
				provDetail = new ConInfo(
					"พะเยา",
					"กว๊านพะเยา",
					"ปากแม่น้ำอิง บริเวณสะพานขุนเดช อ.เมือง จ.พะเยา",
					"<0.01",
					"0.09",
					"pay"
				);
				provDetail.render();
				ConInfo.addImg("payao.png");
				break;
			case "ลำปาง":
				ConInfo.clear();
				provDetail = new ConInfo(
					"ลำปาง",
					"แม่น้ำวัง",
					"จุดสูบน้ำดิบ การประปาสบปราบ บ.หล้าหลวง อ.สบปราบ จ.ลำปาง",
					"<0.01",
					"0.11",
					"lam"
				);
				provDetail.render();
				ConInfo.addImg("wang.png");
				break;
			default:
				console.log("none");
		}
	});
});

class ConInfo {
	constructor(province, river, area, soilG, soilP, boxClass) {
		(this.province = province),
			(this.river = river),
			(this.area = area),
			(this.water = ["<1.00", "<1.00"]),
			(this.soil = [soilG, soilP]),
			(this.year = "2561"),
			(this.boxClass = boxClass);
	}

	static clear() {
		infoText.innerHTML = ``;
	}

	render() {
		const detail = document.createElement("div");

		detail.className = "each-detail";
		detail.innerHTML = `
    <p> แหล่งน้ำ: <mark class="mark-river">${this.river}</mark> <img src="./images/wateryellow.svg" class="water-emoji"> </p> 
    <p>บริเวณที่ตรวจสอบ: <mark class="mark-others">${this.area}</mark> </p>
    <p>ผลการตรวจสอบตัวอย่างน้ำ: </p>
    <p class="result">- Glyphosate (u/L): <mark class="mark-others">${this.water[0]}</mark></p>
    <p class="result">- Paraquat (u/L): <mark class="mark-others">${this.water[1]}</mark> </p>
    <p>ผลการตรวจสอบตะกอนดินท้องน้ำ: </p>
    <p class="result">- Glyphosate (u/L): <mark class="mark-others">${this.soil[0]}</mark></p>
    <p class="result">- Paraquat (u/L): <mark class="mark-others">${this.soil[1]}</mark></p>
    <p>ปีที่ตรวจสอบ: ${this.year}</p>
    `;

		infoText.appendChild(detail);

		this.openClose();
	}

	static addImg(address) {
		imgBox.src = `./images/${address}`;
	}

	openClose() {
		const current = allProvs.querySelector(".active");

		if (infoBox.classList[1] === undefined) {
			infoBox.classList.add("open");
			infoBox.classList.add(this.boxClass);
		} else if (infoBox.classList[1] === this.boxClass) {
			infoBox.classList.remove(infoBox.classList[1]);
			infoBox.classList.remove("open");
			if (!infoBox.classList.contains("open")) {
				// alert("here");
				current.className = current.className.replace("active", "");
			}
		} else if (
			infoBox.classList[1] !== undefined &&
			infoBox.classList[1] !== this.boxClass
		) {
			infoBox.classList.add("open");
			infoBox.classList.remove(infoBox.classList[1]);
			infoBox.classList.add(this.boxClass);
		}
	}
}
