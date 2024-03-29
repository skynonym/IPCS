// var ctx = document.getElementById("SW3__chart").getContext("2d");
new Chart(document.getElementById("SW3__chart"), {
  type: "bar",
  data: {
    labels: [
      "cypermethrin",
      "chlopyrifos*",
      "imidacloprid",
      "ethion",
      "carbendazim",
      "azoxystrobin",
      "carbofuran*",
      "acetamiprid",
      "difenoconazole",
      "profenofos",
      "metalaxyl",
      "pyridaben",
      "prochloraz",
      "fipronil",
      "lambda-cyhalothrin",
      "propargite",
      "thiamethoxam",
      "bifenthrin",
      "tetraconazole",
      "chlorantraniliprole",
      "dimethomorph",
      "pyraclostrobin",
      "chlorothalonil",
      "etofenprox",
      "omethoate",
      "carfentrazone-ethyl",
      "buprofezin",
      "chlorfenapyr",
      "dinotefuran",
      "fenobucarb",
      "carbaryl",
      "diazinon",
      "fenpyrozimate",
      "acetochlor",
      "ametryn",
      "atrazine",
      "diuron",
      "methomyl*",
    ],
    datasets: [
      {
        label: "ความถี่ของสารในแหล่งดิน",
        data: [
          118,
          113,
          65,
          55,
          40,
          38,
          29,
          28,
          26,
          22,
          21,
          21,
          17,
          16,
          16,
          15,
          11,
          10,
          10,
          8,
          8,
          8,
          7,
          6,
          6,
          5,
          4,
          4,
          4,
          4,
          3,
          3,
          3,
          2,
          2,
          2,
          1,
          1,
        ],
        backgroundColor: [
          "#EDB500",
          "#ffc302",
          "#ffd342",
          "#ffedb0",
          "#ffdab0",
          "#ffc786",
          "#ffb560",
          "#ffa641",
          "#eb8612",
          "#eb6212",
          "#dd460a",
          "#f55337",
          "#fd7861",
          "#ff9a89",
          "#ffb5a8",
          "#ffa8c9",
          "#ff88b5",
          "#ff619e",
          "#e755c8",
          "#d33ab2",
          "#c63ad3",
          "#d470dd",
          "#e08fe7",
          "#bf8fe7",
          "#a758e7",
          "#9f41ec",
          "#8b1fe4",
          "#641fe4",
          "#633af5",
          "#5426f8",
          "#3330d3",
          "#272599",
          "#286299",
          "#287f99",
          "#289599",
          "#2da376",
          "#44bb5e",
          "#62e47e",
        ],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontSize: 0,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "จำนวนครั้งที่พบ",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "สารที่พบ",
          },
        },
      ],
    },
  },
});

// #CHART 2
var myChart = new Chart(document.getElementById("SW2__chart"), {
  type: "bar",
  data: {
    labels: [
      "Paraquat",
      "AMPA",
      "Glyphosate",
      "Carbendazim",
      "Ethion",
      "Chlopyrifos",
      "Phenobucarb",
      "Fenthion",
      "Methomyl",
      "Carbofuran",
      "Carbaryl",
    ],
    datasets: [
      {
        label: "ความถี่ของสารในแหล่งดิน",
        data: [146, 75, 19, 28, 17, 11, 5, 4, 4, 3, 1],
        backgroundColor: [
          "#664a3a",
          "#9e623f",
          "#EDB500",
          "#ffd342",
          "#ffdab0",
          "#7b7b7b",
          "#2e5f43",
          "#1e9652",
          "#3ccf7c",
          "#5db1ad",
          "#5d92b1",
        ],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontSize: 0,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "จำนวนครั้งที่พบ",
          },

          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "สารที่พบ",
          },
        },
      ],
    },
  },
});

// #CHART 1
new Chart(document.getElementById("SW1__chart"), {
  type: "bar",
  data: {
    labels: [
      "Carbendazim",
      "Carbofuran",
      "Glyphosate",
      "Chlopyrifos",
      "Pqraquat",
    ],
    datasets: [
      {
        label: "ความถี่ของสารในแหล่งน้ำ",
        data: [3, 1, 1, 1, 1],
        backgroundColor: [
          "#EDB500",
          "#ffd342",
          "#eb6212",
          "#ac4937",
          "#4e3d3a",
          "#7b7b7b",
        ],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontSize: 0,
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "จำนวนครั้งที่พบ",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "สารที่พบ",
          },
        },
      ],
    },
  },
});
