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
// *clustered stacked all
var sec3ClusteredStacked = document
  .getElementById("sec3-clusetered-stacked")
  .getContext("2d");
new Chart(sec3ClusteredStacked, {
  type: "bar",
  data: {
    labels: ["2560", "2561", "2562"],
    datasets: [
      {
        label: "การป่วยจากสารกำจัดแมลง",
        backgroundColor: "#ffa8c9",
        data: [65.18, 78.21, 46.06],
        stack: 1,
      },
      {
        label: "การป่วยจากสารกำจัดวัชพืช",
        backgroundColor: "#ff619e",
        data: [66.61, 39.29, 54.6],
        stack: 1,
      },
      {
        label: "การป่วยจากสารกำจัดศัตรูพืชอื่น ๆ",
        backgroundColor: "#a26cc2",
        data: [116.35, 29.22, 26.37],
        stack: 1,
      },
    ],
  },

  options: {
    legend: { position: "bottom" },
    scales: {
      xAxes: [
        {
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: "ปี",
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
          },
        },
      ],
    },
  },
});
// *insects-------------------------------------
const sec3Insectoptions = {
  series: [
    {
      name: "เชียงใหม่",
      data: [2.42, 3.92, 3.38],
    },
    {
      name: "เชียงราย",
      data: [28.52, 4.06, 6.54],
    },
    {
      name: "พะเยา",
      data: [2.56, 3.09, 3.31],
    },
    {
      name: "แพร่",
      data: [69.85, 3.92, 1.54],
    },
    {
      name: "ลำพูน",
      data: [2.16, 5.83, 1.97],
    },
    {
      name: "ลำปาง",
      data: [2.27, 3.59, 3.56],
    },
    {
      name: "น่าน",
      data: [3.8, 3.32, 1.69],
    },
    {
      name: "แม่ฮ่องสอน",
      data: [4.77, 2.12, 4.38],
    },
  ],
  title: {
    text: "การป่วยจากสารกำจัดแมลง",
    align: "left",
  },
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
      text: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
    },
    tickAmount: 5,
    max: 70,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetX: -5,
  },
};

const sec3InsectChart = new ApexCharts(
  document.querySelector("#sec3-insect__chart"),
  sec3Insectoptions
);
sec3InsectChart.render();

// *herbs
const sec3Herboptions = {
  series: [
    {
      name: "เชียงใหม่",
      data: [11.15, 5.3, 5.94],
    },
    {
      name: "เชียงราย",
      data: [9.65, 4.06, 6.54],
    },
    {
      name: "พะเยา",
      data: [1.03, 0.77, 2.21],
    },
    {
      name: "แพร่",
      data: [7.23, 3.92, 6.61],
    },
    {
      name: "ลำพูน",
      data: [7.57, 2.78, 5.64],
    },
    {
      name: "ลำปาง",
      data: [5.4, 2.69, 4.12],
    },
    {
      name: "น่าน",
      data: [8.14, 10.25, 6.64],
    },
    {
      name: "แม่ฮ่องสอน",
      data: [16.44, 9.52, 17.53],
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
    text: "การป่วยจากสารกำจัดวัชพืช",
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
      text: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
    },
    tickAmount: 5,
    max: 20,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetX: -5,
  },
};

const sec3HerbChart = new ApexCharts(
  document.querySelector("#sec3-herb__chart"),
  sec3Herboptions
);
sec3HerbChart.render();

// *other
const sec3Otheroptions = {
  series: [
    {
      name: "เชียงใหม่",
      data: [11.39, 6.35, 7.75],
    },
    {
      name: "เชียงราย",
      data: [14.1, 5.05, 3.66],
    },
    {
      name: "พะเยา",
      data: [7.18, 4.38, 3.59],
    },
    {
      name: "แพร่",
      data: [102.35, 5.72, 7.39],
    },
    {
      name: "ลำพูน",
      data: [7.57, 10.27, 5.07],
    },
    {
      name: "ลำปาง",
      data: [5.58, 33.21, 3.93],
    },
    {
      name: "น่าน",
      data: [7.59, 6.37, 5.9],
    },
    {
      name: "แม่ฮ่องสอน",
      data: [11.67, 6.87, 8.77],
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
    text: "การป่วยจากสารกำจัดศัตรูพืชอื่น ๆ",
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
      text: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
    },
    tickAmount: 5,
    max: 105,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetX: -5,
  },
};

