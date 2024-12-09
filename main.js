document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor');
    if (!anchor) {
        console.error('Anchor element not found!');
        return;
    }

    const rect = anchor.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const offsetX = (mouseX - anchorX) / 10;
    const offsetY = (mouseY - anchorY) / 10;


    const link = document.querySelectorAll('#link');
    link.forEach(link => {
        link.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});

