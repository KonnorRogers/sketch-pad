$(document).ready(function(){
    for (var row = 0; row < 16; row++){
        for (var column = 0; column < 16; column++){
        
            $(".table").append("<div class=grid id=" + row + "," + column + "> </div>");
            
            // console.log(row + " " + column);
        }
    }
    // creates the grid

    $(".grid").on("mouseenter", function(){
        $(this).css({
            "background-color" : "black"
        })
    });
});