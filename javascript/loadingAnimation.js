window.onload = function() {
    let loadingBar = document.querySelector('.loading-bar');
    let loadingPage = document.getElementById('LoadingPage');
    let navbar = document.getElementById('navbar');
    let pageA = document.getElementById('PageA');
    let width = 0;
    
    navbar.classList.add('hidden');
    navbar.style.opacity = 0;
    


    let interval = setInterval(function() {
      if (width >= 100) {
        clearInterval(interval);

        
        // Start the fade-out effect for the loading page
        loadingPage.style.opacity = 0;
        setTimeout(() => {
          // After the fade-out is complete, hide the loading page
          loadingPage.classList.add('hidden');
          loadingPage.classList.remove('visible');
          // Make PageA visible and set its opacity to 0 initially
          pageA.classList.remove('hidden');
          pageA.classList.add('visible');
          navbar.classList.remove('hidden');

          pageA.style.opacity = 0;
          
          setTimeout(() => {
            // Start the fade-in effect for PageA
            navbar.style.opacity = 1;
            pageA.style.opacity = 1;
          }, 10); // Slight delay to ensure the transition occurs
        }, 1000); // 1 second for fade-out
      } else {
        width++;
        loadingBar.style.width = width + '%';
      }
    }, 10); // 3000ms / 100 steps = 30ms per step
  };