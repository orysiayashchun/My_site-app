// google.charts.load("current", {packages:["corechart"]});
//     google.charts.setOnLoadCallback(drawChart);
//     function drawChart() {
//       var data = google.visualization.arrayToDataTable([
//         ['Task', 'Hours per Day'],
//         ['Work',     11],
//         ['Eat',      2],
//         ['Commute',  2],
//         ['Watch TV', 2],
//         ['Sleep',    7]
//       ]);
//
//       var options = {
//         title: 'My Daily Activities',
//         pieHole: 0.4,
//       };
//
//       var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
//       chart.draw(data, options);
//     }
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
