Highcharts.chart('container', {

    data: {
        csv: document.getElementById('csv').innerHTML
    },

    chart: {
        type: 'heatmap',
        inverted: true
    },

    boost: {
        useGPUTranslations: true
    },

    title: {
        text: 'Bluetooth Signal Strength Heat Map',
        align: 'left',
        x: 40
    },

    subtitle: {
        text: 'Manual Scanning Left -> Right, Right -> Left',
        align: 'left',
        x: 40
    },

    xAxis: {
        title: {
            text: null
        },
        labels: {
            format: '{value}'
        },
        minPadding: 0,
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false,
        tickWidth: 1,
        min: 1,
        reversed: true
    },

    yAxis: {
        title: {
            text: null
        },
        labels: {
            format: '{value}'
        },
        minPadding: 0,
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false,
        tickWidth: 1,
        min: 1,
        reversed: false
    },

    colorAxis: {
        stops: [
            [0, '#3060cf'],
            [0.5, '#fffbbc'],
            [0.9, '#c4463a'],
            [1, '#c4463a']
        ],
        startOnTick: false,
        endOnTick: false,
        labels: {
            format: '{value}dB'
        }
    },

    series: [{
        boostThreshold: 100,
        borderWidth: 0,
        nullColor: '#EFEFEF',
        colsize: 1,
        tooltip: {
            headerFormat: 'Signal Strength<br/>',
            pointFormat: '{point.x} {point.y}: <b>{point.value}</b>'
        },
        turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
    }]

});
