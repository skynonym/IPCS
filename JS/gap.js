google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(gapChart);

function gapChart() {
  var data = google.visualization.arrayToDataTable([
    [
      "ปี",
      "เชียงใหม่",
      "เชียงราย",
      "ลำพูน",
      "ลำปาง",
      "น่าน",
      "แพร่",
      "พะเยา",
      "แม่ฮ่องสอน",
    ],
    ["2558", 33363, 14742, 16658, 8906, 5081, 1224, 2643, 1151],
    ["2559", 41397, 15607, 14839, 9146, 4998, 1140, 3348, 2799],
    ["2560", 43081, 18010, 11942, 8221, 4858, 1296, 3500, 3567],
    ["2561", 39741, 16886, 9785, 7488, 5375, 1385, 3739, 3551],
    ["2562", 38256, 15768, 10688, 8341, 6174, 1564, 3696, 2780],
    ["2563", 36352, 13133, 11752, 6293, 6664, 1705, 3948, 2800],
  ]);

  var options = {
    curveType: "function",
    legend: { position: "top" },
    colors: [
      "#3D7BB4",
      "#51A7DE",
      "#B39EEF",
      "#EF9ED8",
      "#F38B8B",
      "#FDB765",
      "#F5DB4E",
    ],

    width: 500,
    height: 500,
    hAxis: {
      textStyle: {
        fontSize: 15,
        color: "#7D7C7C",
      },
    },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
// *make it responsive
$(window).resize(function () {
  gapChart();
});
