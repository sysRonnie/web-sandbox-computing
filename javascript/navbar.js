document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.getElementById('toggleNavbar');
    const closeButton = document.getElementById('closeNavbar');
    const navbarContent = document.getElementById('navbarContent');
    let isExpanded = false;

    function expandNavbar() {
        navbarContent.classList.remove('hidden');
        navbar.style.height = '100vh'; // Expand to 100vh
        toggleButton.style.display = 'none';
        setTimeout(() => {
            navbarContent.classList.add('visible');
        }, 50); // Short delay to ensure height transition starts
        isExpanded = true;
    }

    function collapseNavbar() {
        navbar.style.height = '10vh'; // Collapse back to 10vh
        toggleButton.style.display = 'block';
        navbarContent.classList.remove('visible');
        setTimeout(() => {
            navbarContent.classList.add('hidden');
        }, 500); // Delay to match the transition duration
        isExpanded = false;
    }

    toggleButton.addEventListener('click', expandNavbar);
    closeButton.addEventListener('click', collapseNavbar);

    navbar.addEventListener('transitionend', (event) => {
        if (!isExpanded && event.propertyName === 'height') {
            navbarContent.classList.add('hidden');
        }
    });
});
