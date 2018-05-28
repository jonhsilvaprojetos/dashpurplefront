// canvas grafico_estatisticas
var estatisticasGraph = $('.grafico-estatisticas');
var trafegoGraph = $('.grafico-trafego');

var grafico_estatisticas = new Chart(estatisticasGraph, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
        datasets: [{
            label: 'Vendas',
            data:[8, 15, 58, 80, 82, 73, 94, 108],
            backgroundColor:'rgba(254,122,149,0.8)',
            borderWidth: 1
        },{
            label: 'Pedidos',
            data:[12, 25, 68, 90, 95, 93, 114, 158],
            backgroundColor:'rgba(4,126,223,0.8)',
            borderWidth: 1
        },{
            label: 'Visitas',
            data:[150, 200, 250, 210, 322, 333, 444, 538],
            backgroundColor:'rgba(6,185,157,.8)',
            borderWidth: 1
        }]

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

});

var grafico_trafego = new Chart(trafegoGraph, {
    type: 'doughnut',
    data: {
        labels: ['Campanha facebook', 'Acesso organico', 'Merchant center'],
        datasets: [{
            label: 'Campanha facebook',
            data:[94, 150, 20],
            backgroundColor:['rgba(254,122,149,0.8)', 'rgba(4,126,223,0.8)', 'rgba(6,185,157,.8)']
        }]
    },
    options: {
        legend: {
            position: 'bottom'
        }
    }
});