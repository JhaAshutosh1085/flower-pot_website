// Smooth scroll for the "Shop Now" button
document.querySelector('.scroll-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});
// Add sticky class to header when scrolling
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
