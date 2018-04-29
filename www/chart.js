// console.log(message.payloadString);

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

 var datos = ["Pot. Act. U1",        //0
             "Pot. React. U1",   //1
             "Pot. Act. U2",   //2
             "Pot. React. U2",  //3
             "V. Gen. U1",        //4
             "V. Gen. U2",   //5
             "Flujo Comb. U1",   //6
             "Flujo Comb. U2",   //7
             "Regimen Termico U1",   //8 
             "Regimen Termico U2" + ""   //9
]+ '';
   


// Create the chart
Highcharts.stockChart('container', {
    chart: {
        events: {

            load: function () {


                // set up the updating of the chart each second
                var series1 = this.series[0];
                var series2 = this.series[1];
                var series3 = this.series[2];
                var series4 = this.series[3];
                var series5 = this.series[4];
                var series6 = this.series[5];

                setInterval(function () {
                    x = (new Date()).getTime(); // current time
                    y1 = parseInt(datos[0]*10);
                    y2 = (datos[1]); 
                    y3 = parseInt(datos[4]);
                    y4 = parseInt(datos[6]);
                    y5 = parseInt(datos[8]);
                 

                    series1.addPoint([x, y1], undefined, true);
                    series2.addPoint([x, y2], undefined, true);
                    series3.addPoint([x, y3], undefined, true);
                    series4.addPoint([x, y4], undefined, true);
                    series5.addPoint([x, y5], undefined, true);

                    console.log(datos);
                }, 5000);
            }

        }
    },

    rangeSelector : {
        
                selected : 5
                

            },

    title: {
        text: 'Variables Generador Unidad 1'
    },

    legend:{
        enabled: true
    },

        exporting : {
            buttons: { 
                contextButton: { 
                    text: "Op."
                }
            }
        },    

        yAxis: {
         min: -500, max: 202000,
         tickInterval: 5000,
        allowDecimals: false,
        title: {
            text: 'Voltaje'
        }
    },

    series: [
    {
        name: 'Pot. Act. U1 ', 
        data: (function () {
            // console.log(message.payloadString);
            // generate an array of random data
            var data = [];
                time = (new Date()).getTime(), i;

            for (var i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    0
                ]);
            }
            return data;

        }())

    },
       { 
        name: 'Pot. React. U1',
        data: (function () {
            // console.log(message.payloadString);
            // generate an array of random data
            var data2 = [];
                time = (new Date()).getTime(), i+1;

            for (var i = -999; i <= 0; i += 1) {
                data2.push([
                    time + i * 1000,
                    0
                ]);
            }
            return data2;

        }())

    },
           { 
        name: 'V. Gen. U1',
        data: (function () {
            // console.log(message.payloadString);
            // generate an array of random data
            var data3 = [];
                time = (new Date()).getTime(), i+1;

            for (var i = -999; i <= 0; i += 1) {
                data3.push([
                    time + i * 1000,
                    0
                ]);
            }
            return data3;

        }())

    },
           { 
        name: 'Flujo Comb. U1',
        data: (function () {
            // console.log(message.payloadString);
            // generate an array of random data
            var data4 = [];
                time = (new Date()).getTime(), i+1;

            for (var i = -999; i <= 0; i += 1) {
                data4.push([
                    time + i * 1000,
                    0
                ]);
            }
            return data4;

        }())

    },
           { 
        name: 'Regimen Termico U1',
        data: (function () {
            // console.log(message.payloadString);
            // generate an array of random data
            var data5 = [];
                time = (new Date()).getTime(), i+1;

            for (var i = -999; i <= 0; i += 1) {
                data5.push([
                    time + i * 1000,
                    0
                ]);
            }
            return data5;

        }())

    },

    ],

});
