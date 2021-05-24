function CalcularMedia() {
    var prog
    var bbdd
    var eedd
    var llmm
    var ing
    var media
    var media2;

    prog = document.getElementById("programacion").value;
    bbdd = document.getElementById("bbdd").value;
    eedd = document.getElementById("eedd").value;
    llmm = document.getElementById("llmm").value;
    ing = document.getElementById("ing").value;

    media = (parseFloat(prog) + parseFloat(bbdd) + parseFloat(eedd) + parseFloat(llmm)) / 4;
    media2= (parseFloat(prog) + parseFloat(bbdd) + parseFloat(eedd) + parseFloat(llmm) + parseFloat(ing)) / 5;

    document.getElementById("media").value = media.toFixed(2);
    document.getElementById("media2").value = media2.toFixed(2);


    return false;
}
