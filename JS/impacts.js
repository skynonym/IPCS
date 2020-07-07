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
    position: "right",
    offsetX: 0,
    offsetY: 50,
  },
};

const stackedChart = new ApexCharts(
  document.querySelector("#stackedCol"),
  stackedColOptions
);
stackedChart.render();

// #TABLE
const paTable = document.getElementById("patients");

const paTableVal = new Dropdown({
  id: "select-year",
  val: "2560",
  data: ["2560", "2561", "2562"],
  cb: function (newVal) {
    switch (newVal) {
      case "2560":
        const pa2560 = new ProvinceInfo(["1,282,113", "322"]);
        break;
      case "2561":
        break;
      case "2562":
        break;
      default:
        console.log("error! new case detected");
    }
  },
});

class ProvinceInfo {
  // constructor(population, all, insect, weed, others) {
  //   (this.pop = population),
  //     (this.all = all),
  //     (this.ins = insect),
  //     (this.weed = weed),
  //     (this.oth = others);
  // }
  constructor(chm, chr, lpo, lpa, nan, pra, pay, mae) {
    (this.chm = chm),
      (this.chr = chr),
      (this.lpo = lpo),
      (this.lpa = lpa),
      (this.nan = nan),
      (this.pra = pra),
      (this.pay = pay),
      (this.mae = mae);
  }
}

// #RESIDUE#######################################
const resTable = document.querySelector(".residue-table");
const seeResult = document.querySelector(".see-full-results");
const fullResult = document.querySelector(".full-results");

seeResult.addEventListener("click", () => {
  fullResult.classList.toggle("open");
});

const ResTableSelect = new Dropdown({
  id: "select-year--residue",
  val: "ปี ",
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
            ["ส้ม", "-"],
            ["พุทรา", "-"],
          ]
        );
        res2563.tableRender();
        break;
      default:
        console.log("new case detected");
    }
  },
});

class TableRender {
  render(veggies, fruits) {
    const resTable = document.querySelector(".residue-table");
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
      <th colspan="2">การพบสารตกค้าง</th>
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
}

// #CONTAMINANT#######################################
const provs = document.querySelectorAll(".prov");
const infoBox = document.getElementById("con-info__box");

provs.forEach((prov, index) => {
  prov.addEventListener("click", function (e) {
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
    infoBox.innerHTML = ``;
  }

  render() {
    const detail = document.createElement("div");
    detail.className = "each-detail";
    detail.innerHTML = `
    <p> แหล่งน้ำ: <mark class="mark-river">${this.river}</mark> </p> 
    <p>บริเวณที่ตรวจสอบ: <mark class="mark-others">${this.area}</mark> </p>
    <p>ผลการตรวจสอบตัวอย่างน้ำ: </p>
    <p class="result">- Glyphosate (u/L): <mark class="mark-others">${this.water[0]}</mark></p>
    <p class="result">- Paraquat (u/L): <mark class="mark-others">${this.water[1]}</mark> </p>
    <p>ผลการตรวจสอบตะกอนดินท้องน้ำ: </p>
    <p class="result">- Glyphosate (u/L): <mark class="mark-others">${this.soil[0]}</mark></p>
    <p class="result">- Paraquat (u/L): <mark class="mark-others">${this.soil[1]}</mark></p>
    <p>ปีที่ตรวจสอบ: ${this.year}</p>
    `;

    infoBox.appendChild(detail);
    this.openClose();
  }

  static addImg(address) {
    const imgBox = document.createElement("div");
    imgBox.innerHTML = `<img src="./images/${address}"/>`;
    infoBox.appendChild(imgBox);
  }

  openClose() {
    if (infoBox.classList[1] === undefined) {
      infoBox.classList.add("open");
      infoBox.classList.add(this.boxClass);
    } else if (infoBox.classList[1] === this.boxClass) {
      infoBox.classList.remove(infoBox.classList[1]);
      infoBox.classList.remove("open");
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