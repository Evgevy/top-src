const initArrow = () => {
    const accentItems = document.querySelectorAll('.main-nav__item--accent');
    accentItems.forEach(item => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // Используем createElementNS для SVG
        svg.setAttribute('width', '20');
        svg.setAttribute('height', '17');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('viewBox', '0 0 20 17'); 

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); 
        path.setAttribute('d', 'M10 17L20 0H0L10 17Z');
        path.setAttribute('fill', 'white'); 

        svg.appendChild(path); 
        item.appendChild(svg);
    });
}

export { initArrow };