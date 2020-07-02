const pieCon = document.querySelector(".only-pie");
const pieInfoCon = document.getElementById("info");
const pieClickMe = document.querySelector(".click-pie");
const colCon = document.querySelector(".onlyColumn");
const colInfoCon = document.getElementById("info-types");
const colClickMe = document.querySelector(".click-bar");

// #PIE CHART
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["กลุ่มสารเคมี", "ตัน"],
    ["Organophosphate & Carbamate", 195.39],
    ["Herbicides", 3634.42],
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
        "",
        "สารเคมีสำหรับกำจัดแมลง",
        "",
        "195.39 ตัน",
        "ตัวอย่างสารเคมีในกลุ่มนี้ : คลอร์ไพริฟอส (chlorpyrifos)"
      );
    } else {
      info = new AllInfo(
        "Herbicides",
        "",
        "สารเคมีกำจัดวัชพืช",
        "",
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

function drawStuff() {
  const numbers = {
    paraquat: 2022.94,
    glyphosate: 1611.48,
    chlorpyrifos: 195.39,
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
    ["พาราควอต", 52.82, "#9AE2E4"],
    ["ไกลโฟเซต", 42.08, "#404B4B"],
    ["คลอร์ไพริพอส", 5.1, "#CECECE"],
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
      info = new AllInfo("พาราควอต (Paraquat)", "", "", "", "2022.94 ตัน", "");
    } else if (selectedItem.row === 1) {
      info = new AllInfo(
        "ไกลโฟเซต (Glyphosate)",
        "",
        "",
        "",
        "1611.48 ตัน",
        ""
      );
    } else {
      info = new AllInfo(
        "คลอร์ไพริพอส (Chlorpyrifos)",
        "",
        "",
        "",
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
  constructor(title, img, desc, cons, amount, ex) {
    (this.title = title),
      (this.img = img),
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
  <p>ผลข้างเคียง: ${this.info.cons}</p>
  <p>ในเขตสุขภาพที่ 1 มีการครอบครองสารกลุ่มนี้ ${this.info.amount}</p>
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

// // *MEDIA QUERIES
// const pieLong = () => {
//   pieInfoCon.style.pointerEvents = "all";
//   pieInfoCon.style.width = "100%";
//   pieInfoCon.style.borderRadius = "0px";
//   pieCon.style.transform = "translateX(0%)";
//   pieClickMe.style.display = "none";
// };

// const pieShort = () => {
//   pieInfoCon.style.width = "40%";
//   pieInfoCon.style.borderRadius = "10px";
//   pieInfoCon.style.pointerEvents = "all";
//   pieCon.style.transform = "translateX(20%)";
//   pieClickMe.style.display = "none";
// };

// const colLong = () => {
//   colInfoCon.style.pointerEvents = "all";
//   colInfoCon.style.width = "100%";
//   colInfoCon.style.borderRadius = "0px";
//   colCon.style.transform = "translateX(0%)";
//   colClickMe.style.display = "none";
// };

// const colShort = () => {
//   colInfoCon.style.width = "40%";
//   colInfoCon.style.borderRadius = "10px";
//   colInfoCon.style.pointerEvents = "all";
//   colCon.style.transform = "translateX(20%)";
//   pieCon.style.transform = "translateX(20%)";
//   colClickMe.style.display = "none";
// };

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
  // if (
  //   innerWidth < 800 &&
  //   pieInfoCon.style.opacity === "1" &&
  //   colInfoCon.style.opacity === "1"
  // ) {
  //   console.log("condition 1.1");
  //   pieLong();
  //   colLong();
  // } else if (
  //   innerWidth < 800 &&
  //   pieInfoCon.style.opacity === "1" &&
  //   colInfoCon.style.opacity === "0"
  // ) {
  //   console.log("condition 1.2");
  //   pieLong();
  // } else if (
  //   innerWidth < 800 &&
  //   pieInfoCon.style.opacity === "0" &&
  //   colInfoCon.style.opacity === "1"
  // ) {
  //   console.log("condition 1.3");
  //   colLong();
  // } else if (
  //   innerWidth > 800 &&
  //   pieInfoCon.style.opacity === "1" &&
  //   colInfoCon.style.opacity === "1"
  // ) {
  //   console.log("condition 2.1");
  //   pieShort();
  //   colShort();
  // } else if (
  //   innerWidth > 800 &&
  //   pieInfoCon.style.opacity === "1" &&
  //   colInfoCon.style.opacity === "0"
  // ) {
  //   console.log("condition 2.2");
  //   pieShort();
  // } else if (
  //   innerWidth > 800 &&
  //   pieInfoCon.style.opacity === "0" &&
  //   colInfoCon.style.opacity === "1"
  // ) {
  //   console.log("condition 2.3");
  //   colShort();
  // } else {
  //   console.log("bye");
  //   console.log("bye");
  //   return;
  // }
};

addEventListener("DOMContentLoaded", DOMquery);
addEventListener("resize", DOMquery);
