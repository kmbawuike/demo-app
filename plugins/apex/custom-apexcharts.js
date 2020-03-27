// Household

var numhousehold = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        }
    },
    colors: ['#104000', '#F58634'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'Target',
        data: [15000]
    }, {
        name: 'Actual',
        data: [2000]
    }],
    xaxis: {
        categories: ['',''],
    },
    yaxis: {
        title: {
            text: 'Household'
    },
    }
}

var chart = new ApexCharts(
    document.querySelector("#numhousehold"),
    numhousehold
);

chart.render();

//Dairy Farmers

var numfarmers = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'  
        },
    },
     colors: ['#104000', '#F58634'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Target',
        data: [60000]
    }, {
        name: 'Actual',
        data: [1000]
    }],
    xaxis: {
        categories: ['',''],
    },
    yaxis: {
        title: {
            text: 'Farmers'
        }
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "" + val + " thousand"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#numfarmers"),
    numfarmers
);

chart.render();

//Beneficiaries

var numbeneficiaries = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'  
        },
    },
     colors: ['#104000', '#F58634'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Target',
        data: [105000]
    }, {
        name: 'Actual',
        data: [90000]
    }],
    xaxis: {
        categories: ['',''],
    },
    yaxis: {
        title: {
            text: 'Beneficiaries'
        }
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "" + val + " thousand"
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector("#numbeneficiaries"),
    numbeneficiaries
);

chart.render();
