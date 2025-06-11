import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Years from "./years";
import Industries from "./industry";
import View from "./view";
import { API_BASE_URL } from "./config";
import CenterDiv from "./components/center_div";

const App = () => {
  const [yeardata, setYearData] = useState(null);
  const [industrydata, setIndustryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [yearRes, industryRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/by_year`),
          fetch(`${API_BASE_URL}/api/by_industry`),
        ]);

        const [yearJson, industryJson] = await Promise.all([
          yearRes.json(),
          industryRes.json(),
        ]);

        setYearData(yearJson);
        setIndustryData(industryJson);
      } catch (err) {
        console.error("Failed to load data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <CenterDiv>
      <h2>Server starting...</h2>
    </CenterDiv>
  ) : (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/years" element={<Years data={yeardata} />} />
      <Route
        path="/viewyear"
        element={<View data={yeardata} charttype="bar" />}
      />
      <Route path="/industries" element={<Industries data={industrydata} />} />
      <Route
        path="/viewindustry"
        element={<View data={industrydata} charttype="line" />}
      />
    </Routes>
  );
};

export default App;
