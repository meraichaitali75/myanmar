$('#createBoard').click(function () {
    var chooseBoards = document.getElementById("chooseBoards");
    var createNewBoards = document.getElementById("createNewBoards");

    chooseBoards.style.display = "none";
    createNewBoards.style.display = "block";
});
$('#showBoards').click(function () {
    var chooseBoards = document.getElementById("chooseBoards");
    var createNewBoards = document.getElementById("createNewBoards");

    chooseBoards.style.display = "block";
    createNewBoards.style.display = "none";
});