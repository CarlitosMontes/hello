Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

 var datos = ["Pot. Act. U1",        //0
             "Pot. Act. U2" + ""   //9
]+ '';


var gaugeOptions = {


    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#0000FF'], // aqua
            [0.5, '#00FFFF'], // blue
            [0.7, '#00FF00'], // green
            [0.95, '#DF5353'] // red

        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

// The speed gauge
var chartSpeed = Highcharts.chart('container-speed', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 180,
        title: {
            text: 'UNIDAD 1'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Speed',
        data: [null],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
                   '<span style="font-size:12px;color:black">MegaWatts</span></div>'
        },
        tooltip: {
            valueSuffix: ' MW U1'
        }
    }]

}));

// The RPM gauge
var chartRpm = Highcharts.chart('container-rpm', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 180,
        title: {
            text: 'UNIDAD 2'
        }
    },

    series: [{
        name: 'RPM',
        data: [null],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
                   '<span style="font-size:12px;color:black">MegaWatts</span></div>'
        },
        tooltip: {
            valueSuffix: ' revolutions/min'
        }
    }]

}));

// Bring life to the dials
setInterval(function () {
    // Speed
    var point,
        newVal,
        inc;

    if (chartSpeed) {
        point = chartSpeed.series[0].points[0];
        inc = datos[0];
        newVal = inc;

       // if (newVal < 0 || newVal > 200) {
      //      newVal = point.y - inc;
     //   }

        point.update(newVal);
    }

    // RPM
    if (chartRpm) {
        point = chartRpm.series[0].points[0];
        inc = datos[2]; 
        newVal = inc;

      //  if (newVal < 0 || newVal > 200) {
        //    newVal = point.y - inc;
        //}

        point.update(newVal);
    }
}, 2000);

function setDivHeight() {
    var div = $('#container-speed');
    div.height(div.width() * 0.75);
    div = $('#container-rpm');
    div.height(div.width() * 0.75);
}

$(window).on('load resize', function(){
    setDivHeight();        
});
