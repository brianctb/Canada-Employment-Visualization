import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CenterDiv from "./components/center_div";
import Button from "./components/button";

function Industries({data}) {
    return (
        <CenterDiv>
            <h2>View By Industry</h2>
            {data.length === 0 ? <h3>Loading...</h3> :
                data.map((industry) => (
                    <Button key={industry.Sort_type} message={industry.Sort_type} />
                ))
            }
        </CenterDiv>
    )
}

export default Industries;
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchindustry = async () => {
    //         const response = await fetch('http://localhost:3011/api/by_industry');
    //         const jsondata = await response.json();
    //         setData(jsondata);
    //     };
    //     fetchindustry();
    // }, []);