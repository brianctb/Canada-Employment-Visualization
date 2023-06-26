import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../css/general.css'
import { useEffect, useState } from 'react';
import Pagination from './pagination';
Chart.register();

function Linechart({ object, detail, selectedOption }) {
    var display_text = selectedOption.replace("_", " ");

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedOption])

    const limit = 11;
    const selectedData = object[selectedOption];
    const selectedData_sorted = selectedData.sort((a, b) => a.label.localeCompare(b.label));

    const size = selectedData_sorted.length;
    const prevSlice = selectedData_sorted.slice(limit * (currentPage - 2), limit * (currentPage - 1));
    let slices = selectedData_sorted.slice(limit * (currentPage - 1), limit * (currentPage));
    slices = slices.length < limit
        ? [...prevSlice.slice(-(limit - slices.length)), ...slices]
        : slices

    const data = {
        labels: slices.map((item) => item.label),
        datasets: [
            {
                label: `${display_text} in ${detail}`,
                data: slices.map((item) => item.value),
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
            <Line data={data} options={options} />
            {(selectedData_sorted > limit)
                ? (<div className='center_div_fullsize'>
                    <Pagination size={size} limit={limit} currentPage={currentPage} onPageChange={handlePageChange} />
                </div>)
                : null
            }
        </>
    )
}

export default Linechart;
