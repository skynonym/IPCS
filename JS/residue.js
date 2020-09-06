// #RESIDUE#######################################
// const seeResult = document.querySelector(".see-full-results");
// const fullResult = document.querySelector(".full-results");
// const resTable = document.querySelector(".residue-table");

// seeResult.addEventListener("click", () => {
//   fullResult.classList.toggle("open");
// });

// const ResTableSelect = new Dropdown({
//   id: "select-year--residue",
//   val: "2563",
//   data: ["2558", "2559", "2560", "2561", "2562", "2563"],
//   cb: function (newVal) {
//     switch (newVal) {
//       case "2558":
//         const res2558 = new ResVegFru(
//           ["4,470", "12", "0.27"],
//           [
//             ["ดอกหอม", "2.94"],
//             ["พริกสด", "1.26"],
//             ["กวางตุ้ง", "1.15"],
//             ["พริกหนุ่ม", "0.87"],
//             ["ถั่วฝักยาว", "0.57"],
//             ["กะหล่ำปลี", "0.26"],
//           ],
//           ["183", "1", "0.55"],
//           [["ส้ม", "2.17"]]
//         );
//         res2558.tableRender();
//         break;
//       case "2559":
//         const res2559 = new ResVegFru(
//           ["3,403", "28", "0.82"],
//           [
//             ["พริกแห้ง", "8.82"],
//             ["ต้นหอม", "2.47"],
//             ["บร็อคโคลี", "2.13"],
//             ["ขึ้นฉ่าย", "1.43"],
//             ["ผักชี", "0.93"],
//             ["แตงกวา", "0.77"],
//             ["กะหล่ำปลี", "0.74"],
//             ["พริกสด", "0.73"],
//             ["คะน้า", "0.5"],
//             ["ถั่วฝักยาว", "0.48"],
//           ],
//           ["243", "0", "0"],
//           [["-", "-"]]
//         );
//         res2559.tableRender();
//         break;
//       case "2560":
//         const res2560 = new ResVegFru(
//           ["8,625", "59", "0.68"],
//           [
//             ["หัวไชเท้า", "7.23"],
//             ["ดอกหอม", "4.88"],
//             ["สะระแหน่", "4"],
//             ["พริกแห้ง", "3.92"],
//             ["บร็อคโคลี", "2.94"],
//             ["กระเทียม", "2.67"],
//             ["ผักชีฝรั่ง", "2.26"],
//             ["แครอท", "1.43"],
//             ["ถั่วลันเตา", "1.22"],
//             ["โหระพา", "1.12"],
//           ],
//           ["404", "9", "2.23"],
//           [
//             ["ส้ม", "5.19"],
//             ["แอปเปิล", "1.89"],
//           ]
//         );
//         res2560.tableRender();
//         break;
//       case "2561":
//         const res2561 = new ResVegFru(
//           ["6,902", "72", "1.04"],
//           [
//             ["บร็อคโคลี", "5.08"],
//             ["กระเทียม", "3.66"],
//             ["พริกหยวก", "3.51"],
//             ["พริกแห้ง", "3"],
//             ["ต้นหอม", "2.68"],
//             ["ผักกาดเขียว", "2.63"],
//             ["ผักชีฝรั่ง", "2.08"],
//             ["พริกสด", "2.03"],
//             ["หอมแดง", "1.88"],
//             ["กะหล่ำดอก", "1.74"],
//           ],
//           ["805", "14", "1.74"],
//           [
//             ["ส้ม", "13.11"],
//             ["สตรอว์เบอร์รี", "4.17"],
//             ["มะเขือเทศ", "0.46"],
//             ["อื่น ๆ", "1.14"],
//           ]
//         );
//         res2561.tableRender();
//         break;
//       case "2562":
//         const res2562 = new ResVegFru(
//           ["6,959", "59", "0.85"],
//           [
//             ["หัวไชเท้า", "10.68"],
//             ["กระเทียม", "3.3"],
//             ["หอมหัวใหญ่", "2.22"],
//             ["พริกหนุ่ม", "2"],
//             ["ดอกหอม", "1.85"],
//             ["บร็อคโคลี", "1.43"],
//             ["เห็ด", "1.41"],
//             ["กะหล่ำดอก", "1.37"],
//             ["ถั่วลันเตา", "1.37"],
//             ["พริกสด", "1.36"],
//           ],
//           ["336", "7", "2.08"],
//           [["ส้ม", "6.67"]]
//         );
//         res2562.tableRender();
//         break;
//       case "2563":
//         const res2563 = new ResVegFru(
//           ["1,466", "17", "1.16"],
//           [
//             ["ต้นหอม", "3.75"],
//             ["ผักกาดขาว", "2"],
//             ["ผักชี", "2.44"],
//             ["แตงกวา", "1.52"],
//             ["ถั่วฝักยาว", "1.47"],
//             ["ขึ้นฉ่าย", "1.23"],
//             ["พริกสด", "1.22"],
//           ],
//           ["56", "6", "10.71"],
//           [
//             ["ส้ม", "**"],
//             ["พุทรา", "**"],
//           ]
//         );
//         res2563.tableRender();
//         break;
//       default:
//         console.log("new case detected");
//     }
//     ResVegFru.noteRender();
//   },
// });

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

