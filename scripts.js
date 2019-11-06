var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['United States', 'Russia', 'Italy', 'Germany', 'Other'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#3993bb','#65b5c2','#23649e','#2e7bad','#63daed'],
            //borderColor: 'rgb(255, 99, 132)',
          borderWidth:'0',
            data: [24, 16, 10,30, 20]
        }]
    },

    // Configuration options go here
    options: {
      responsive: false,
      cutoutPercentage:60,
      rotation:60,
      animation:{
        animateScale:true
      }
    }
});
