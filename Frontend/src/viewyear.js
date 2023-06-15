import { useState, useEffect } from "react";
import CenterDiv from "./components/center_div";

function Viewyear(year){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchyear = async () => {
            const response = await fetch('http://localhost:3011/api/by_year');
            const jsondata = await response.json();
            setData(jsondata);
        };
        fetchyear();
    }, []);

    return(
        <CenterDiv>
            <h2>View By Year</h2>
            {data.length === 0 ? <h3>Loading...</h3> :
                data.map((year) => (
                    <Button key={year.Year} message={year.Year} />
                ))
            }
        </CenterDiv>
    )
}

export default Viewyear;