// #MORNITOR#######################################
new Chart(document.getElementById("res-monitor1"), {
  type: "pie",
  data: {
    datasets: [
      {
        data: [70, 12],
        backgroundColor: ["#eb7661", "#7b7b7b"],
        label: "Dataset 1",
      },
    ],
    labels: ["ผ่านเกณฑ์มาตรฐาน", "ไม่ผ่านเกณฑ์มาตรฐาน"],
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

// note.innerHTML =
//   "*ข้อมูลจากจังหวัดเชียงใหม่ เชียงราย แพร่ น่าน  ลำพูน พะเยา";

new Chart(document.getElementById("res-monitor2"), {
  type: "pie",
  data: {
    datasets: [
      {
        data: [92, 8],
        backgroundColor: ["#eb7661", "#7b7b7b"],
        label: "Dataset 1",
      },
    ],
    labels: ["ผ่านเกณฑ์มาตรฐาน", "ไม่ผ่านเกณฑ์มาตรฐาน"],
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
// note.innerHTML =
//   "*ข้อมูลจากจังหวัดเชียงใหม่ เชียงราย แพร่ น่าน  ลำพูน พะเยา และแม่ฮ่องสอน";

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
        label: "จำนวนครั้งที่พบ",
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
          scaleLabel: {
            display: true,
            labelString: "ชื่อสาร",
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: "จำนวนครั้งที่พบ",
          },
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
        label: "จำนวนครั้งที่พบ",
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
          scaleLabel: {
            display: true,
            labelString: "ชื่อสาร",
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: "จำนวนครั้งที่พบ",
          },
        },
      ],
    }, // scales
    legend: { display: false },
  }, // options
});

// #types of chems found in plants--------------
var ctx = document.getElementById("tpyesOfChems1").getContext("2d");
new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["ไพรีทรอยด์", "ออร์โกโนฟอสเฟต", "คาร์บาเมต", "ออร์กาโนคลอรีน"],
    datasets: [
      {
        backgroundColor: ["#25649b", "#2980cc", "#5ebef5", "#b49add"],
        borderColor: "#fff",
        data: [20, 21, 9, 3],
      },
    ],
  },
  options: {
    legend: { position: "bottom" },

    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      labels: {
        render: "percentage",
        fontColor: "white",
        precision: 0,
        fontSize: 14,
      },
    },
  },
});

// @61--------------------------61
var ctx = document.getElementById("tpyesOfChems2").getContext("2d");
new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "ไพรีทรอยด์",
      "ออร์กาโนฟอสเฟต",
      "คาร์บาเมต",
      "ออร์กาโนคลอรีน",
      "สารกำจัดรา",
      "สารกำจัดแมลงกลุ่มอื่น",
      "สารกำจัดไร",
      "สารกำจัดวัชพืช",
    ],
    datasets: [
      {
        backgroundColor: [
          "#25649b",
          "#2980cc",
          "#5ebef5",
          "#b49add",
          "#fc8ea0",
          "#dd697c",
          "#EDB500",
          "#7b7b7b",
        ],
        data: [21, 20, 8, 4, 10, 26, 3, 1],
      },
    ],
  },
  options: {
    legend: { position: "bottom" },

    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      labels: {
        render: "percentage",
        fontColor: "white",
        precision: 0,
        fontSize: 14,
      },
    },
  },
});
// @62--------------------------62
var typesOfChems3 = document.getElementById("typesOfChems3").getContext("2d");
new Chart(typesOfChems3, {
  type: "pie",
  data: {
    labels: [
      "ไพรีทรอยด์",
      "ออร์กาโนฟอสเฟต",
      "คาร์บาเมต",
      "ออร์กาโนคลอรีน",
      "สารกำจัดแมลงกลุ่มอื่น",
      "สารกำจัดรา",
      "สารกำจัดไร",
      "สารกำจัดวัชพืช",
    ],
    datasets: [
      {
        backgroundColor: [
          "#25649b",
          "#2980cc",
          "#5ebef5",
          "#b49add",
          "#dd697c",
          "#fc8ea0",
          "#EDB500",
          "#7b7b7b",
        ],
        data: [21, 28, 14, 2, 17, 69, 2, 1],
      },
    ],
  },
  options: {
    legend: { position: "bottom" },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      labels: {
        render: "percentage",
        fontColor: "white",
        precision: 0,
        fontSize: 14,
      },
    },
  },
});

// #MONITOR PLANTS
var moniVeggies = document
  .getElementById("monitor-veggies__chart")
  .getContext("2d");
new Chart(moniVeggies, {
  type: "bar",
  data: {
    labels: ["2558", "2559", "2560", "2561", "2562", "2563"],
    datasets: [
      {
        label: "ผัก",
        backgroundColor: "#1e9652",
        data: [0.27, 0.82, 0.68, 1.04, 0.85, 1.16],
        stack: 1,
      },
      {
        label: "ผลไม้",
        backgroundColor: "#EDB500",
        data: [0.55, 0, 2.23, 1.74, 2.08, 10.71],
        stack: 2,
      },
    ],
  },

  options: {
    scales: {
      xAxes: [
        {
          stacked: true,
          scaleLabel: {
            display: true,
            labelString: "ปีที่พบ",
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
            labelString: "การพบสารตกค้าง* (ร้อยละ)",
          },
        },
      ],
    },
  },
});
