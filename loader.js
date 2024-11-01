document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {

        event.preventDefault();


        document.getElementById('loader').style.display = 'flex';


        setTimeout(() => {
            window.location.href = this.href;
        }, 700); 
    });
});