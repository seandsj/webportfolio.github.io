document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.querySelector('.button.primary');

    downloadButton.addEventListener('click', function () {
       
        var downloadLink = 'developer_resume.pdf';
        window.open(downloadLink, '_blank');
    });
});
