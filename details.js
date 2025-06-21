const my = document.getElementById('mydetails');
my.addEventListener('click', function () {
    const details = document.getElementById('footer');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
        setTimeout(() => {
            details.style.display = 'none';
        }, 10000); // Hide after 10 seconds
    } else {
        details.style.display = 'none';
    }
});