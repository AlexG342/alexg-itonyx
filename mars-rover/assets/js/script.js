function getPhotos() {
    "use strict";

    var form = $("#myform");

    form.validate();

    if (form.valid()) {

        var photoDate = document.getElementById("photoDate").value;
        var apiKey="joqCvhQthRGujCdFwOmASNib6mw6cx12461fL5V1";
        var roverChoice;
        if (document.getElementById("Curiosity").checked) {
            roverChoice = document.getElementById("Curiosity").value;
        }
        if (document.getElementById("Opportunity").checked) {
            roverChoice = document.getElementById("Opportunity").value;
        }
        if (document.getElementById("Spirit").checked) {
            roverChoice = document.getElementById("Spirit").value;
        }



function clearform() {
    for (var i = 0; i < 25; i++) {
        document.getElementById("Curiosity").checked = false;
        document.getElementById("Opportunity").checked = false;
        document.getElementById("Spirit").checked = false;
        document.getElementById("photoDate").value = "";
        document.getElementById("roverError").innerHTML = "";
        document.getElementById("photoDateError").innerHTML = "";
        document.getElementById("image" + i).src = "#";
        document.getElementById("anchor" + i).href = "";
        document.getElementById("image" + i).title = "";
        document.getElementById("text1").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
    }
}

}