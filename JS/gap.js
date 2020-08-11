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
