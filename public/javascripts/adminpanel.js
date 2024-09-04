var icon = document.querySelector("#menuicon")

var cross = document.querySelector(".cross")
var menu = document.querySelector("#main #left")
var right = document.querySelector("#main #right")
icon.addEventListener("click", function(){
    menu.style.left= "0",
    right.style.opacity= "0.5"
})
cross.addEventListener("click",function(){
    menu.style.left= "-65%",
    right.style.opacity= "1"

}
)




//chart 1
const ctx = document.getElementById('myChart');
var a=3

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Teus', 'Wed', 'Thurs', 'Fri', 'Satur', 'Sun'],
    datasets: [{
      label: ' sale ',
      data: [2,4,2,7, 4, 5, 5, 2, 3,2,1,4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(215, 122, 138, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
    
  }
  
});