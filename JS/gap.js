// #GOOGLE

// google.charts.load("current", { packages: ["corechart", "line"] });

// function gapChart() {
//   // Define the chart to be drawn.
//   var data = new google.visualization.DataTable();
//   data.addColumn("string", "ปี");
//   data.addColumn("number", "เชียงใหม่");
//   data.addColumn("number", "เชียงราย");
//   data.addColumn("number", "ลำพูน");
//   data.addColumn("number", "ลำปาง");
//   data.addColumn("number", "น่าน");
//   data.addColumn("number", "แพร่");
//   data.addColumn("number", "พะเยา");
//   data.addColumn("number", "แม่ฮ่องสอน");
//   data.addRows([
//     ["2558", 33363, 14742, 16658, 8906, 5081, 1224, 2643, 1151],
//     ["2559", 41397, 15607, 14839, 9146, 4998, 1140, 3348, 2799],
//     ["2560", 43081, 18010, 11942, 8221, 4858, 1296, 3500, 3567],
//     ["2561", 39741, 16886, 9785, 7488, 5375, 1385, 3739, 3551],
//     ["2562", 38256, 15768, 10688, 8341, 6174, 1564, 3696, 2780],
//     ["2563", 36352, 13133, 11752, 6293, 6664, 1705, 3948, 2800],
//   ]);

//   // Set chart options
//   var options = {
//     curveType: "function",
//     hAxis: {
//       title: "ปี",
//       maxValue: 45000,
//     },
//     vAxis: {
//       minValue: 2500,
//       maxValue: 45000,
//       viewWindowMode: "explicit",
//       // viewWindow: {
//       //   max: 8.0,
//       //   min: 0.0,
//       // },
//       gridlines: { count: 5 },

//       viewWindow: {
//         max: 45000,
//       },
//       // ticks: [1000, 10000, 15000, 30000, 40000, 45000],
//       title: "จำนวนแปลง (ไร่)",
//     },

//     width: "100%",
//     pointsVisible: true,
//   };

//   // Instantiate and draw the chart.
//   var chart = new google.visualization.LineChart(
//     document.getElementById("container")
//   );
//   chart.draw(data, options);
// }
// google.charts.setOnLoadCallback(gapChart);

// $(window).resize(function () {
//   gapChart();
// });

// #Highchart
// Highcharts.chart("container", {
//   title: {
//     text: null,
//   },
//   yAxis: {
//     title: {
//       text: "จำนวนแปลง (ไร่)",
//     },
//     max: 43000,
//   },

//   xAxis: {
//     accessibility: {
//       rangeDescription: "Range: 2558 to 2563",
//     },
//   },

//   legend: {
//     layout: "vertical",
//     align: "right",
//     verticalAlign: "middle",
//   },

//   plotOptions: {
//     series: {
//       label: {
//         connectorAllowed: false,
//       },
//       pointStart: 2558,
//     },
//   },

//   series: [
//     {
//       name: "เชียงใหม่",
//       type: "spline",
//       data: [33363, 41397, 43081, 39741, 38256, 36352],
//     },
//     {
//       name: "เชียงราย",
//       type: "spline",
//       data: [14742, 15607, 18010, 16886, 15768, 13133],
//     },
//     {
//       name: "ลำพูน",
//       type: "spline",
//       data: [16658, 14839, 11942, 9785, 10688, 11752],
//     },
//     {
//       name: "ลำปาง",
//       type: "spline",
//       data: [8906, 9146, 8221, 7488, 8341, 6293],
//     },
//     {
//       name: "น่าน",
//       type: "spline",
//       data: [5081, 4998, 4858, 5375, 6174, 6664],
//     },
//     {
//       name: "แพร่",
//       type: "spline",
//       data: [1224, 1140, 1296, 1385, 1564, 1705],
//     },
//     {
//       name: "พะเยา",
//       type: "spline",
//       data: [2643, 3348, 3500, 3739, 3696, 3948],
//     },
//     {
//       name: "แม่ฮ่องสอน",
//       type: "spline",
//       data: [1151, 2799, 3567, 3551, 2780, 2800],
//     },
//   ],
//   responsive: {
//     rules: [
//       {
//         condition: {
//           maxWidth: 500,
//         },
//         chartOptions: {
//           legend: {
//             layout: "horizontal",
//             align: "center",
//             verticalAlign: "bottom",
//           },
//         },
//       },
//     ],
//   },
// });

// //#
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
