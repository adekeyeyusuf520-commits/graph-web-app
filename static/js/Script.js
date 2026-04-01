let chart;

function renderChart(type, data) {
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(document.getElementById('myChart'), {
    type: type,
    data: {
      labels: data.labels,
      datasets: [{
        label: 'Example Data',
        data: data.values,
        backgroundColor: ['blue', 'green', 'orange', 'purple'],
        borderColor: 'black',
        fill: false
      }]
    }
  });
}

fetch('/data')
  .then(response => response.json())
  .then(data => {
    renderChart('line', data);

    document.getElementById('chartType').addEventListener('change', function() {
      renderChart(this.value, data);
    });
  });
