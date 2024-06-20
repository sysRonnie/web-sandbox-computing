class NavigationMap {
    constructor() {
        this.pages = {};
    }

    addPage(id) {
        if (!this.pages[id]) {
            this.pages[id] = [];
        }
    }

    addConnection(from, to, direction) {
        this.pages[from].push({ to, direction });
    }

    getConnections(page) {
        return this.pages[page] || [];
    }

    getPath(from, to, visited = new Set()) {
        if (from === to) return [from];
        visited.add(from);
    
        for (let connection of this.getConnections(from)) {
            if (!visited.has(connection.to)) {
                let path = this.getPath(connection.to, to, visited);
                if (path) {
                    return [from, ...path];
                }
            }
        }
        visited.delete(from);
        return null;
    }
    

    getAllPaths() {
        let paths = [];

        const pages = Object.keys(this.pages);
        for (let from of pages) {
            for (let to of pages) {
                if (from !== to) {
                    let path = this.getPath(from, to);
                    if (path) {
                        paths.push(path);
                    }
                }
            }
        }

        return paths;
    }
}



export function transformPathsToD3Data(paths) {
    let nodes = new Set();
    let links = [];

    paths.forEach(path => {
        for (let i = 0; i < path.length; i++) {
            nodes.add(path[i]);
            if (i < path.length - 1) {
                links.push({ source: path[i], target: path[i + 1] });
            }
        }
    });

    return {
        nodes: Array.from(nodes).map(id => ({ id })),
        links
    };
}

export const navMap = new NavigationMap();
export let userHomeTracking = [];
let currentTrack = '';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.page').forEach(page => {
        navMap.addPage(page.id);
        page.querySelectorAll('button').forEach(button => {
            const from = button.getAttribute('data-current-page');
            const to = button.getAttribute('data-next-page');
            const direction = button.getAttribute('data-direction');
            navMap.addConnection(from, to, direction);
        });
    });

    const allPaths = navMap.getAllPaths();
   

});

export function handleTransition(direction, currentPage, nextPage, timing, callback) {
    

    document.querySelectorAll('.page').forEach(page => {
        if (page !== currentPage) {
            page.classList.remove('visible');
            page.classList.add('hidden');
            page.style.transition = '';
            page.style.transform = '';
        }
    });

    nextPage.classList.remove('hidden');
    nextPage.classList.add('visible');

    switch (direction) {
        case 'down':
            nextPage.style.transform = 'translateY(100%)';
            break;
        case 'right':
            nextPage.style.transform = 'translateX(100%)';
            break;
        case 'left':
            nextPage.style.transform = 'translateX(-100%)';
            break;
        case 'up':
            nextPage.style.transform = 'translateY(-100%)';
            break;
        case 'home':
            returnToHome();
            return;
    }

    nextPage.offsetHeight;

    currentPage.style.transition = `transform ${timing}s ease-in-out`;
    nextPage.style.transition = `transform ${timing}s ease-in-out`;

    switch (direction) {
        case 'down':
            currentPage.style.transform = 'translateY(-100%)';
            nextPage.style.transform = 'translateY(0)';
            break;
        case 'right':
            currentPage.style.transform = 'translateX(-100%)';
            nextPage.style.transform = 'translateX(0)';
            break;
        case 'left':
            currentPage.style.transform = 'translateX(100%)';
            nextPage.style.transform = 'translateX(0)';
            break;
        case 'up':
            currentPage.style.transform = 'translateY(100%)';
            nextPage.style.transform = 'translateY(0)';
            break;
    }

    setTimeout(() => {
        
        currentPage.classList.remove('visible');
        currentPage.classList.add('hidden');
        currentPage.style.transition = '';
        currentPage.style.transform = '';
        nextPage.style.transition = '';
        nextPage.style.transform = '';
        if (callback) callback();
    }, timing * 1000);
}



function returnToHome() {
    const transitionTiming = 0.75;
    

    if (userHomeTracking.length === 0) return;

    const executeTransitions = (path) => {
        let index = 0;

        const performTransition = () => {
            if (index >= path.length - 1) return;

            const currentPage = document.getElementById(path[index]);
            const nextPage = document.getElementById(path[index + 1]);
            const connection = navMap.getConnections(currentPage.id).find(c => c.to === nextPage.id);

            if (connection) {
                handleTransition(connection.direction, currentPage, nextPage, transitionTiming, () => {
                    index++;
                    performTransition();
                });
            }
        };

        performTransition();
    };

    console.log('User Home Tracking:',userHomeTracking)
    console.log(userHomeTracking[userHomeTracking.length - 1])

    const path = navMap.getPath(userHomeTracking[userHomeTracking.length - 1], 'PageA');

    console.log('Home Path:', path)
    
    if (path) {
        executeTransitions(path);
    }

    userHomeTracking = [];
}

document.querySelector('.page-container').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const button = event.target;
        const direction = button.getAttribute('data-direction');
        const currentPageId = button.getAttribute('data-current-page');
        const nextPageId = button.getAttribute('data-next-page');
        const timing = 1;

        let subTrackLocation = '';
        const currentTrackIndicator = currentPageId.slice(-3, -2);

        if (currentTrackIndicator === '-') {
            currentTrack = 'sub-track';
            subTrackLocation = currentPageId.charAt(currentPageId.length - 3);
        } else {
            currentTrack = 'main-track';
        }

        if (direction === 'home') {
            console.log('Home Sequence Triggered.');
            returnToHome();
        } else {
            if (subTrackLocation === '-' || direction === 'up') {
                userHomeTracking.pop();
            } else {
                userHomeTracking.push(nextPageId);
            }

            const path = navMap.getPath(currentPageId, nextPageId);

            if (!path) {
                console.error('No valid path found from', currentPageId, 'to', nextPageId);
                return;
            }

            let currentPage = document.getElementById(path[0]);

            for (let i = 1; i < path.length; i++) {
                let nextPage = document.getElementById(path[i]);
                let connection = navMap.getConnections(currentPage.id).find(c => c.to === nextPage.id);
                if (connection) {
                    handleTransition(connection.direction, currentPage, nextPage, timing);
                    currentPage = nextPage;
                }
            }
        }
    }
});





