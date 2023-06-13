import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CenterDiv from "./components/center_div";
import Button from "./components/button";


function Homepage() {
    //temporary
    const [username, setUsername] = useState('loading...');
    useEffect(() => {
        const fetchName = async () => {
            const response = await fetch('http://localhost:3011/api');
            const data = await response.json();
            setUsername(data[0].name);
        };
        fetchName();
    }, []);
    //temporary

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    };
    const navigateToAbout = () => {
        navigate('/about');
    };

    return (
        <CenterDiv>
            <h3>Welcome. With this app, you will be able to visualize different data related to Canada's employment information.</h3>
            <Button message={"View All Industries"} onClick={navigateToHome} />
            <Button message={"View By Industry"} onClick={navigateToAbout} />
            <Button message={"View By Year"} />
            <Button message={`${username}`} />
        </CenterDiv>
    )
};

export default Homepage;