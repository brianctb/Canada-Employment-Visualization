import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CenterDiv from "./components/center_div";
import ChartDiv from "./components/chart_div";
import Barchart from "./components/Barchart";
import { Chart } from "chart.js";

function Viewyear({ data }) {
    const location = useLocation();
    const { detail } = location.state;
    const result = data.find((item) => item.Sort_type === detail);

    return (
        <ChartDiv>
            <CenterDiv>
                <h2>Currently showcasing</h2>
            </CenterDiv>
            <Barchart object={result} detail={detail} />
            <CenterDiv>

            </CenterDiv>
        </ChartDiv>
    )
}

export default Viewyear;