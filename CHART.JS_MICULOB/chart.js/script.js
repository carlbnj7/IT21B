class SalesChart {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.monthlySalesData = null;
        this.categorySalesData = null;
    }

    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            const data = await response.json();
            this.monthlySalesData = data.monthlySales;
            this.categorySalesData = data.categorySales;
            this.renderCharts();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    renderCharts() {
        this.renderMonthlySalesChart();
        this.renderCategorySalesChart();
    }

    renderMonthlySalesChart() {
        const ctx = document.getElementById("monthlySalesChart").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: this.monthlySalesData.labels,
                datasets: [{
                    label: "Monthly Shoe Sales",
                    data: this.monthlySalesData.values,
                    backgroundColor: "rgba(75, 192, 192, 0.6)"
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: "Sales in Units" }
                    }
                }
            }
        });
    }

    renderCategorySalesChart() {
        const ctx = document.getElementById("categorySalesChart").getContext("2d");
        new Chart(ctx, {
            type: "pie",
            data: {
                labels: this.categorySalesData.labels,
                datasets: [{
                    label: "Sales by Category",
                    data: this.categorySalesData.values,
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
                }]
            },
            options: {
                responsive: true
            }
        });
    }
}

const salesChart = new SalesChart("data.json");
salesChart.fetchData();