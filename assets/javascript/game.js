var playerWins=0;
var playerLosses=0;
var goal_set= Math.floor((Math.random() * 100) + 19);

var red = Math.floor((Math.random() * 12) + 1);
var purple = Math.floor((Math.random() * 12) + 1);
var pink = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);


// start game

// var setNumber;
// function restart() {
//         setNumber = Math.floor((Math.random() * 100) + 19);
//         console.log("this should show" + setNumber);

//         var playerLosses=45;
//        var playerWins=13;
//        console.log("see "+ playerLosses);

        // $(".total").empty();
        // // $('.total').append(total);

        // red = Math.floor((Math.random() * 12) + 1);
        // console.log("see red");
        // purple_rand = Math.floor((Math.random() * 12) + 1);
        // console.log("see purple");
        // pink_rand = Math.floor((Math.random() * 12) + 1);
        // console.log("see pink");
        // blue_rand = Math.floor((Math.random() * 12) + 1);
        // console.log("see blue");
        // updateAddition();
    // }	

var addOn = [];
console.log("test addon " + addOn);


    // if (addOn == user_total) {
    //     playerWins = playerWins + 1;
    //     alert("You win!");
    
    // } else if (addOn > total) {
    //     playerLosses = playerLosses + 1;
    //     alert("You lost");


//java - display talk
$( document ).ready(function() {

    $("#start_btn").click(function() {
        console.log("button worked");
    })

    $("#Pic_Red").click(function() {
        addOn.push(red);
        // function sumAll() {
        //     var total = 0;
        //     $(addOn).each(function() {
        //         total += parseInt($(this).val(), 10) || 0;
        //     });
        //     return(total);
            // console.log("Yes! good "+ total);
        })

    $("#Pic_Purple").click(function(){
        addOn.push(purple);
        // console.log("check purple " + addOn);
    })

    $("#Pic_Pink").click(function(){
        addOn.push(pink);
        // console.log("check pink " + addOn);
    })

    $("#Pic_Blue").click(function(){
        addOn.push(blue);
        // console.log("check blue " + blue);
    })

    // Writting to index 
    document.getElementById("goal_set").innerHTML = goal_set;
    document.getElementById("user_total").innerHTML = user_total;
    document.getElementById("wins").innerHTML =playerWins;
    document.getElementById("score").innerHTML = playerLosses;
    
})