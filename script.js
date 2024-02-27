document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.querySelector('.button.primary');

    downloadButton.addEventListener('click', function () {
       
        var downloadLink = 'developer_resume_dsj.pdf';
        window.open(downloadLink, '_blank');
    });
});
