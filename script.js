
var computer = Math.floor(Math.random() * 100) + 1;
var tries = []
console.log(computer)
$("#textarea1").on('keypress', function (e) {
    if (e.which == 13) {
        var player = $("#textarea1").val();
        player = player.trim();
        player = parseInt(player)
        if ($.inArray(player, tries)=== -1){
            tries.push(player)
            $("#guesses").append(player + ", ")
        }

    
        if (player == computer) {
            alert(`Winner winner, chicken dinner! You took ${tries.length} guesses.`);

        }else if (player < computer) {
            alert("Too Low, guess again!")
        }else {
            alert("Too high, guess again!")
        }
        $("form")[0].reset();
        $("#textarea1").blur()
    }
});
$("#restart").click(function(){
    computer = Math.floor(Math.random() * 100) + 1;
    tries = [];
    $("#guesses").html("")
    console.log(computer)
})

$("#giveup").click(function(){
    alert(`The computer's number was: ${computer}`)
})