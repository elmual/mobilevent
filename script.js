
const header = document.getElementById('header');

header.addEventListener('touchstart', e => {
    console.log('Toxunus', e.touches.length);
    // body-de istenilen yere toxunusu sayir
    console.log('Target', e.targetTouches.length);
    // yalniz header deyisendeki toxunusu sayir
})

document.addEventListener('touchstart', e => {
    [...e.changedTouches].forEach(touch => {
        const barmaq = document.createElement('div');
        barmaq.classList.add('barmaq');
        barmaq.style.top = `${touch.pageY}px`;
        barmaq.style.left = `${touch.pageX}px`;
        barmaq.id = touch.identifier;
        document.body.append(barmaq);
    })
});

document.addEventListener('touchmove', e => {
    [...e.changedTouches].forEach(touch => {
        const barmaq = document.getElementById(touch.identifier);
        barmaq.style.top = `${touch.pageY}px`;
        barmaq.style.left = `${touch.pageX}px`;
    })
});

document.addEventListener('touchend', e => {
    [...e.changedTouches].forEach(touch => {
        const barmaq = document.getElementById(touch.identifier);
        barmaq.remove();
    })
});

