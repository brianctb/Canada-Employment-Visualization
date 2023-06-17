import React, { useState } from "react";
import Select from "react-select";

function Dropdown({ options }) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <Select options={options} onChange={handleOptionChange} />
        // <div className="dropdown">
        //     <div>
        //         <label htmlFor="dropdown">Select the data:</label>
        //         <br></br>
        //         <select id="dropdown" value={selectedOption} onChange={handleOptionChange} className="dropdown-select"
        //         style={{
        //             border: "1px solid gray",
        //             borderRadius: "4px",
        //             padding: "8px",
        //             width: "200px",
        //         }}
        //         >
        //             {options.map((option) => (
        //                 <option key={option} value={option} className="dropdown-option"
        //                     style={{
        //                         backgroundColor: "black",
        //                         color: "white",
        //                     }}
        //                 >
        //                     {option}
        //                 </option>
        //             ))}
        //         </select>
        //     </div>
        // </div>
    )
}

export default Dropdown;