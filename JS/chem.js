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
  val: "ภาพรวมปี 2563",
  data: [
    "ภาพรวมปี 2563",
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
      case "ภาพรวมปี 2563":
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
    drawChart(para, glyp, chlo);
    drawStuff(para, glyp, chlo);
  },
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(para = 2022.94, glyp = 1611.48, chlo = 195.39) {
  const data = google.visualization.arrayToDataTable([
    ["กลุ่มสารเคมี", "ตัน"],
    ["พาราควอต", para],
    ["ไกลโฟเซต", glyp],
    ["คลอร์ไพริพอส", chlo],
  ]);

  const options = {
    colors: ["#ffc302", "#0f979b", "#7b7b7b"],
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
