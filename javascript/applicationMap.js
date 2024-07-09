import { navMap, handleTransition, userHomeTracking } from './navigator.js';

const pageNames = {
    'PageA': 'Launch',
    'PageB': 'Services',
    'PageB-1R': 'Software',
    'PageB-2R': 'Hardware',
    'PageB-1L': 'Cloud',
    'PageB-2L': 'Modeling',
    'PageC': 'About',
    'PageD': 'Connect'
};

function pageRosetta(pageId) {
    return pageNames[pageId] || pageId;
}

function isSubTrack(pageId) {
    return pageId.charAt(pageId.length - 3) === '-';
}

function collectSequenceData() {
    const nodes = [
        { id: "PageA", index: 0 },
        { id: "PageB", index: 1 },
        { id: "PageB-1R", index: 2 },
        { id: "PageB-2R", index: 3 },
        { id: "PageB-1L", index: 4 },
        { id: "PageB-2L", index: 5 },
        { id: "PageC", index: 6 },
        { id: "PageD", index: 7 }
    ];

    const structure = {
        "PageA": ["PageB"],
        "PageB": ["PageB-1R", "PageB-2R", "PageB-1L", "PageB-2L", "PageC"],
        "PageC": ["PageD"]
    };

    const links = Object.entries(structure).flatMap(([source, targets]) =>
        targets.map(target => ({
            source,
            target,
            direction: target.includes("R") ? "right" : target.includes("L") ? "left" : "down"
        }))
    );

    
    
    return { nodes, links };
}

function applyNodeStyles(selection, currentPage) {
    const svg = d3.select('#visualization').select('svg');

    if (!svg.empty()) {
        svg.selectAll('.node')
            .select('circle')
            .attr('fill', d => d.id === currentPage ? '#635DFE' : '#121212');
    } else {
        console.error('SVG element not found in the visualization container.');
    }
    
    selection.select('circle')
        .attr('r', d => isSubTrack(d.id) ? 35 : 45)
        .attr('stroke', d => isSubTrack(d.id) ? '#00B3FF' : '#FFFFFF')
        .attr('stroke-width', 3)
        .attr('fill', d => d.id === currentPage ? '#635DFE' : '#121212');
}

function handleMouseOver(event, d) {
    d3.select(this)
        .select('circle')
        .attr('r', 55)
        .attr('fill', '#EC5C5C')
        .attr('stroke', '#FFFFFF')
        .attr('stroke-width', 3);
}

function handleMouseOut(event, d, currentPage) {
    d3.select(this)
        .call(applyNodeStyles, currentPage);
}

function styleNodes(selection, currentPage) {
    selection
        .call(applyNodeStyles, currentPage)
        .on('mouseover', handleMouseOver)
        .on('mouseout', function(event, d) {
            handleMouseOut.call(this, event, d, currentPage);
        })
        .on('click', (event, d) => nodeClicked(d));
}

function updateNodeStyles(svg, currentPage) {
    svg.selectAll('.node')
        .call(selection => styleNodes(selection, currentPage));
}

function createVisualization(data) {
    const width = window.innerWidth * 1.1;
    const height = window.innerHeight * 0.7;
    const currentPage = document.querySelector('.visible').id;

    const svg = d3.select('#visualization')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const simulation = d3.forceSimulation(data.nodes)
        .force('link', d3.forceLink(data.links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('x', d3.forceX().strength(0.1).x(d => {
            if (d.id === 'PageA') return width / 2;
            if (d.id === 'PageB-1L') return width / 2 - 200;
            if (d.id === 'PageB-1R') return width / 2 + 200;
            if (d.id === 'PageB-2L') return width / 2 - 200;
            if (d.id === 'PageB-2R') return width / 2 + 200;
            if (d.id === 'PageB') return width / 2;
            if (d.id === 'PageC') return width / 2;
            if (d.id === 'PageD') return width / 2;
        }))
        .force('y', d3.forceY().strength(0.1).y(d => {
            if (d.id === 'PageA') return height / 2 - 300;
            if (d.id === 'PageB-1L') return height / 2 - 100;
            if (d.id === 'PageB-1R') return height / 2 - 100;
            if (d.id === 'PageB-2L') return height / 2 + 100;
            if (d.id === 'PageB-2R') return height / 2 + 100;
            if (d.id === 'PageB') return height / 2;
            if (d.id === 'PageC') return height / 2 + 200;
            if (d.id === 'PageD') return height / 2 + 300;
        }));

    const link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(data.links)
        .enter().append('line')
        .attr('stroke-width', 2)
        .attr('stroke', '#EE5C5C');

    const node = svg.append('g')
        .attr('class', 'nodes')
        .selectAll('.node')
        .data(data.nodes)
        .enter().append('g')
        .attr('class', 'node')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    node.append('circle')
        .call(applyNodeStyles, currentPage)
        .attr('opacity', 0.8)
        .on('click', (event, d) => nodeClicked(d));

    node.append('text')
        .attr('dx', 0)
        .attr('dy', '.25em')
        .attr('text-anchor', 'middle')
        .attr('class', 'unselectable')
        .attr('fill', '#FFFFFF')
        .text(d => pageRosetta(d.id));

    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node
            .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    

    

 

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    document.querySelectorAll('.page button').forEach(button => {
        button.addEventListener('click', (event) => {
            const currentPage = event.target.dataset.nextPage;
            updateNodeStyles(svg, currentPage);
        });
    });

    // Initial styling application
    updateNodeStyles(svg, currentPage);
}

let isNavigating = false;

async function nodeClicked(node) {
    if (isNavigating) {
        console.log('Navigation already in progress. Please wait.');
        return;
    }

    isNavigating = true;

    const navbar = document.querySelector('.navbar');
    const toggleButton = document.getElementById('toggleNavbar');
    const closeButton = document.getElementById('closeNavbar');
    const navbarContent = document.getElementById('navbarContent');

    if (!navbar || !toggleButton || !closeButton || !navbarContent) {
        console.error('Navbar, toggleButton, closeButton, or navbarContent not found.');
        isNavigating = false;
        return;
    }

    async function collapseNavbar() {
        return new Promise(resolve => {
            navbar.style.height = '10vh';
            toggleButton.style.display = 'block';
            navbarContent.classList.remove('visible');
            navbarContent.classList.add('hidden');
            setTimeout(resolve, 500); // Adjust based on the CSS transition duration
        });
    }

    await collapseNavbar();

    const startingPosition = document.querySelector('.visible:not([id*="navbar"])').id;
    const finalPosition = node.id;

    

    const path = navMap.getPath(startingPosition, finalPosition);

    if (!path) {
        console.error('No valid path found from', startingPosition, 'to', finalPosition);
        isNavigating = false;
        return;
    }

    

    async function executePath(path) {
        for (let i = 1; i < path.length; i++) {
            const currentPage = document.getElementById(path[i - 1]);
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

    await executePath(path);
    
    userHomeTracking.push(finalPosition);
    performTask(node);

    const svg = d3.select('#visualization').select('svg');
    updateNodeStyles(svg, finalPosition); // Pass the existing SVG container

    isNavigating = false;
}



function performTask(node) {
    console.log(`Performing task for node: ${node.id}`);
}

const sequenceData = collectSequenceData();
createVisualization(sequenceData);

