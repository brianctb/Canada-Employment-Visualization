import {Bar} from 'react-chartjs-2';

function Barchart({object, detail}){

    const data = {
        labels: object[detail].map((item) => item.label),
        datasets: [
            {
                label: detail,
                data: object[detail].map((item) => item.value)
            }
        ]
    }

    return(
        <Bar
            data={data} options={{}}
        />
    )
}

export default Barchart;