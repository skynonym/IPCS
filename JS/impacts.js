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
const paTableVal = new Dropdown({
  id: "select-year",
  val: "2560",
  data: ["2560", "2561", "2562"],
  cb: function (newVal) {
    if (newVal === "2560") console.log("It's 2560");
    else console.log("not 2560");
  },
});

class ProvinceData {
  constructor(population, all, insect, weed, others) {
    (this.pop = population),
      (this.all = all),
      (this.ins = insect),
      (this.weed = weed),
      (this.oth = others);
  }
}

// #Contaminant
const provs = document.querySelectorAll(".prov");
const infoBox = document.getElementById("con-info__box");

provs.forEach((prov) => {
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
            "สะพานช่อแล บ.ชาแล อ.แม่แตง จ.เชียงใหม่",
            "<0.01",
            "0.28"
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
            "0.17"
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
            "0.49"
          ),
          new ConInfo(
            "น่าน",
            "แม่น้ำน่าน",
            "จุดสูบน้ำแรงดันต่ำการประปาน่าน ต.ฝายแก้ว อ.ภูเพียง จ.น่าน",
            "<0.01",
            "0.38"
          ),
          new ConInfo(
            "น่าน",
            "แม่น้ำน่าน",
            "จุดสูบน้ำการประปาท่าวังผา ต.ท่าวังผา อ.ท่าวังผา จ.น่าน",
            "<0.07",
            "0.9"
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
          "0.09"
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
          "0.11"
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
  constructor(province, river, area, soilG, soilP, img) {
    (this.province = province),
      (this.river = river),
      (this.area = area),
      (this.water = ["<1.00", "<1.00"]),
      (this.soil = [soilG, soilP]),
      (this.year = "2561");
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
  }

  static addImg(address) {
    const imgBox = document.createElement("div");
    imgBox.innerHTML = `<img src="./images/${address}"/>`;
    infoBox.appendChild(imgBox);
  }

  openClose() {}
}
