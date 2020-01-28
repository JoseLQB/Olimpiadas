$(document).ready(function() {
    $(".btn").click(function() {
        $(this).css("background-color", "red");
        var respuesta = $(this).attr("id");
        var correcta = $("input").attr("id")
        isCorrect(respuesta, correcta);
    })

})

function isCorrect(respuesta, correcta) {
    if (respuesta == correcta) {
        alert("ACERTADO");
        window.location.href = "index.php";
    } else(alert("ERRROOOOR ,INUTIL"))


}