import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
Chart.register();


function Barchart({ object, detail }) {
    var data_type = "Total_Employment";
    var display_text = data_type.replace("_", " ");

    const data = {
        labels: object[data_type].slice(0, 5).map((item) => item.label),
        datasets: [
            {
                label: `${display_text} in ${detail}`,
                data: object[data_type].slice(0, 5).map((item) => item.value),
                backgroundColor: "rgb(255, 120, 0)"
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "rgba(255, 255, 255, 0.908)",
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    callback: function (value) {
                        const label = this.getLabelForValue(value);
                        const firstspace = label.indexOf(' ');
                        if (firstspace !== -1) {
                            return label.substring(0, firstspace) + "...";
                        }
                        return label;
                    },
                    color: "rgba(255, 255, 255, 0.908)",
                },
            },
            y: {
                ticks: {
                    color: "rgba(255, 255, 255, 0.908)",
                }
            }
        }
    }

    return (
        <Bar data={data} options={options} />
    )
}

export default Barchart;