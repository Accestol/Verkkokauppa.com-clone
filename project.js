document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const clearButton = document.getElementById('clear-button');

    clearButton.addEventListener('click', () => {
        searchInput.value = ''; 
    });

    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== '') {
            clearButton.style.display = 'block';
        } 
        else {
            clearButton.style.display = 'none';
        }

    });
});



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    const menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });
});