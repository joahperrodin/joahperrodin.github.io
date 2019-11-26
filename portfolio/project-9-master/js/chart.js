// Get Elements

const capitalInfo = document
	.getElementById("capital-information")
	.getContext("2d");
const revenue = document.getElementById("retained-revenue").getContext("2d");
const domesticPro = document
	.getElementById("domestic-production")
	.getContext("2d");
const btnFdi = document.getElementById("btn-fdi");
const btnPortfolio = document.getElementById("btn-portfolio");
const btnOther = document.getElementById("btn-other");
const btnCapital = document.getElementById("btn-capital");
const btnChangeColor = document.getElementsByClassName("btn-line");

/* ==============================
Declare data for line chart
=================================*/

let label = [
	"Q3-13",
	"Q1-14",
	"Q3-14",
	"Q1-15",
	"Q3-15",
	"Q1-16",
	"Q3-16",
	"Q1-17",
	"Q3-17",
	"Q1-18",
	"Q3-18"
];

let dataFdi = [
	0.2,
	0.1,
	0.5,
	0.5,
	0.5,
	0.8,
	0.4,
	0.2,
	0.7,
	0.1,
	0.2,
	0.2,
	0.3,
	0.3,
	0.2,
	0.3,
	0.1,
	0.4,
	0.2,
	0.3,
	0.5
];

let dataPortfolio = [
	3.7,
	3.4,
	2.9,
	4.9,
	5.1,
	2.0,
	1.9,
	2.2,
	1.0,
	1.0,
	0.3,
	0.3,
	0.9,
	0.3,
	0.3,
	0.8,
	2.8,
	3.5,
	4.6,
	4.1,
	1.7
];

let dataOther = [
	0.5,
	1.2,
	0.5,
	0.4,
	0.9,
	1.7,
	0.4,
	0.3,
	1.0,
	0.5,
	0.3,
	0.5,
	0.6,
	0.9,
	0.4,
	0.7,
	1.3,
	1.5,
	1.5,
	1.1,
	0.6
];

let dataCapital = [
	4.4,
	4.7,
	3.9,
	5.8,
	6.5,
	4.5,
	2.7,
	2.7,
	2.7,
	1.6,
	0.7,
	1.0,
	1.8,
	1.5,
	0.9,
	1.8,
	4.1,
	5.4,
	6.3,
	5.5,
	2.9
];

// Declare Line Chart

let myLineChart = new Chart(capitalInfo, {
	responsive: true,
	type: "line",

	data: {
		labels: label,
		datasets: [
			{
				data: dataFdi,
				backgroundColor: "rgba(77, 75, 113, 0.2)",
				pointBackgroundColor: "#fff",
				pointBorderColor: "#4d4b71",
				lineTension: 0
			}
		]
	},
	options: {
		legend: {
			display: false
		},
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: false
					}
				}
			],
			xAxes: [
				{
					ticks: {
						beginAtZero: false
					}
				}
			]
		}
	}
});

// Toggle Line Chart

let clickToggle = element => {
	element.onclick = newData => {
		if (element == btnFdi) {
			newData = dataFdi;
		}
		if (element == btnOther) {
			newData = dataOther;
		}
		if (element == btnCapital) {
			newData = dataCapital;
		}
		if (element == btnPortfolio) {
			newData = dataPortfolio;
		}
		myLineChart.data.datasets[0].data = newData;
		myLineChart.update();
	};
};

clickToggle(btnFdi);
clickToggle(btnOther);
clickToggle(btnCapital);
clickToggle(btnPortfolio);

// Declare BarChart

let myBarChart = new Chart(revenue, {
	responsive: true,
	type: "bar",
	data: {
		labels: ["Q1-17", "Q2-17", "Q3-17", "Q4-17", "Q1-18", "Q2-18", "Q3-18"],
		datasets: [
			{
				data: [0.52, 0.65, 0.8, 0.69, 0.9, 0.9, 0.95],
				backgroundColor: [
					"#4D4C72",
					"#b7ab66",
					"#115173",
					"#053f5e",
					"#022c43",
					"#dd6b4d",
					"#1c4b82"
				],
				pointBackgroundColor: "#fff",
				pointBorderColor: "#4d4b71",
				hoverBackgroundColor: [
					"#5754ab",
					"#ffd700",
					"#0672ac",
					"#0971aa",
					"#166792",
					"#e79983",
					"#78aae2"
				]
			}
		]
	},
	options: {
		legend: {
			display: false
		}
	}
});

// Declare Doughnut Chart

let myDoughnutChart = new Chart(domesticPro, {
	responsive: true,
	type: "doughnut",
	data: {
		labels: ["2010", "2015", "2018"],
		datasets: [
			{
				data: [15, 15, 70],
				backgroundColor: ["#4D4C72", "#81C98F", "#7477BF"],
				pointBackgroundColor: "#fff",
				pointBorderColor: "#4d4b71",
				hoverBackgroundColor: ["#44427b", "#61d177", "#5d61d5"]
			}
		]
	},
	options: {
		legend: {
			display: false
		}
	}
});
