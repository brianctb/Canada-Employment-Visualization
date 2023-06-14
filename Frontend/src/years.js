import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CenterDiv from "./components/center_div";
import Button from "./components/button";

function Years() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchyears = async () => {
            const response = await fetch('http://localhost:3011/api/by_year');
            const jsondata = await response.json();
            setData(jsondata);
        };
        fetchyears();
    }, []);

    return (
        <CenterDiv>
            <h2>View By Year</h2>
            {data.length === 0 ? <h3>Loading...</h3> :
                data.map((year) => (
                    <Button key={year.Sort_type} message={year.Sort_type} />
                ))
            }
        </CenterDiv>
    )
}

export default Years;