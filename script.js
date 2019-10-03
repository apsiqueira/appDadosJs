/**
 *
 *
 */




function jogarDado() {
    var faceCorreta = Math.floor(Math.random() * 6 + 1);

    switch (faceCorreta) {
        case 1:
            document.getElementById("imagemDado").src = "imagens/face1.png"

            break;
        case 2:
            document.getElementById("imagemDado").src = "imagens/face2.png";
            break;
        case 3:
            document.getElementById("imagemDado").src = "imagens/face3.png";
            break;
        case 4:
            document.getElementById("imagemDado").src = "imagens/face4.png";
            break;
        case 5:
            document.getElementById("imagemDado").src = "imagens/face4.png";
            break;
            document.getElementById("imagemDado").src = "imagens/face5.png";
        case 6:
            document.getElementById("imagemDado").src = "imagens/face6.png";
            break;
        default:
            alert("Numero fora do range do dado");

            break;
    }
}
