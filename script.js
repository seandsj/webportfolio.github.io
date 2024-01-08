document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.querySelector('.button.primary');

    downloadButton.addEventListener('click', function () {
       
        var downloadLink = 'SD.pdf';
        window.open(downloadLink, '_blank');
    });
});
