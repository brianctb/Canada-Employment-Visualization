import { useNavigate } from "react-router-dom";
import CenterDiv from "./components/center_div";
import Button from "./components/button";

function Homepage() {
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
        </CenterDiv>
    )
};

export default Homepage;