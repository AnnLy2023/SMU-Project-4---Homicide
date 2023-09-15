$(document).ready(function() {
    console.log("Page Loaded");

    $("#filter").click(function() {
        // alert("button clicked!");
        makePredictions();
    });
});


// call Flask API endpoint
function makePredictions() {
    var sex = $("#sex").val();
    var age = $("#age").val();
    var race = $("#race").val();
    var month = $("#month").val();
    var weekday = $("#weekday").val();
    var season = $("#season").val();
    var city = $("#city").val();
    var state = $("#state").val();


    // check if inputs are valid

    // create the payload
    var payload = {
        "sex": sex,
        "age": age,
        "race": race,
        "month": month,
        "weekday": weekday,
        "season": season,
        "city": city,
        "state": state
    }

    // Perform a POST request to the query URL
    $.ajax({
        type: "POST",
        url: "/ml_form",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ "data": payload }),
        success: function(returnedData) {
            // print it
            console.log(returnedData);

            if (returnedData["prediction"] === "1") {
                $("#output").text("You Survived!");
            } else {
                $("#output").text("You did not survive, sorry. :(");
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });

}
