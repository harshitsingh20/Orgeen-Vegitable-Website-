"use strict";

$(function () {
  $("#message-list")
    .css({
      height: 320
    })
    .niceScroll();

  $(".to-do-list")
    .css({
      height: 288
    })
    .niceScroll();

$('#visitorMap').vectorMap({
        map: 'world_en',
        backgroundColor: '#ffffff',
        borderColor: '#f2f2f2',
        borderOpacity: .8,
        borderWidth: 1,
        hoverColor: '#000',
        hoverOpacity: .8,
        color: '#ddd',
        normalizeFunction: 'linear',
        selectedRegions: false,
        showTooltip: true,
        pins: {
            id: '<div class="jqvmap-circle l-bg-orange"></div>',
            my: '<div class="jqvmap-circle l-bg-cyan"></div>',
            th: '<div class="jqvmap-circle l-bg-green"></div>',
            sy: '<div class="jqvmap-circle l-bg-purple"></div>',
            eg: '<div class="jqvmap-circle bg-red"></div>',
            ae: '<div class="jqvmap-circle bg-black"></div>',
            nz: '<div class="jqvmap-circle bg-pink"></div>',
            tl: '<div class="jqvmap-circle bg-light-green"></div>',
            ng: '<div class="jqvmap-circle bg-teal"></div>',
            si: '<div class="jqvmap-circle bg-indigo"></div>',
            pa: '<div class="jqvmap-circle bg-amber"></div>',
            au: '<div class="jqvmap-circle bg-cyan"></div>',
            ca: '<div class="jqvmap-circle bg-lime"></div>',
            tr: '<div class="jqvmap-circle bg-purple"></div>',
        },

    });

  bannerChart();
  chart1();
  chart2();
  chart3();
  chart4();
});

