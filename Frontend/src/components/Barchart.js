import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
Chart.register();


function Barchart({ object, detail, selectedOption }) {
    // console.log(selectedOption)
    var display_text = selectedOption.replace("_", " ");

    const data = {
        labels: object[selectedOption].slice(0, 5).map((item) => item.label),
        datasets: [
            {
                label: `${display_text} in ${detail}`,
                data: object[selectedOption].slice(0, 5).map((item) => item.value),
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
                        const firstspace = label.indexOf(' ')
                        const firsthyphen = label.indexOf('-');
                        if (firstspace !== -1 || firsthyphen !== -1) {
                            return (firstspace !== -1 && firsthyphen !== -1)
                                ? (firstspace < firsthyphen ? label.substring(0, firstspace) : label.substring(0, firsthyphen)) + "..."
                                : (firstspace !== -1 ? label.substring(0, firstspace) : label.substring(0, firsthyphen)) + "...";
                        } else {
                            return label;
                        }
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