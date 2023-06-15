import { Pie, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
Chart.register();


function Barchart({ object, detail }) {
    console.log(object);

    const data = {
        labels: object["Total_Employment"].slice(0, 10).map((item) => item.label),
        datasets: [
            {
                label: `Total_Employment in ${detail}`,
                data: object["Total_Employment"].slice(0, 10).map((item) => item.value)
            }
        ]
    }

    return (
        <Bar
            data={data}
            options={{
                maintainAspectRatio: false,
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
                            }
                        }
                    }
                }
            }}
        />
    )
}

export default Barchart;