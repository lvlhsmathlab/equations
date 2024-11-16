const arrow = document.getElementById('arrow');

arrow.addEventListener('mousedown', (event) => {
    const onMouseMove = (event) => {
        const numberLine = document.querySelector('.number-line');
        const rect = numberLine.getBoundingClientRect();
        let newLeft = event.clientX - rect.left - arrow.offsetWidth / 2;

        if (newLeft < 0) {
            newLeft = 0;
        }
        if (newLeft > rect.width - arrow.offsetWidth) {
            newLeft = rect.width - arrow.offsetWidth;
        }

        arrow.style.left = newLeft + 'px';
    };

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
});

