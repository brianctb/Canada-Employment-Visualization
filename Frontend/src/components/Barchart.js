import { Pie, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
Chart.register();


function Barchart({ object, detail }) {
    console.log(object);

    const data = {
        labels: object["Total_Employment"].slice(0,5).map((item) => item.label),
        datasets: [
            {
                label: `Total_Employment in ${detail}`,
                data: object["Total_Employment"].slice(0,5).map((item) => item.value)
            }
        ]
    }

    return (
        <Bar
            data={data}
            // height={450}
            options={{
                maintainAspectRatio: false
                
              }}
        />
    )
}

export default Barchart;