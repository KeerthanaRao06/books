// scripts.js
document.querySelectorAll('.author img').forEach(img => {
    img.addEventListener('click', function() {
        const books = this.nextElementSibling;
        books.style.display = books.style.display === 'block' ? 'none' : 'block';
    });
});
