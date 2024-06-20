document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.querySelector('.visible');

    if (!currentPage) {
        console.error('No visible page found.');
        return;
    }

    if (currentPage.id !== 'PageA') {
        return;
    }

    function createCircle(x, y, size) {
        const circle = document.createElement('div');
        circle.className = 'portal';
        circle.style.width = '0px';
        circle.style.height = '0px';
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.dataset.size = size;
        return circle;
    }

    function createLine(x1, y1, x2, y2) {
        const line = document.createElement('div');
        const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
        line.className = 'random-line';
        line.style.position = 'absolute';
        line.style.width = `${length}px`;
        line.style.height = '2px';
        line.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transformOrigin = '0 0';
        line.style.transform = `rotate(${angle}deg)`;
        line.style.zIndex = '-1000';
        return line;
    }

    function openPortal(circle) {
        const keyframes = [
            { width: '0px', height: '0px', opacity: '0' },
            { width: `${circle.dataset.size}px`, height: `${circle.dataset.size}px`, opacity: '1' }
        ];
        return circle.animate(keyframes, { duration: 1000, fill: 'forwards' });
    }

    function closePortal(circle) {
        const keyframes = [
            { width: `${circle.dataset.size}px`, height: `${circle.dataset.size}px`, opacity: '1' },
            { width: '0px', height: '0px', opacity: '0' }
        ];
        return circle.animate(keyframes, { duration: 1000, fill: 'forwards' });
    }

    function moveRocket(rocket, deltaX, deltaY, duration) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
        rocket.style.transform = `rotate(${angle}deg)`;
        rocket.style.opacity = '1';

        const startX = rocket.offsetLeft;
        const startY = rocket.offsetTop;
        const startTime = performance.now();

        function animateRocket(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            rocket.style.left = `${startX + deltaX * progress}px`;
            rocket.style.top = `${startY + deltaY * progress}px`;

            if (progress < 1) {
                requestAnimationFrame(animateRocket);
            }
        }

        requestAnimationFrame(animateRocket);

        const fuelInterval = 100;
        const numFuelOrbs = duration / fuelInterval;
        let fuelCount = 0;

        const fuelIntervalId = setInterval(() => {
            if (fuelCount >= numFuelOrbs) {
                clearInterval(fuelIntervalId);
                return;
            }
            const fuelOrb = document.createElement('div');
            fuelOrb.className = 'fuel-orb';
            const rocketRect = rocket.getBoundingClientRect();
            fuelOrb.style.left = `${rocketRect.left + rocketRect.width / 2 - 10}px`;
            fuelOrb.style.top = `${rocketRect.top + rocketRect.height / 2 - 10}px`;
            currentPage.appendChild(fuelOrb);

            setTimeout(() => fuelOrb.remove(), 1000);

            fuelCount++;
        }, fuelInterval);
    }

    function fadeOutRocket(rocket, duration) {
        return rocket.animate([{ opacity: 1 }, { opacity: 0 }], { duration: duration, fill: 'forwards' });
    }

    function initializeAnimation() {
        currentPage.querySelectorAll('.portal, .random-line, .rocketship').forEach(element => element.remove());

        const containerWidth = currentPage.clientWidth;
        const containerHeight = currentPage.clientHeight - 25 * window.innerHeight / 100;

        const size1 = Math.random() * 100 + 50;
        const x1 = Math.random() * containerWidth;
        const y1 = 15 * window.innerHeight / 100 + Math.random() * containerHeight;

        const circle1 = createCircle(x1, y1, size1);
        currentPage.appendChild(circle1);

        let x2, y2, size2;
        do {
            size2 = Math.random() * 100 + 50;
            x2 = Math.random() * containerWidth;
            y2 = 15 * window.innerHeight / 100 + Math.random() * containerHeight;
        } while (Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) < containerHeight * 0.5);

        const circle2 = createCircle(x2, y2, size2);
        currentPage.appendChild(circle2);

        const centerX1 = x1 + size1 / 2;
        const centerY1 = y1 + size1 / 2;
        const centerX2 = x2 + size2 / 2;
        const centerY2 = y2 + size2 / 2;

        const deltaX = centerX2 - centerX1;
        const deltaY = centerY2 - centerY1;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;

        const rocket = document.createElement('div');
        rocket.className = 'rocketship';
        rocket.style.left = `${centerX1 - 20}px`;
        rocket.style.top = `${centerY1 - 40}px`;
        rocket.style.transform = `rotate(${angle}deg)`;
        rocket.style.zIndex = '-999';
        rocket.style.opacity = '0';

        currentPage.appendChild(rocket);

        openPortal(circle1);

        setTimeout(() => {
            rocket.style.opacity = '1';
            moveRocket(rocket, deltaX, deltaY, 3000);

            setTimeout(() => {
                openPortal(circle2);

                fadeOutRocket(rocket, 1000).onfinish = () => {
                    rocket.remove();
                    closePortal(circle2).onfinish = initializeAnimation;
                };

            }, 2000);

            setTimeout(() => closePortal(circle1), 1000);

        }, 1000);
    }

    initializeAnimation();
});


