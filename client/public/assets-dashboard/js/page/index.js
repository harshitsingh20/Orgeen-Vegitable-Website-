"use strict";

$(function () {


    var chart = document.getElementById('echart_graph_line');
    var barChart = echarts.init(chart);

    barChart.setOption({

        tooltip: {
            trigger: "axis"
        },
        legend: {
        textStyle: {color: '#9aa0ac'},
            data: ["sales", "purchases"]
        },
        toolbox: {
            show: !1
        },
        calculable: !1,
        xAxis: [{
            type: "category",
            data: ["2000", "2001", "2002", "2003", "2004", "2005"],
            axisLabel: {
                fontSize: 10,
                color: '#9aa0ac'
            }
        }],
        yAxis: [{
            type: "value",
                axisLabel: {
                fontSize: 10,
                color: '#9aa0ac'
            }
        }],
        series: [{
            name: "sales",
            type: "bar",
            data: [22, 54, 37, 23, 25.6, 76],
            markPoint: {
                data: [{
                    type: "max",
                    name: "???"
                }, {
                    type: "min",
                    name: "???"
                }]
            },
            markLine: {
                data: [{
                    type: "average",
                    name: "???"
                }]
            }
        }, {
            name: "purchases",
            type: "bar",
            data: [35, 45, 47, 10, 35, 70],
            markPoint: {
                data: [{
                    name: "sales",
                    value: 182.2,
                    xAxis: 7,
                    yAxis: 183
                }, {
                    name: "purchases",
                    value: 2.3,
                    xAxis: 11,
                    yAxis: 3
                }]
            },
            markLine: {
                data: [{
                    type: "average",
                    name: "???"
                }]
            }
        }],
        color: ['#636FC3', '#D3D3D3']

    });


    /* area line chart */
    var chart = document.getElementById('echart_area_line');
    var lineChart = echarts.init(chart);

    lineChart.setOption({
        tooltip: {
            trigger: "axis"
        },
        legend: {
        textStyle: {color: '#9aa0ac'},
            data: ["Product1", "Product2", "Product3"]
        },
        toolbox: {
            show: !1
        },
        calculable: !1,
        xAxis: [{
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLabel: {
                fontSize: 10,
                color: '#9aa0ac'
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                fontSize: 10,
                color: '#9aa0ac'
            }
        }],
        series: [{
            name: "Product1",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [10, 12, 21, 54, 260, 830, 710]
        }, {
            name: "Product2",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [30, 182, 434, 791, 390, 30, 10]
        }, {
            name: "Product3",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [10, 132, 351, 120, 80, 400, 20]
        }],
        color: ['rgba(102,119,239,0.6)', 'rgba(251,110,28,0.6)', 'rgba(12,230,49,0.6)']
    });

    var chartdata = [
        {
            name: 'sales',
            type: 'bar',
            barMaxWidth: 10,
            data: [13, 14, 10, 16, 11, 13]
        },

        {
            name: 'growth',
            type: 'bar',
            barMaxWidth: 10,
            data: [10, 14, 10, 15, 9, 25]
        }
    ];


    var chart = document.getElementById('echart_bar');
    var barChart = echarts.init(chart);

    var option = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['2014', '2015', '2016', '2017', '2018'],

            axisLabel: {
                fontSize: 10,
                color: '#9aa0ac'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                }
            }
        },
        yAxis: {
            axisLabel: {
                fontSize: 10,
                color: '#9aa0ac'
            }
        },
        series: chartdata,
        color: ['#9f78ff', '#32cafe']
    };

    barChart.setOption(option);
    
    
    var ctx = document.getElementById("chart-1").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
        label: 'Sales',
        data: [10, 35, 27, 55, 30],
        borderWidth: 2,
        backgroundColor: 'rgba(78, 214, 193, .8)',
        borderWidth: 0,
        borderColor: 'transparent',
        pointBorderWidth: 0,
        pointRadius: 2,
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            // display: false,
            drawBorder: false,
            color: '#f2f2f2',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 10,
            fontColor: "#9aa0ac", // Font Color
            callback: function (value, index, values) {
              return '$' + value;
            }
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            tickMarkLength: 15,
          },
          ticks: {
            fontColor: "#9aa0ac", // Font Color
          }
        }]
      },
    }
  });
});