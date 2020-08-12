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

// #SECTION3-----------------------------------------------------------------------
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
          new ProvinceInfo(
            "เชียงใหม่",
            "1,282,113",
            "25.11",
            "11.39",
            "11.15",
            "2.42"
          ),
          new ProvinceInfo(
            "เชียงราย",
            "922,099",
            "52.27",
            "14.10",
            "9.65",
            "28.52"
          ),
          new ProvinceInfo("ลำพูน", "369,878", "17.3", "7.57", "7.57", "2.16"),
          new ProvinceInfo("ลำปาง", "573,881", "13.24", "5.58", "5.4", "2.27"),
          new ProvinceInfo("น่าน", "368,741", "19.53", "7.59", "8.14", "3.8"),
          new ProvinceInfo("แพร่", "332,150", "0.18", "0.10", "7.23", "69.85"),
          new ProvinceInfo("พะเยา", "390,209", "10.76", "7.18", "1.03", "2.56"),
          new ProvinceInfo(
            "แม่ฮ่องสอน",
            "188,583",
            "32.88",
            "11.67",
            "16.44",
            "4.77"
          ),
        ];
        ProvinceInfo.tableRender();
        pa2560.forEach((item) => {
          item.insideRender();
        });
        break;
      case "2561":
        const pa2561 = [
          new ProvinceInfo(
            "เชียงใหม่",
            "1,245,397",
            "14.93",
            "6.34",
            "5.3",
            "3.29"
          ),
          new ProvinceInfo(
            "เชียงราย",
            "911,253",
            "13.17",
            "14.10",
            "5.05",
            "4.06"
          ),
          new ProvinceInfo(
            "ลำพูน",
            "360,269",
            "18.87",
            "10.27",
            "2.78",
            "5.83"
          ),
          new ProvinceInfo(
            "ลำปาง",
            "557,029",
            "39.50",
            "33.21",
            "2.69",
            "3.59"
          ),
          new ProvinceInfo("น่าน", "361,086", "19.94", "6.37", "10.25", "3.32"),
          new ProvinceInfo("แพร่", "331,954", "13.56", "5.72", "3.92", "3.92"),
          new ProvinceInfo("พะเยา", "388,082", "8.25", "4.38", "0.77", "3.09"),
          new ProvinceInfo(
            "แม่ฮ่องสอน",
            "189,097",
            "18.51",
            "6.87",
            "9.52",
            "2.12"
          ),
        ];
        ProvinceInfo.tableRender();
        pa2561.forEach((item) => {
          item.insideRender();
        });

        break;
      case "2562":
        const pa2562 = [
          new ProvinceInfo(
            "เชียงใหม่",
            "1,212,472",
            "17.07",
            "3.38",
            "5.3",
            "3.29"
          ),
          new ProvinceInfo(
            "เชียงราย",
            "902,676",
            "16.73",
            "3.66",
            "6.54",
            "6.54"
          ),
          new ProvinceInfo("ลำพูน", "354,923", "12.68", "5.07", "5.64", "1.97"),
          new ProvinceInfo("ลำปาง", "534,116", "11.61", "3.93", "4.12", "3.56"),
          new ProvinceInfo("น่าน", "355,972", "14.05", "5.90", "6.46", "1.69"),
          new ProvinceInfo("แพร่", "324,545", "15.10", "7.39", "6.16", "1.54"),
          new ProvinceInfo("พะเยา", "362,016", "9.12", "3.59", "2.21", "3.31"),
          new ProvinceInfo(
            "แม่ฮ่องสอน",
            "182,499",
            "30.69",
            "8.77",
            "17.53",
            "4.38"
          ),
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
      <th>ผู้ป่วยจากสารเคมีทั้งหมด (%)</th>
      <th>สารกำจัดแมลง (%)</th>
      <th>สารกำจัดวัชพืช (%)</th>
      <th>สารอื่น ๆ (%)</th>
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
    // const current = allProvs.querySelector(".active");
    // if (current !== null) {
    //   current.className = current.className.replace("active", "");
    //   this.classList.add("active");
    // } else {
    //   e.target.classList.add("active");
    // }

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
    infoText.innerHTML = ``;
  }

  render() {
    const detail = document.createElement("div");

    detail.className = "each-detail";
    detail.innerHTML = `
    <p> แหล่งน้ำ: <mark class="mark-river">${this.river}</mark> <img src="./images/water.svg" class="water-emoji"> </p> 
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
      // if (!infoBox.classList.contains("open")) {
      //   alert("here");
      //   current.className = current.className.replace("active", "");
      // }
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