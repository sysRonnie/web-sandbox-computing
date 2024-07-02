const margin = {top: 20, right: 30, bottom: 40, left: 40};

function checkAndRunAnimation() {
    if (!document.querySelector('#scatterplot-container svg')) {
        initializeSVG();
    }
    runAnimation();
}

function forceReflow() {
    const container = document.getElementById('scatterplot-container');
    container.getBoundingClientRect();
}

function updateDimensions() {
    const container = document.getElementById('scatterplot-container');
    const width = container.clientWidth - margin.left - margin.right;
    const height = container.clientHeight - margin.top - margin.bottom;

    d3.select("#scatterplot-container svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`);

    x.range([0, width]);
    y.range([height, 0]);

    d3.selectAll(".x-axis").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
    d3.selectAll(".y-axis").call(d3.axisLeft(y));

    d3.selectAll("circle")
        .attr("cx", d => x(d.x))
        .attr("cy", d => y(d.y));

    const line = d3.line()
        .x(d => x(d.x))
        .y(d => y(d.y));

    d3.selectAll(".regression-line").attr("d", line);
}

function initializeSVG() {
    const container = document.getElementById('scatterplot-container');
    const width = container.clientWidth - margin.left - margin.right;
    const height = container.clientHeight - margin.top - margin.bottom;

    svg = d3.select("#scatterplot-container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    x = d3.scaleLinear().domain([0, 100]).range([0, width]);
    y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(0).tickSize(0))
        .attr("class", "axis x-axis");

    svg.append("g")
        .call(d3.axisLeft(y).ticks(0).tickSize(0))
        .attr("class", "axis y-axis");
}

const container = document.getElementById('scatterplot-container');
let svg;
let x, y;

const points = [];
const noisePoints = [];

const generatePoint = (regressionType, correlationType) => {
    let xVal = Math.random() * 100;
    let yVal;

    if (regressionType === 'linear') {
        if (correlationType === 'positive') {
            yVal = xVal + (Math.random() * 20 - 10);
        } else if (correlationType === 'negative') {
            yVal = 100 - xVal + (Math.random() * 20 - 10);
        }
    } else if (regressionType === 'exponential') {
        if (correlationType === 'positive') {
            yVal = Math.exp(xVal / 20) + (Math.random() * 20 - 10);
        } else if (correlationType === 'negative') {
            yVal = Math.exp((100 - xVal) / 20) + (Math.random() * 20 - 10);
        }
    } else if (regressionType === 'logarithmic') {
        yVal = Math.log(xVal + 1) * 20 + (Math.random() * 10 - 5);
    }

    if (yVal < 0) yVal = 1;
    if (yVal > 100) yVal = 100;
    points.push([xVal, yVal]);
    return {x: xVal, y: yVal, type: 'actual'};
};

const generateNoisePoint = () => {
    const xVal = Math.random() * 100;
    const yVal = Math.random() * 100;
    noisePoints.push([xVal, yVal]);
    return {x: xVal, y: yVal, type: 'noise'};
};

const plotPoint = (point) => {
    svg.append("circle")
        .attr("cx", x(point.x))
        .attr("cy", y(point.y))
        .attr("r", 5)
        .style("fill", "none")
        .style("stroke", 'var(--tertiary-color)')
        .style("stroke-width", 2)
        .transition()
        .duration(500)
        .style("opacity", 1)
        .attr("class", point.type);
};

const highlightActualPoints = () => {
    svg.selectAll("circle.actual")
        .style("fill-opacity", 0)
        .transition()
        .duration(1500)
        .style("stroke", 'var(--highlight-color)')
        .style("stroke-width", 2)
        .style("stroke-opacity", .50)
        .style("fill", "var(--primary-color)")
        .style("fill-opacity", 1)
        .ease(d3.easeLinear)
        .on("end", function() {
            d3.selectAll("circle.actual").classed("glow", true);
        });
};

const fadeOutNoisePoints = () => {
    svg.selectAll("circle.noise")
        .transition()
        .duration(2000)
        .style("opacity", 0)
        .remove();
};

const calculateRegressionLine = (regressionType) => {
    const n = points.length;
    if (n < 2) return null;

    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumX3 = 0, sumX4 = 0, sumX2Y = 0;
    points.forEach(point => {
        sumX += point[0];
        sumY += point[1];
        sumXY += point[0] * point[1];
        sumX2 += point[0] * point[0];
        sumX3 += point[0] * point[0] * point[0];
        sumX4 += point[0] * point[0] * point[0] * point[0];
        sumX2Y += point[0] * point[0] * point[1];
    });

    if (regressionType === 'linear') {
        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        return [
            {x: 0, y: intercept},
            {x: 100, y: slope * 100 + intercept}
        ];
    } else if (regressionType === 'exponential') {
        let sumLogY = 0, sumXLogY = 0;
        points.forEach(point => {
            const logY = Math.log(point[1]);
            sumLogY += logY;
            sumXLogY += point[0] * logY;
        });

        const slope = (n * sumXLogY - sumX * sumLogY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumLogY - slope * sumX) / n;

        const curveData = [];
        for (let i = 0; i <= 100; i++) {
            curveData.push({x: i, y: Math.exp(intercept + slope * i)});
        }
        return curveData;
    } else if (regressionType === 'logarithmic') {
        let sumLogX = 0, sumYLogX = 0, sumLogX2 = 0;
        points.forEach(point => {
            const logX = Math.log(point[0] + 1);
            sumLogX += logX;
            sumYLogX += point[1] * logX;
            sumLogX2 += logX * logX;
        });

        const slope = (n * sumYLogX - sumY * sumLogX) / (n * sumLogX2 - sumLogX * sumLogX);
        const intercept = (sumY - slope * sumLogX) / n;

        const curveData = [];
        for (let i = 0; i <= 100; i++) {
            curveData.push({x: i, y: intercept + slope * Math.log(i + 1)});
        }
        return curveData;
    }
};

const drawRegressionLine = (lineData, regressionType) => {
    const line = d3.line()
        .x(d => x(d.x))
        .y(d => y(d.y));

    const curve = d3.line()
        .x(d => x(d.x))
        .y(d => y(d.y))
        .curve(d3.curveBasis);

    svg.append("path")
        .datum(lineData)
        .attr("class", "regression-line")
        .attr("d", regressionType === 'linear' ? line : curve)
        .style("stroke", "var(--highlight-color)")
        .style("stroke-width", 3)
        .style("fill", "none")
        .attr("stroke-dasharray", function() { return this.getTotalLength(); })
        .attr("stroke-dashoffset", function() { return this.getTotalLength(); })
        .transition()
        .duration(2000)
        .attr("stroke-dashoffset", 0)
        .on("end", function() {
            d3.selectAll("circle.actual").classed("glow", false);
            setTimeout(runAnimation, 2000); // Wait for 2 seconds before starting the next animation
        });
};

const runAnimation = () => {
    points.length = 0;
    noisePoints.length = 0;
    svg.selectAll("circle").remove();
    svg.selectAll(".regression-line").remove();

    const regressionList = ['linear', 'exponential', 'logarithmic'];
    const correlationList = ['positive', 'negative'];
    const randomRegressionIndex = Math.floor(Math.random() * regressionList.length);
    const randomCorrelationIndex = Math.floor(Math.random() * correlationList.length);
    const randomRegression = regressionList[randomRegressionIndex];
    const randomCorrelation = correlationList[randomCorrelationIndex];

    addPoints(100, randomRegression, randomCorrelation);
};

const addPoints = (interval, regressionType, correlationType) => {
    let count = 0;
    const maxPoints = 20;

    const intervalId = setInterval(() => {
        if (count < maxPoints) {
            const point = generatePoint(regressionType, correlationType);
            const noisePoint = generateNoisePoint();
            plotPoint(point);
            plotPoint(noisePoint);
            count++;
        } else {
            clearInterval(intervalId);
            fadeOutNoisePoints();
            highlightActualPoints();
            setTimeout(() => {
                const lineData = calculateRegressionLine(regressionType);
                if (lineData) drawRegressionLine(lineData, regressionType);
            }, 1000);
        }
    }, interval);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'PageB-2L') {
            checkAndRunAnimation();
        }
    });
}, { threshold: 0.1 });

const targetElement = document.getElementById('PageB-2L');
observer.observe(targetElement);

window.addEventListener('resize', updateDimensions);
updateDimensions();

