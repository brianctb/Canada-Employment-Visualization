import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Pagination from './pagination';
import Center_div from './center_div';
import { useEffect, useState } from 'react';
Chart.register();


function Barchart({ object, detail, selectedOption }) {

    var display_text = selectedOption.replace("_", " ");

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedOption])

    const limit = 5;
    const size = object[selectedOption].length;

    const data = {
        labels: object[selectedOption].slice(limit * (currentPage - 1), limit * (currentPage)).map((item) => item.label),
        datasets: [
            {
                label: `${display_text} in ${detail}`,
                data: object[selectedOption].slice(limit * (currentPage - 1), limit * (currentPage)).map((item) => item.value),
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
        <>
            <Bar data={data} options={options} />
            <Center_div>
                <Pagination size={size} limit={limit} currentPage={currentPage} onPageChange={handlePageChange} />
            </Center_div>
        </>
    )
}

export default Barchart;