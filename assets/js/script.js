document.getElementById("downloadBtn").addEventListener("click", function () {
    // Replace 'path/to/cv.pdf' with the actual path to your CV file
    var downloadLink = document.createElement("a");
    downloadLink.href = "../cv.pdf";
    downloadLink.download = "sean_desanjose_cv.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
