
//cursor animation
var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove" , function(dets){
    cursor.style.top=dets.y+(-15)+"px"
    cursor.style.left=dets.x +(-15) +"px"
})

// cart aimation
var cart = document.querySelector("#cart")
var mycart = document.querySelector("#mycart")

var cartclose = document.querySelector("#cartclose")
mycart.addEventListener("click", function(){1
    cart.style.left="0"
})
cartclose.addEventListener("click", function(){
    cart.style.left="100%"

})



//  card product qnt
var cartqnt = document.querySelectorAll(".cartqnt")
var minus = document.querySelector(".minus")
var plus = document.querySelector(".plus")
console.log(cartqnt)
cartqnt.forEach((eachqnt)=>{
    eachqnt.value=1
    minus.addEventListener("click", function() {
        if (eachqnt.value > 1) {
            eachqnt.value = parseInt(eachqnt.value) - 1;
        }
        console.log(eachqnt.value)
    });
})
cartqnt.value = 1;

// minus.addEventListener("click", function() {
//     if (cartqnt.value > 1) {
//         cartqnt.value = parseInt(cartqnt.value) - 1;
//     }
//     console.log(cartqnt.value)
// });

plus.addEventListener("click", function() {
    cartqnt.value = parseInt(cartqnt.value) + 1;
    console.log(cartqnt.value)
});







//product Detail specification
// var part =  document.querySelector(".part1")
// var up =  document.querySelectorAll(".up")
// var down =  document.querySelectorALl(".down")
// var line =  document.querySelectorALl(".line")

var open =0
// part.addEventListener("click", function(){
//     if(open===0){
//         line.style.rotate = "-20deg"
//         down.style.height = "200px"
//         down.style.opacity= "1"
//         console.log("click")
//         open=1;
//     }
//     else{
//         line.style.rotate = "0deg"
//         down.style.height = "0px"
//         down.style.opacity= "0"
//         open =0
//     }
// })




//open the para

document.querySelectorAll(".line").forEach(function(sin){
    sin.addEventListener("click", function(){
        if(open===0){
            sin.style.rotate = "-20deg"
            document.querySelectorAll(".down").forEach(function(err){
                err.style.height = "200px"
                err.style.opacity= "1"
            })
            // document.querySelector(".down").style.opacity= "1"
            console.log("click on line")
            open=1;
        }
        else{
            sin.style.rotate = "0deg"
            // down.style.height = "0px"
            // down.style.opacity= "0"
            document.querySelectorAll(".down").forEach(function(err){
                err.style.height = "0px"
                err.style.opacity= "0"
            })
            open =0
        }
    })
})




// try again slide down code , slide only one component








