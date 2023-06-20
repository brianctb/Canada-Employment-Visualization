import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CenterDiv from "./components/center_div";
import ChartDiv from "./components/chart_div";
import Barchart from "./components/Barchart";
import Select from "react-select";

function Viewyear({ data }) {
    const location = useLocation();
    const { detail } = location.state;
    const result = data.find((item) => item.Sort_type === detail);

    const options = Object.keys(result).filter(
        names => (names !== "Sort_type" && names !== "_id")
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
        <ChartDiv>
            <CenterDiv>
                <h3>Pleaes select the dataset:</h3>
                <Select placeholder={selectedOption} options={options} styles={styles} onChange={handleDropdownChange} />
            </CenterDiv>
            <Barchart object={result} detail={detail} selectedOption={selectedOption} />
            <CenterDiv>

            </CenterDiv>
        </ChartDiv>
    )
}

export default Viewyear;