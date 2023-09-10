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