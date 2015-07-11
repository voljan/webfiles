function init() {
    var bHaveFileAPI = (window.File && window.FileReader);
    if (!bHaveFileAPI) {
        alert("This browser doesn't support the File API");
        return;
    }
    document.getElementById("fileElem").addEventListener("change", onFileChanged);
}

function onFileChanged(theEvt) {
    var files = theEvt.target.files;
    var totalBytes = 0;

    for (var i = 0; i, files.length; i++) {
        var fileInfo = "<p>File name: " + files[i].name + "; size: " + files[i].size + "; type: " + files[i].type + "</p>";
        totalBytes += files[i].size;
        document.getElementById('filedata').innerHTML += fileInfo;
    }
    alert("You selected a file: " + theEvt.target.files[0].name);
    document.getElementById('filedata').innerHTML += "<p>Total of " + files.length + " files" + totalBytes + " bytes.";
}
window.addEventListener("load", init);