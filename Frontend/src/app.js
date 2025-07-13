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
  const [dots, setDots] = useState("");

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

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
        clearInterval(dotInterval);
        setLoading(false);
      }
    };

    fetchData();

    return () => clearInterval(dotInterval);
  }, []);

  return loading ? (
    <CenterDiv>
      <h2>Server starting{dots}</h2>
      <p>This might take 20-30 seconds</p>
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
