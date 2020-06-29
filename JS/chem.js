// #PIE CHART
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ["กลุ่มสารเคมี", "ตัน"],
    // ["สารอื่นๆ", 11],
    ["Organophosphate & Carbamate", 195.39],
    ["Herbicides", 3634.42],
  ]);

  var options = {
    // title: "My Daily Activities",
    colors: ["#ffc302", "#0f979b"],
    legend: { position: "bottom", alignment: "start" },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
  // chart.draw(data);
}

// #COLUMN CHART
google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  const numbers = {
    paraquat: 2022.94,
    glyphosate: 1611.48,
    chlorpyrifos: 195.39,
    total() {
      const total = this.paraquat + this.glyphosate + this.chlorpyrifos;
      return total;
    },
  };

  const calc = (para, gly, chlor) => {
    const total = numbers.total();
    const paraPer = (para / total) * 100;
    const glyPer = (gly / total) * 100;
    const chlorPer = (chlor / total) * 100;

    const all = [paraPer.toFixed(2), glyPer.toFixed(2), chlorPer.toFixed(2)];
    return all;
  };

  const percent = calc(
    numbers.paraquat,
    numbers.glyphosate,
    numbers.chlorpyrifos
  );

  var data = new google.visualization.arrayToDataTable([
    ["Move", "ร้อยละ"],
    ["พาราควอต", 52.82],
    ["ไกลโฟเซต", 42.08],
    ["คลอร์ไพริพอส", 5.1],
  ]);

  var options = {
    width: 800,
    legend: { position: "none" },
    chart: {
      subtitle: "popularity by percentage",
    },
    axes: {
      x: {
        0: { side: "top", label: "White to move" }, // Top x-axis.
      },
    },
    bar: { groupWidth: "90%" },
  };

  var chart = new google.charts.Bar(document.getElementById("top_x_div"));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
