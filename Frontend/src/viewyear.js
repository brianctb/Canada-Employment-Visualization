import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CenterDiv from "./components/center_div";
import ChartDiv from "./components/chart_div";
import Barchart from "./components/Barchart";
import Dropdown from "./components/dropdown";
import { Chart } from "chart.js";

function Viewyear({ data }) {
    const location = useLocation();
    const { detail } = location.state;
    const result = data.find((item) => item.Sort_type === detail);
    const options = [
        { value: "All Industries", label: "All Industries" },
        { value: "Goods Producing", label: "Goods Producing" },
        { value: "Service Producing", label: "Service Producing" },
        // "All Industries", "Goods Producing", "Service Producing"
    ];

    return (
        <ChartDiv>
            <CenterDiv>
                <h2>Currently showcasing</h2>
                <Dropdown options={options} />
            </CenterDiv>
            <Barchart object={result} detail={detail} />
            <CenterDiv>

            </CenterDiv>
        </ChartDiv>
    )
}

export default Viewyear;