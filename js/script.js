const checkbox = document.getElementById('hamburger');
const main = document.getElementById('main');
const headerRow = document.getElementById('header__row');
const footer = document.getElementById('footer');
const header = document.getElementById('header');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        main.style.display = 'none';
        headerRow.style.display = 'none';
        footer.style.display = 'none';
        header.style.height = '100vh';
    } else {
        main.style.display = '';
        headerRow.style.display = '';
        footer.style.display = '';
        header.style.height = '';
    }
});