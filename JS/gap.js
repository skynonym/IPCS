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
      text: "จำนวนแหล่งผลิต GAP (ไร่)",
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

// #EACH PROVINCE
const GAPOpt = document.querySelectorAll(".GAP-opt");
const GAPAllWrapper = document.querySelector(".GAP-wrapper--all");

// @CHARTS
// *chiangmai
new Chart(document.getElementById("GAP-chiangmai-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP ในจังหวัดเชียงใหม่",
        data: [33363, 41397, 43081, 39741, 38256, 36352],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// *chiangrai
new Chart(document.getElementById("GAP-chiangrai-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP จังหวัดเชียงราย",
        data: [14742, 15607, 18010, 16886, 15768, 13133],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// *payao
new Chart(document.getElementById("GAP-payao-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP จังหวัดพะเยา",
        data: [2643, 3348, 3500, 3739, 3696, 3945, 3948],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
// *prae
new Chart(document.getElementById("GAP-prae-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP จังหวัดแพร่",
        data: [1224, 1140, 1296, 1385, 1564, 1705],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// *lampoon
new Chart(document.getElementById("GAP-lampoon-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP จังหวัดลำพูน",
        data: [16658, 14839, 11942, 9785, 10688, 11752],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// *lampang
new Chart(document.getElementById("GAP-lampang-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP จังหวัดลำปาง",
        data: [8906, 9146, 8221, 7488, 8341, 6293],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// *nan
new Chart(document.getElementById("GAP-nan-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP จังหวัดน่าน ",
        data: [5081, 4998, 4858, 5375, 6174, 6664],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// *maehongsorn
new Chart(document.getElementById("GAP-maehongsorn-chart"), {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "การจดทะเบียน GAP จังหวัดแม่ฮ่องสอน",
        data: [1151, 2799, 3568, 3551, 2780, 2800],
        backgroundColor: [
          "#e46612c9",
          "#e49012c9",
          "#e4b312c9",
          "#a7c22dbe",
          "#2dc27dbe",
          "#2dc2aebe",
        ],
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

// @selects
new SelectOptions({
  allOptions: document.querySelectorAll(".GAP-opt"),
  optionContainer: document.querySelector(".GAP-option__container"),
  chartWrapper: document.querySelector(".GAP-wrapper--all"),
  chartCon: [
    document.getElementById("GAP-chiangmai"),
    document.getElementById("GAP-chiangrai"),
    document.getElementById("GAP-payao"),
    document.getElementById("GAP-prae"),
    document.getElementById("GAP-lampoon"),
    document.getElementById("GAP-lampang"),
    document.getElementById("GAP-nan"),
    document.getElementById("GAP-maehongsorn"),
  ],
});

// @CHANGE TITLES
for (let i = 0; i < GAPOpt.length; i++) {
  GAPOpt[i].addEventListener("click", function (e) {
    const GAPTitle = document.querySelector(".GAP-each-province__title");

    const GAPtext = e.target.innerHTML;
    GAPTitle.innerHTML = `ข้อมูลการจดทะเบียนรับรองแหล่งผลิต GAP พืชในจังหวัด${GAPtext}`;
  });
}

// #Agricultural Areas
// @charts
// *ChiangMai
const GAPAriChiangmai = document
  .getElementById("GAP-chiangmai-agri-chart")
  .getContext("2d");
const GAPAriChiangmaidata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [33363, 41397, 43081, 39741, 38256],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [1308452, 1308452, 1308452, 1308452, 1308452],
    },
  ],
};

const GAPAriChiangmaiChart = new Chart(GAPAriChiangmai, {
  type: "bar",
  data: GAPAriChiangmaidata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// *ChiangRai
const GAPAriChiangrai = document
  .getElementById("GAP-chiangrai-agri-chart")
  .getContext("2d");

const GAPAriChiangraidata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [14742, 15607, 18010, 16886, 15768],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [2279813, 2279813, 2279813, 2279813, 2279813],
    },
  ],
};

const myBarChart = new Chart(GAPAriChiangrai, {
  type: "bar",
  data: GAPAriChiangraidata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// *payao
const GAPAriPayaodata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [2643, 3348, 3500, 3739, 3696, 3945],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [986136, 986136, 986136, 986136, 986136],
    },
  ],
};

new Chart(document.getElementById("GAP-payao-agri-chart"), {
  type: "bar",
  data: GAPAriPayaodata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// *prea
const GAPAriPreadata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [1224, 1140, 1296, 1385, 1564, 1705],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [683149, 683149, 683149, 683149, 683149],
    },
  ],
};

new Chart(document.getElementById("GAP-prae-agri-chart"), {
  type: "bar",
  data: GAPAriPreadata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// *lampoon
const GAPAgriLampoondata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [8906, 9146, 8221, 7488, 8341],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [827287, 827287, 827287, 827287, 827287],
    },
  ],
};

new Chart(document.getElementById("GAP-lampoon-agri-chart"), {
  type: "bar",
  data: GAPAgriLampoondata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// *lampang
const GAPAgriLampangdata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [14742, 15607, 18010, 16886, 15768],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [2279813, 2279813, 2279813, 2279813, 2279813],
    },
  ],
};

new Chart(document.getElementById("GAP-lampang-agri-chart"), {
  type: "bar",
  data: GAPAgriLampangdata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// *nan
const GAPAgriNandata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [5081, 4998, 4858, 5375, 6174],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [1378571, 1378571, 1378571, 1378571, 1378571],
    },
  ],
};

new Chart(document.getElementById("GAP-nan-agri-chart"), {
  type: "bar",
  data: GAPAgriNandata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// *maehongsorn
const GAPAgriMaedata = {
  labels: ["2558", "2559", "2560", "2561", "2562"],
  datasets: [
    {
      label: "GAP",
      backgroundColor: "#ec94c0",
      data: [1151, 2799, 3568, 3551, 2780],
    },
    {
      label: "พื้นที่การเกษตร",
      backgroundColor: "#83c3e7",
      data: [383954, 308508, 383954, 311159, 383954],
    },
  ],
};

new Chart(document.getElementById("GAP-maehongsorn-agri-chart"), {
  type: "bar",
  data: GAPAgriMaedata,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
          },
        },
      ],
    },
  },
});

// @selects
new SelectOptions({
  allOptions: document.querySelectorAll(".GAP-agri-opt"),
  optionContainer: document.querySelector(".GAP-agri-option__container"),
  chartWrapper: document.querySelector(".GAP-agriarea-wrapper"),
  chartCon: [
    document.getElementById("GAP-agri-chiangmai"),
    document.getElementById("GAP-agri-chiangrai"),
    document.getElementById("GAP-agri-payao"),
    document.getElementById("GAP-agri-prae"),
    document.getElementById("GAP-agri-lampoon"),
    document.getElementById("GAP-agri-lampang"),
    document.getElementById("GAP-agri-nan"),
    document.getElementById("GAP-agri-maehongsorn"),
  ],
});
