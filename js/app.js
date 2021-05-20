function CalcularMedia() {
    var prog
    var bbdd
    var eedd
    var llmm
    var media;

    prog = document.getElementById("programacion").value;
    bbdd = document.getElementById("bbdd").value;
    eedd = document.getElementById("eedd").value;
    llmm = document.getElementById("llmm").value;

    media = (parseFloat(prog) + parseFloat(bbdd) + parseFloat(eedd) + parseFloat(llmm)) / 4;

    document.getElementById("media").value = media.toFixed(2);


    return false;
}