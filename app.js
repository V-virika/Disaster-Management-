// Buzzer button functionality
document.getElementById('buzzerBtn').addEventListener('click', function() {
    alert('Emergency alert sent to rescue team with location details!');
});

// Disaster Infographics Data
const disasterInfo = [
    {
        name: 'Flood',
        description: 'Floods cause damage by submerging crops and farmland. Farmers should evacuate, move livestock to higher ground, and use raised beds for planting.Farmers should elevate valuable equipment, secure livestock in higher ground, and construct barriers like sandbags to protect their land.'
    },
    {
        name: 'Drought',
        description: 'Droughts reduce water availability. Farmers should install efficient irrigation systems, conserve water, and plant drought-resistant crops.Farmers should adopt water-saving irrigation techniques, use drought-resistant crops, and store excess water during rainy seasons.'
    },
    {
        name: 'Storm',
        description: 'Storms bring heavy rain and high winds, damaging crops. Farmers should secure equipment and livestock, and harvest crops that are ready.Farmers should secure loose equipment, protect vulnerable crops with coverings, and seek shelter during the storm.'
    },
    {
        name: 'Wildfire',
        description: 'Wildfires can destroy crops and farmland. Farmers should create firebreaks, clear dry vegetation, and have firefighting tools ready.Farmers should create firebreaks around their fields, clear dry vegetation, and have a plan to evacuate livestock.'
    }
];

// Function to load disaster infographics
function loadInfographics() {
    const container = document.getElementById('disasterInfographics');
    disasterInfo.forEach(info => {
        const infographic = document.createElement('div');
        infographic.classList.add('infographic');
        infographic.innerHTML = `
            <h3>${info.name}</h3>
            <p>${info.description}</p>
        `;
        container.appendChild(infographic);
    });
}

// Disaster Predictions Data
const predictions = [
    { name: 'Flood', probability: 70 },
    { name: 'Drought', probability: 50 },
    { name: 'Storm', probability: 60 },
    { name: 'Wildfire', probability: 30 }
];

// Function to create disaster prediction chart
function createPredictionChart() {
    const ctx = document.getElementById('predictionChart').getContext('2d');
    const disasterNames = predictions.map(p => p.name);
    const disasterProbabilities = predictions.map(p => p.probability);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: disasterNames,
            datasets: [{
                label: 'Disaster Probability (%)',
                data: disasterProbabilities,
                backgroundColor: ['#FF5733', '#FFC300', '#28B463', '#DAF7A6'],
                borderColor: ['#C70039', '#FF5733', '#138D75', '#FFC300'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// Load infographics and prediction chart when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadInfographics();
    createPredictionChart();
});
