import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CenterDiv from "./components/center_div";
import Button from "./components/button";

function Industries({data}) {
    const sorted_data = data.map((industry) => industry.Sort_type).sort();

    const navigate = useNavigate();
    const handleButtonClick = (e) => {
        navigate("/viewindustry", { state: { detail: e.target.textContent } });
    };

    return (
        <CenterDiv>
            <h2>View By Industry</h2>
            {data.length === 0 ? <h3>Loading...</h3> :
                sorted_data.map((industry) => (
                    <Button key={industry} message={industry} onClick={handleButtonClick} />
                ))
            }
        </CenterDiv>
    )
}

export default Industries;
