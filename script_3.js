var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['0', '27', '60', '75','90', '110', '123', '140','155','170','185','250'],
   datasets: [{
      label: 'My First dataset',
       //labels: ['0', '27', '60', '72','92', '110', '122', '135','155','168','185','225'],
 //labels: ['0', '27', '60', '75','90', '110', '123', '140','155','170','185','250'],
       data: [0, 1, 7, 3, 7, 5, 14,2,10,4,6,0],
       backgroundColor: '#3993bb',
       // Changes this dataset to become a line
      // type: 'line'
   },
{




   label: 'My First dataset',
       backgroundColor: '#86d3ce',
      // borderColor: 'rgb(255, 99, 132)',
       data: [0, 2, 18, 8, 13, 11, 56,15,26,11,13,0]
        }]
    },
legend:{
  position:'right'
},
    // Configuration options go here
    options: {
responsive: false,
  }
});