function bannerChart() {
  /* chart shadow */
  var draw = Chart.controllers.line.prototype.draw;
  Chart.controllers.lineShadow = Chart.controllers.line.extend({
    draw: function () {
      draw.apply(this, arguments);
      var ctx = this.chart.chart.ctx;
      var _stroke = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = "#00000075";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 8;
        ctx.shadowOffsetY = 8;
        _stroke.apply(this, arguments);
        ctx.restore();
      };
    }
  });

  // card chart 1
  var ctx = document.getElementById("cardChart1").getContext("2d");
  var gradientStroke2 = ctx.createLinearGradient(0, 0, 700, 0);
  gradientStroke2.addColorStop(0, "rgba(255, 204, 128, 1)");
  gradientStroke2.addColorStop(0.5, "rgba(255, 152, 0, 1)");
  gradientStroke2.addColorStop(1, "rgba(239, 108, 0, 1)");

  var myChart = new Chart(ctx, {
    type: "lineShadow",
    data: {
      labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
      type: "line",
      datasets: [{
        label: "Income",
        data: [0, 30, 10, 120, 50, 63, 10],
        borderColor: gradientStroke2,
        pointBorderColor: gradientStroke2,
        pointBackgroundColor: gradientStroke2,
        pointHoverBackgroundColor: gradientStroke2,
        pointHoverBorderColor: gradientStroke2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        pointRadius: 0.5,
        fill: false,
        borderWidth: 4
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {},
      scales: {
        yAxes: [{
          ticks: {
            display: false //this will remove only the label
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false //this will remove only the label
          }
        }]
      }
    }
  });

  // card chart 2
  var ctx = document.getElementById("cardChart2").getContext("2d");
  var gradientStroke2 = ctx.createLinearGradient(500, 0, 0, 0);
  gradientStroke2.addColorStop(0, "rgba(55, 154, 80, 1)");
  gradientStroke2.addColorStop(1, "rgba(131, 210, 151, 1)");

  var myChart = new Chart(ctx, {
    type: "lineShadow",
    data: {
      labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
      type: "line",
      datasets: [{
        label: "Income",
        data: [0, 30, 10, 120, 50, 63, 10],
        borderColor: gradientStroke2,
        pointBorderColor: gradientStroke2,
        pointBackgroundColor: gradientStroke2,
        pointHoverBackgroundColor: gradientStroke2,
        pointHoverBorderColor: gradientStroke2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        pointRadius: 0.5,
        fill: false,
        borderWidth: 4
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {},
      scales: {
        yAxes: [{
          ticks: {
            display: false //this will remove only the label
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false //this will remove only the label
          }
        }]
      }
    }
  });

  // card chart 3
  var ctx = document.getElementById("cardChart3").getContext("2d");
  var gradientStroke2 = ctx.createLinearGradient(0, 0, 700, 0);
  gradientStroke2.addColorStop(0, "rgba(103, 119, 239, 1)");
  gradientStroke2.addColorStop(0.5, "rgba(106, 120, 220, 1)");
  gradientStroke2.addColorStop(1, "rgba(92, 103, 187, 1)");

  var myChart = new Chart(ctx, {
    type: "lineShadow",
    data: {
      labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
      type: "line",
      datasets: [{
        label: "Income",
        data: [0, 30, 10, 120, 50, 63, 10],
        borderColor: gradientStroke2,
        pointBorderColor: gradientStroke2,
        pointBackgroundColor: gradientStroke2,
        pointHoverBackgroundColor: gradientStroke2,
        pointHoverBorderColor: gradientStroke2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        pointRadius: 0.5,
        fill: false,
        borderWidth: 4
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {},
      scales: {
        yAxes: [{
          ticks: {
            display: false //this will remove only the label
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false //this will remove only the label
          }
        }]
      }
    }
  });

  // card chart 4
  var ctx = document.getElementById("cardChart4").getContext("2d");
  var gradientStroke2 = ctx.createLinearGradient(0, 0, 700, 0);
  gradientStroke2.addColorStop(0, "rgba(61, 199, 190, 1)");
  gradientStroke2.addColorStop(0.5, "rgba(57, 171, 163, 1)");
  gradientStroke2.addColorStop(1, "rgba(40, 142, 135, 1)");

  var myChart = new Chart(ctx, {
    type: "lineShadow",
    data: {
      labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
      type: "line",
      datasets: [{
        label: "Income",
        data: [0, 30, 10, 120, 50, 63, 10],
        borderColor: gradientStroke2,
        pointBorderColor: gradientStroke2,
        pointBackgroundColor: gradientStroke2,
        pointHoverBackgroundColor: gradientStroke2,
        pointHoverBorderColor: gradientStroke2,
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 1,
        pointRadius: 0.5,
        fill: false,
        borderWidth: 4
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {},
      scales: {
        yAxes: [{
          ticks: {
            display: false //this will remove only the label
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false //this will remove only the label
          }
        }]
      }
    }
  });
}


function chart1() {
  var options = {
    chart: {
      height: 230,
      type: "line",
      shadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1
      },
      toolbar: {
        show: false
      }
    },
    colors: ["#3dc7be", "#ffa117"],
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: "smooth"
    },
    series: [{
      name: "High - 2019",
      data: [5, 15, 14, 36, 32, 32]
    },
    {
      name: "Low - 2019",
      data: [7, 11, 30, 18, 25, 13]
    }
    ],
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.0
      }
    },
    markers: {
      size: 6
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

      labels: {
        style: {
          colors: "#9aa0ac"
        }
      }
    },
    yaxis: {
      title: {
        text: "Income"
      },
      labels: {
        style: {
          color: "#9aa0ac"
        }
      },
      min: 5,
      max: 40
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  };

  var chart = new ApexCharts(document.querySelector("#myChart"), options);

  chart.render();
}

function chart2() {
  var sparkline_values_bar = [
    10,
    7,
    4,
    8,
    5,
    8,
    6,
    5,
    4,
    4,
    7,
    4,
    9,
    10,
    7,
    4,
    8,
    5,
    8,
    6,
    5
  ];
  $(".sparkline-bar").sparkline(sparkline_values_bar, {
    type: "bar",
    width: "100%",
    height: "100",
    barColor: "white",
    barWidth: 2
  });
}

function chart3() {
  var sparkline_values_line = [
    110,
    147,
    324,
    108,
    235,
    498,
    346,
    525,
    382,
    214,
    427,
    424,
    239,
    236,
    475,
    569
  ];
  $(".sparkline-line").sparkline(sparkline_values_line, {
    type: "line",
    width: "100%",
    height: "100",
    lineWidth: 3,
    lineColor: "white",
    fillColor: "transparent",
    highlightSpotColor: "rgba(63,82,227,.1)",
    highlightLineColor: "rgba(63,82,227,.1)",
    spotRadius: 3
  });
}

function chart4() {

  var ctx = document.getElementById("myChart3").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [{
        label: 'Online',
        data: [290, 358, 220, 402, 440, 510, 688],
        borderWidth: 2,
        backgroundColor: 'transparent',
        borderColor: 'rgba(254,86,83,.7)',
        borderWidth: 2.5,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointRadius: 4
      },
      {
        label: 'Offline',
        data: [450, 258, 390, 162, 650, 570, 438],
        borderWidth: 2,
        backgroundColor: 'transparent',
        borderColor: 'rgba(63,82,227,.8)',
        borderWidth: 0,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointRadius: 4
      },
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false,
            color: '#f2f2f2',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 200,
            fontColor: "#9aa0ac", // Font Color
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: "#9aa0ac", // Font Color
          }
        }]
      },
    }
  });

}