const sec3OtherChart = new ApexCharts(
  document.querySelector("#sec3-other__chart"),
  sec3Otheroptions
);
sec3OtherChart.render();

// @active class
const secThreeOpt = document.querySelectorAll(".sec3-opt");
const sec3AllWrapper = document.querySelector(".sec3-wrapper--all");
const secThreeOptContainer = document.querySelector(".option__container");

const allChart = document.getElementById("sec3-all");
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
    const current = secThreeOptContainer.querySelector(".active");
    current.className = current.className.replace("active", "");
    this.className = "active";

    // *showing/hiding charts
    const openItem = sec3AllWrapper.querySelector(".open");
    openItem.className = openItem.className.replace("open", "");

    const text = e.target.innerHTML;
    switch (text) {
      case "ภาพรวม":
        if (allChart.classList[1] === "open") {
          return;
        } else {
          allChart.classList.add("open");
        }

        break;
      case "เชียงใหม่":
        if (chiangMaiChart.classList[1] === "open") {
          return;
        } else {
          chiangMaiChart.classList.add("open");
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
                    scaleLabel: {
                      display: true,
                      labelString: "ปี",
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
                    scaleLabel: {
                      display: true,
                      labelString: "จำนวนผู้ป่วยต่อ 100,000 ประชากร",
                    },
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
          new ProvinceInfo("เชียงใหม่", "1,212,472", "207", "94", "72", "41"),
          new ProvinceInfo("เชียงราย", "902,676", "151", "33", "59", "59"),
          new ProvinceInfo("ลำพูน", "354,923", "45", "18", "20", "7"),
          new ProvinceInfo("ลำปาง", "534,116", "62", "21", "22", "19"),
          new ProvinceInfo("น่าน", "355,972", "50", "21", "23", "6"),
          new ProvinceInfo("แพร่", "324,545", "49", "24", "20", "5"),
          new ProvinceInfo("พะเยา", "362,016", "33", "13", "8", "12"),
          new ProvinceInfo("แม่ฮ่องสอน", "182,499", "56", "16", "32", "8"),
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
// const provs = document.querySelectorAll(".prov");
// const allProvs = document.querySelector(".prov-seals");
// const infoBox = document.getElementById("con-info__box");
// const infoText = document.querySelector(".con-info__text");
// const imgBox = document.querySelector(".info-img__container");
// // const current = allProvs.querySelector(".active");

// const pingRiverMap = document.getElementById("pingriver");
// const kokRiverMap = document.getElementById("kokriver");
// const nanRiverMap = document.getElementById("nanriver");
// const kwanPhayaoRiverMap = document.getElementById("kwanphayaoriver");
// const wangRiverMap = document.getElementById("wangriver");

// provs.forEach((prov) => {
//   prov.addEventListener("click", function (e) {
//     const current = allProvs.querySelector(".active");
//     if (current !== null) {
//       current.className = current.className.replace("active", "");
//       this.classList.add("active");
//     } else {
//       e.target.classList.add("active");
//     }

//     if (e.target.innerHTML.indexOf("เชียงใหม่") !== -1) {
//       pingRiverMap.style.display = "inline-block";
//       kokRiverMap.style.display = "none";
//       nanRiverMap.style.display = "none";
//       kwanPhayaoRiverMap.style.display = "none";
//       wangRiverMap.style.display = "none";
//     } else if (e.target.innerHTML.indexOf("เชียงราย") !== -1) {
//       pingRiverMap.style.display = "none";
//       kokRiverMap.style.display = "inline-block";
//       nanRiverMap.style.display = "none";
//       kwanPhayaoRiverMap.style.display = "none";
//       wangRiverMap.style.display = "none";
//     } else if (e.target.innerHTML.indexOf("น่าน") !== -1) {
//       pingRiverMap.style.display = "none";
//       kokRiverMap.style.display = "none";
//       nanRiverMap.style.display = "inline-block";
//       kwanPhayaoRiverMap.style.display = "none";
//       wangRiverMap.style.display = "none";
//     } else if (e.target.innerHTML.indexOf("พะเยา") !== -1) {
//       pingRiverMap.style.display = "none";
//       kokRiverMap.style.display = "none";
//       nanRiverMap.style.display = "none";
//       kwanPhayaoRiverMap.style.display = "inline-block";
//       wangRiverMap.style.display = "none";
//     } else if (e.target.innerHTML.indexOf("ลำปาง") !== -1) {
//       pingRiverMap.style.display = "none";
//       kokRiverMap.style.display = "none";
//       nanRiverMap.style.display = "none";
//       kwanPhayaoRiverMap.style.display = "none";
//       wangRiverMap.style.display = "inline-block";
//     } else if (e.target.innerHTML.indexOf("ลำพูน") !== -1) {
//       pingRiverMap.style.display = "none";
//       kokRiverMap.style.display = "none";
//       nanRiverMap.style.display = "none";
//       kwanPhayaoRiverMap.style.display = "none";
//       wangRiverMap.style.display = "none";
//     } else {
//       return;
//     }
//     const txt = prov.children[1].innerHTML;
//     let provDetail;
//     switch (txt) {
//       case "เชียงใหม่":
//         const contamChiangmai = new Dropdown({
//           id: "select-contam",
//           val: "ปี 2561",
//           data: ["ปี 2561"],
//         });
//         ConInfo.clear();
//         provDetail = [
//           new ConInfo(
//             "2561",
//             "แม่น้ำปิง",
//             "กรมควบคุมมลพิษ",
//             `
//             <p class="substance"><mark>สารพาราควอต</mark></p>
//               <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจสอบสารพาราควอตที่ความเข้มข้น <mark>\< 1.00 µ/L</p>
//               <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.28 มก./กก.</mark></p>
//             <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//               <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark> 1.00 µ/L</mark></p>
//               <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark> 0.01 มก./กก.</mark></p>
//             `
//           ),
//         ];
//         provDetail.forEach((sigleProv) => {
//           sigleProv.render();
//         });

//         break;
//       case "เชียงราย":
//         const contamChiangrai = new Dropdown({
//           id: "select-contam",
//           val: "ปี 2560",
//           data: ["ปี 2560", "ปี 2561"],
//           cb: function (newVal) {
//             switch (newVal) {
//               case "ปี 2560":
//                 ConInfo.clear();

//                 provDetail = [
//                   new ConInfo(
//                     "2560",
//                     "แม่น้ำกก",
//                     "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//                     `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: ร้อยละ 80 ของตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.02 - 0.4 มก./กก</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 12 ตัวอย่าง ตรวจพบสารพาราควอต 4 ตัวอย่าง ที่ความเข้มข้น <mark>0.02 - 0.13  มก./กก.</mark></p>
//                     `,
//                     "kok-river"
//                   ),
//                 ];
//                 provDetail.forEach((sigleProv) => {
//                   sigleProv.render();
//                 });

//                 break;
//               case "ปี 2561":
//                 ConInfo.clear();

//                 provDetail = [
//                   new ConInfo(
//                     "2561",
//                     "แม่น้ำกก",
//                     "กรมควบคุมมลพิษ",
//                     `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบพาราควอตที่ความเข้มข้น <mark>0.17 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซต ที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.02 มก./กก.</mark></p>
//                     `,
//                     "kok-river"
//                   ),
//                 ];
//                 provDetail.forEach((sigleProv) => {
//                   sigleProv.render();
//                 });
//                 break;
//             }
//           },
//         });
//         ConInfo.clear();

//         provDetail = [
//           new ConInfo(
//             "2560",
//             "แม่น้ำกก",
//             "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//             `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: ร้อยละ 80 ของตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.02 - 0.4 มก./กก</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 12 ตัวอย่าง ตรวจพบสารพาราควอต 4 ตัวอย่าง ที่ความเข้มข้น <mark>0.02 - 0.13  มก./กก.</mark></p>
//                     `,
//             "kok-river"
//           ),
//         ];
//         provDetail.forEach((sigleProv) => {
//           sigleProv.render();
//         });

//         break;
//       case "น่าน":
//         const contamNan = new Dropdown({
//           id: "select-contam",
//           val: "ปี 2558",
//           data: ["ปี 2558", "ปี 2561", "ปี 2562"],
//           cb: function (newVal) {
//             switch (newVal) {
//               case "ปี 2558":
//                 ConInfo.clear();
//                 provDetail = [
//                   new ConInfo(
//                     "2558",
//                     "แม่น้ำน่าน",
//                     "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//                     `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 4 ตัวอย่าง ทุกตัวอย่างตรวจพบสารพาราควอต ในระดับความเข้มข้น <mark>0.14 - 5.19 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 4 ตัวอย่าง ตรวจพบสารไกลโฟเซต 3 ตัวอย่าง ที่ความเข้มข้น <mark>0.03 - 0.05  มก./กก.</mark></p>
//                     `
//                   ),
//                 ];
//                 provDetail.forEach((sigleProv) => {
//                   sigleProv.render();
//                 });
//                 break;
//               case "ปี 2561":
//                 ConInfo.clear();
//                 provDetail = [
//                   new ConInfo(
//                     "2561",
//                     "แม่น้ำน่าน",
//                     "กรมควบคุมมลพิษ",
//                     `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารพาราควอต ที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้นระหว่าง <mark>0.38 - 0.90 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 3 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้นระหว่าง 0.01 - 0.07 มก./กก.</mark></p>
//                     `
//                   ),
//                 ];
//                 provDetail.forEach((sigleProv) => {
//                   sigleProv.render();
//                 });
//                 break;
//               case "ปี 2562":
//                 ConInfo.clear();
//                 provDetail = [
//                   new ConInfo(
//                     "2562",
//                     "แม่น้ำน่าน",
//                     "กรมควบคุมมลพิษ",
//                     `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ทุกตัวอย่างตรวจพบสารพาราควอตที่ความเข้มข้นระหว่าง <mark> 0.03 - 8.6 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้นระหว่าง <mark> 0.01 - 0.45 มก./กก.</mark></p>
//                     <p class="substance"><mark>คลอร์ไพริฟอส</mark></p>
//                       <p class="samples">ตัวอย่างดิน: จำนวน 20 ตัวอย่าง ตรวจพบสารคลอร์ไพริฟอสที่ความเข้มข้นระหว่าง <mark> 0.01 - 0.02 มก./กก.</mark></p>
//                     `
//                   ),
//                 ];
//                 provDetail.forEach((sigleProv) => {
//                   sigleProv.render();
//                 });
//                 break;
//             }
//           },
//         });
//         ConInfo.clear();
//         provDetail = [
//           new ConInfo(
//             "2558",
//             "แม่น้ำน่าน",
//             "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//             `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 4 ตัวอย่าง ทุกตัวอย่างตรวจพบสารพาราควอต ในระดับความเข้มข้น <mark>0.14 - 5.19 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 4 ตัวอย่าง ตรวจพบสารไกลโฟเซต 3 ตัวอย่าง ที่ความเข้มข้น <mark>0.03 - 0.05  มก./กก.</mark></p>
//                     `
//           ),
//         ];
//         provDetail.forEach((sigleProv) => {
//           sigleProv.render();
//         });

//         break;
//       case "พะเยา":
//         const contamPayao = new Dropdown({
//           id: "select-contam",
//           val: "ปี 2561",
//           data: ["ปี 2561"],
//         });

//         ConInfo.clear();
//         provDetail = new ConInfo(
//           "2561",
//           "กว๊านพะเยา",
//           "กรมควบคุมมลพิษ",
//           `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.09 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.01 มก./กก.</mark></p>
//                     `
//         );
//         provDetail.render();
//         break;
//       case "ลำปาง":
//         const contamLampang = new Dropdown({
//           id: "select-contam",
//           val: "ปี 2559",
//           data: ["ปี 2559", "ปี 2561"],
//           cb: function (newVal) {
//             switch (newVal) {
//               case "ปี 2559":
//                 ConInfo.clear();
//                 provDetail = new ConInfo(
//                   "2559",
//                   "แม่น้ำวัง",
//                   "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//                   `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 22 ตัวอย่าง มากกว่าร้อยละ 80 ตรวจพบสารพาราควอต ในระดับความเข้มข้น <mark>0.02 - 1.4 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารคลอร์ไพริฟอส</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: ตรวจพบสารคลอร์ไพริฟอสในระดับความเข้มข้น <mark>0.11 - 1.83 มก.</mark></p>
//                     `
//                 );
//                 provDetail.render();

//                 break;
//               case "ปี 2561":
//                 ConInfo.clear();
//                 provDetail = new ConInfo(
//                   "2559",
//                   "แม่น้ำวัง",
//                   "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//                   `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <marl>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารพาราควอตที่ความเข้มข้น <mark>0.11 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 1.00 µ/L</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>\< 0.01 มก./กก.</mark></p>
//                     `
//                 );
//                 provDetail.render();

//                 break;
//             }
//           },
//         });

//         ConInfo.clear();
//         provDetail = new ConInfo(
//           "2559",
//           "แม่น้ำวัง",
//           "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//           `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 22 ตัวอย่าง มากกว่าร้อยละ 80 ตรวจพบสารพาราควอต ในระดับความเข้มข้น <mark>0.02 - 1.4 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารคลอร์ไพริฟอส</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: ตรวจพบสารคลอร์ไพริฟอสในระดับความเข้มข้น <mark>0.11 - 1.83 มก.</mark></p>
//                     `
//         );
//         provDetail.render();
//         break;

//       case "ลำพูน":
//         const contamLampoon = new Dropdown({
//           id: "select-contam",
//           val: "ปี 2559",
//           data: ["ปี 2559"],
//         });

//         ConInfo.clear();
//         provDetail = new ConInfo(
//           "2559",
//           "แม่น้ำวัง",
//           "กรมส่งเสริมคุณภาพสิ่งแวดล้อม",
//           `
//                     <p class="substance"><mark>สารพาราควอต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 11 ตัวอย่าง มากกว่าร้อยละ 80 ตรวจพบสารพาราควอตในระดับความเข้มข้น <mark> 0.02 - 2.5 มก./กก.</mark></p>
//                     <p class="substance"><mark>สารไกลโฟเซต</mark></p>
//                       <p class="samples">ตัวอย่างดินตะกอนท้องน้ำ: จำนวน 11 ตัวอย่าง โดยมี 1 ตัวอย่าง ตรวจพบสารไกลโฟเซตที่ความเข้มข้น <mark>0.04 มก./กก.</mark></p>
//                     `
//         );
//         provDetail.render();
//         break;
//       default:
//         console.log("none");
//     }
//   });
// });

// class ConInfo {
//   constructor(year, river, source, detail, mapId) {
//     this.year = year;
//     this.river = river;
//     this.detail = detail;
//     this.source = source;
//     this.mapId = mapId;
//   }
//   static clear() {
//     infoText.innerHTML = ``;
//     // imgBox.innerHTML = ``;
//   }

//   render() {
//     const detail = document.createElement("div");
//     detail.className = "contam-detail";
//     detail.innerHTML = `
//     <h3 class="contam-river"><b>แหล่งน้ำ</b>: ${this.river}</h3>
//     <h3 class="contam-year"><b>ปีที่ตรวจสอบ</b>: ปี ${this.year}</h3>
//     <h3 class="contam-result"><b>ผลการตรวจสอบ</b>: ${this.detail}</h3>
//     <h3 class="source"><b>ที่มา</b>: ${this.source} <p>
//     `;

//     infoText.appendChild(detail);

//     this.openClose();
//   }

//   openClose() {
//     const current = allProvs.querySelector(".active");

//     if (infoBox.classList[1] === undefined) {
//       infoBox.classList.add("open");
//       infoBox.classList.add(this.boxClass);
//     } else if (infoBox.classList[1] === this.boxClass) {
//       infoBox.classList.remove(infoBox.classList[1]);
//       infoBox.classList.remove("open");
//       if (!infoBox.classList.contains("open")) {
//         current.className = current.className.replace("active", "");
//       }
//     } else if (
//       infoBox.classList[1] !== undefined &&
//       infoBox.classList[1] !== this.boxClass
//     ) {
//       infoBox.classList.add("open");
//       infoBox.classList.remove(infoBox.classList[1]);
//       infoBox.classList.add(this.boxClass);
//     }
//   }
// }
// class ConInfo {
//   constructor(province, river, area, soilG, soilP, boxClass) {
//     (this.province = province),
//       (this.river = river),
//       (this.area = area),
//       (this.water = ["<1.00", "<1.00"]),
//       (this.soil = [soilG, soilP]),
//       (this.year = "2561"),
//       (this.boxClass = boxClass);
//   }

//   static clear() {
//     infoText.innerHTML = ``;
//   }

//   render() {
//     const detail = document.createElement("div");

//     detail.className = "each-detail";
//     detail.innerHTML = `
//     <p> แหล่งน้ำ: <mark class="mark-river">${this.river}</mark> <img src="./images/wateryellow.svg" class="water-emoji"> </p>
//     <p>บริเวณที่ตรวจสอบ: <mark class="mark-others">${this.area}</mark> </p>
//     <p>ผลการตรวจสอบตัวอย่างน้ำ: </p>
//     <p class="result">- Glyphosate (u/L): <mark class="mark-others">${this.water[0]}</mark></p>
//     <p class="result">- Paraquat (u/L): <mark class="mark-others">${this.water[1]}</mark> </p>
//     <p>ผลการตรวจสอบตะกอนดินท้องน้ำ: </p>
//     <p class="result">- Glyphosate (u/L): <mark class="mark-others">${this.soil[0]}</mark></p>
//     <p class="result">- Paraquat (u/L): <mark class="mark-others">${this.soil[1]}</mark></p>
//     <p>ปีที่ตรวจสอบ: ${this.year}</p>
//     `;

//     infoText.appendChild(detail);

//     this.openClose();
//   }

//   static addImg(address) {
//     imgBox.src = `./images/${address}`;
//   }

//   openClose() {
//     const current = allProvs.querySelector(".active");

//     if (infoBox.classList[1] === undefined) {
//       infoBox.classList.add("open");
//       infoBox.classList.add(this.boxClass);
//     } else if (infoBox.classList[1] === this.boxClass) {
//       infoBox.classList.remove(infoBox.classList[1]);
//       infoBox.classList.remove("open");
//       if (!infoBox.classList.contains("open")) {
//         current.className = current.className.replace("active", "");
//       }
//     } else if (
//       infoBox.classList[1] !== undefined &&
//       infoBox.classList[1] !== this.boxClass
//     ) {
//       infoBox.classList.add("open");
//       infoBox.classList.remove(infoBox.classList[1]);
//       infoBox.classList.add(this.boxClass);
//     }
//   }
// }
