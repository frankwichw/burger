$(document).ready(function() {

    $("#add-burger").on("click", function(event) {
        event.preventDefault();
        var burger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: false
        };
        console.log(burger);
        
        // post request
        $.ajax("/api/burger", {
        type: "POST",
        data: burger
        }).then(
        function() {
            console.log("Burger created.");
            // Reload the page to get the updated list
            location.reload();
        }
        );

    });

    $("#bubber").click(function(){
        alert("you have clicked!");
    });
});