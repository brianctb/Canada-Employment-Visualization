import { useState } from "react";
import { useLocation } from "react-router-dom";
import CenterDiv from "./components/center_div";
import ChartDiv from "./components/chart_div";
import Charts from "./components/Chart";
import Select from "react-select";
import BottomNav from "./bottomNav";
import './css/general.css'

function View({ data, charttype }) {
    const location = useLocation();
    const { detail } = location.state;
    const result = data.find((item) => item.Sort_type === detail);

    const options = Object.keys(result).filter(
        names => (names !== "Sort_type" && names !== "_id" && result[names].length !== 0)
    ).map(name => ({
        value: name, label: name.replace("_", " ")
    }));

    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const handleDropdownChange = (selectedOption) => {
        setSelectedOption(selectedOption.value);
    };

    const styles = {
        option: (styles, { data }) => ({
            ...styles,
            color: '#000000',
            backgroundColor: data.value === selectedOption ? "grey" : 'transparent'
        }),
        placeholder: (styles) => ({
            ...styles,
            color: '#000000',
        }),
    }

    return (
        <>
            <ChartDiv>
                <CenterDiv>
                    <h3>Pleaes select the dataset:</h3>
                    <Select className={"general_bot_margin"} placeholder={selectedOption.replace("_", " ")} options={options} styles={styles} onChange={handleDropdownChange} />
                </CenterDiv>
                <Charts object={result} detail={detail} selectedOption={selectedOption} charttype={charttype} />
            </ChartDiv>
            <BottomNav />
        </>
    )
}

export default View;