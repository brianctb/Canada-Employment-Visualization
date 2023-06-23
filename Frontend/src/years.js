import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import CenterDiv from "./components/center_div";
import Button from "./components/button";

function Years({data}) {
    const navigate = useNavigate();
    function navigateToViewyear(event){
        navigate('/viewyear', {state: {detail:event.target.textContent}});
    }

    return (
         <CenterDiv>
            <h2>View By Year</h2>
            {data.length === 0 ? <h3>Loading...</h3> :
                data.map((year) => (
                    <Button key={year.Sort_type} message={year.Sort_type} onClick={navigateToViewyear} />
                ))
            }
        </CenterDiv>
    )
}

export default Years;
