
const indicator = document.querySelector('.indicator');
const items = document.querySelectorAll('.item');

function handleIndicator(item) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });

    indicator.style.top = `${item.offsetTop + 15}px`;
    item.style.color = item.getAttribute('active-color');

    item.classList.add('is-active');
}

items.forEach((item) => {
    item.addEventListener('click', (e) => {handleIndicator(e.target)});
    item.classList.contains('is-active') && handleIndicator(item);
})