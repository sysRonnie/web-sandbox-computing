function createOrb() {
    const orb = document.createElement('div');
    orb.classList.add('orb');
    const size = Math.random() * 5 + 5; // Size between 5 and 10
    const initialX = Math.random() * window.innerWidth;
    const initialY = Math.random() * window.innerHeight;
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;
    orb.style.left = `${initialX}px`;
    orb.style.top = `${initialY}px`;
    orb.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)'; // Glow effect
    document.body.appendChild(orb);
    return orb;
}

function animateOrb(orb) {
    const moonImage = document.querySelector('.moon');
    const moonRect = moonImage.getBoundingClientRect();
    const targetX = moonRect.left + moonRect.width / 2;
    const targetY = moonRect.top + moonRect.height / 2;
    const dx = targetX - parseInt(orb.style.left, 10);
    const dy = targetY - parseInt(orb.style.top, 10);
    const speed = (Math.random() * 3 + 2) * 1000; // Speed between 2000ms and 5000ms
    const delay = Math.random() * 0; // Delay up to 1000ms

    orb.style.transition = `transform ${speed}ms ease-in-out ${delay}ms`;
    orb.style.transform = `translate(${dx}px, ${dy}px)`;

    orb.addEventListener('transitionend', () => {
        orb.remove(); // Remove the orb after reaching the target
        createAndAnimateOrb(); // Spawn a new orb
    });
}

function createAndAnimateOrb() {
    const orb = createOrb();
    animateOrb(orb);
}

function createAndAnimateInitialOrbs(count) {
    for (let i = 0; i < count; i++) {
        createAndAnimateOrb();
    }
}

function responsiveOrbCount() {
    const width = window.innerWidth;
    if (width < 600) {
        return 50; // Fewer orbs for smaller screens
    } else {
        return 100; // More orbs for larger screens
    }
}

createAndAnimateInitialOrbs(responsiveOrbCount());