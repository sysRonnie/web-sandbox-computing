import { navMap, handleTransition, userHomeTracking } from './navigator.js';

document.addEventListener("DOMContentLoaded", function() {
    const homeNavigatorButton = document.getElementById('navbar-home-navigator');
    if (homeNavigatorButton) {
        homeNavigatorButton.addEventListener('click', async function() {
            const startingPosition = document.querySelector('.visible:not([id*="navbar"])').id;
            const finalPosition = "PageA";
            const path = navMap.getPath(startingPosition, finalPosition);

            console.log(path);

            async function executePath(path) {
                for (let i = 1; i < path.length; i++) {
                    let currentPage = document.getElementById(path[i - 1]);
                    if (currentPage.id === 'LoadingPage') {
                        currentPage = document.getElementById('PageA');
                    }
                    const nextPage = document.getElementById(path[i]);
                    const connection = navMap.getConnections(currentPage.id).find(c => c.to === nextPage.id);

                    if (connection) {
                        await new Promise(resolve => {
                            handleTransition(connection.direction, currentPage, nextPage, 0.75, resolve);
                        });
                    } else {
                        console.error(`No connection found from ${currentPage.id} to ${nextPage.id}`);
                    }
                }
            }

            userHomeTracking.push(finalPosition);
            await executePath(path);
            console.log(userHomeTracking);
        });
    }
});
