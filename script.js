//INFO
//when the form is submitted
//display an appropriate greeting ex: Hello Capt. Julie Park
//change color depending on rank

//get submitted form
$(document).ready(function (){
    $("button#form1").click(greeting);
    $("#quantity1").on("change", displayQuantity1);
    $("#quantity2").on("change", displayQuantity2);
});
function displayQuantity1(e){
    e.preventDefault();
    let total = parseFloat($("input#quantity1").val())*39;
    $("td#total-quantity1").text("$"+total.toFixed(2));

}
function displayQuantity2(e){
    e.preventDefault();
    let total = parseFloat($("input#quantity2").val())*14.99;
    $("td#total-quantity2").text("$"+total.toFixed(2));
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

