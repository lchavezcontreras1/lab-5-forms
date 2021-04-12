//INFO
//when the form is submitted
//display an appropriate greeting ex: Hello Capt. Julie Park
//change color depending on rank

//get submitted form
$(document).ready(function (){
    $("button#form1").click(greeting);
    $("#quantity1").on("change", displayQuantity);
    $("#quantity2").on("change", displayQuantity);
});
function displayQuantity(e){
    e.preventDefault();
    let q1 = parseFloat($("input#quantity1").val())*39;
    $("td#total-quantity1").text("$"+q1.toFixed(2));
    let q2 = parseFloat($("input#quantity2").val())*14.99;
    $("td#total-quantity2").text("$"+q2.toFixed(2));
    let total = q1+q2;
    $("td#grandtotal").text("$"+total.toFixed(2));

}
function displayQuantity2(e){
    e.preventDefault();

}
function greeting(e){
    e.preventDefault();
    //get val for rank
    let rank = $("input[name=rank]:checked").val();
    // let rankColor = rank.data("color");
    //get val for firstname
    let firstName = $("input#firstname").val();
    //get val for lastname
    let lastname = $("input#lastname").val();
    // sentence
    //determine rank
    let string = $("p#form1-output").text(`Hello ${rank} ${firstName} ${lastname}`);

    if(rank === "Sergeant"){
        string.css("color", "#c23c3d");
    }else if(rank === "Captain"){
        string.css("color", "#5fa32f");
    }else if(rank === "Major"){
        string.css("color", "#7ccbda");
    }else if (rank === "Colonel"){
        string.css("color", "#1e91a8");
    }//echo greeting


}

