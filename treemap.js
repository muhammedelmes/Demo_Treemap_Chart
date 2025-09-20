var options = {
  series: [
    {
      data: [
        { x: 'Finance Min & Affiliates', y: 38 },
        { x: 'National Oil Corp', y: 18 },
        { x: 'Social Affairs Min & Affiliates', y: 17 },
        { x: 'Health Min & Affiliates', y: 8 },
        { x: 'GECOL', y: 7 },
        { x: 'Others', y: 37 }
      ]
    }
  ],
  chart: {
    type: 'treemap',
  },
  colors: ['#1d2656', '#1d2656', '#1d2656', '#1d2656', '#1d2656', '#404a84ff'],
  
  legend: {
    show: false
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'], // text color inside each box
      fontSize: '12px',
      fontWeight: 'normal'
    },
    formatter: function(val, opts) {
      return  val;
    }
  },
  plotOptions: {
    treemap: {
      distributed: true, // each box gets its color
      enableShades: true,
      shadeIntensity: 0,
      reverseNegativeShade: true,
      stroke: {
        width: 1,
        colors: ['#8b7555ff'] // border color around each box
      }
    }
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function(val) {
        return val + 'B'; // tooltip value formatting
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

