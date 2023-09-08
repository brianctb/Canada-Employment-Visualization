import { useNavigate } from "react-router-dom";
import BottomNav from "./bottomNav";
import CenterDiv from "./components/center_div";
import Button from "./components/button";


function Homepage() {
    const navigate = useNavigate();
    const navigateToindusries = () => {
        navigate('/industries');
    };
    const navigateToyears = () => {
        navigate('/years');
    };

    return (
        <>
            <CenterDiv>
                <h2>View Canada's Employment data from the following.</h2>
                {/* <Button message={"View All Industries"} /> */}
                <Button message={"View By Industry"} onClick={navigateToindusries} />
                <Button message={"View By Year"} onClick={navigateToyears} />
            </CenterDiv>
            <BottomNav />
        </>
    )
};

export default Homepage;