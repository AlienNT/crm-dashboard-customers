window.addEventListener('load', () => {
    hideLoader(500)
})

function hideLoader(delay = 100) {
    const loader = document.querySelector('.loader-wrapper');
    const main = document.querySelector('main');

    // main.style.opacity = '0';

    setTimeout(() => {
        loader.style.cssText = 'opacity: 0; visibility: hidden; transition: .5s ease;';
    }, delay)
}