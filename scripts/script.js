function createGrid(x){
    for (var row = 0; row < x; row++){
        for (var column = 0; column < x; column++){
            $("#container").append("<div class='grid'> </div>");
            // console.log(row + " " + column);
        };
    };
    $(".grid").width(500 / x);
    $(".grid").height(500 / x);
};  // creates the grid

function clearGrid(){
    $(".grid").remove();
}

$(document).ready(function(){
    createGrid(16);    

    $(".grid").on("mouseenter", function(){
        $(this).css({
            "background-color" : "black"
        });
    });
});