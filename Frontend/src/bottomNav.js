import { useNavigate } from 'react-router-dom';
import Roundbtn from './components/roundbtn';
import './css/general.css'


function BottomNav(){
    const navigate = useNavigate();
    
    const goHome = () =>{
        navigate("/");
    }
    
    const goBack = () =>{
        navigate(-1);
    }


    return(
    <div className="bottomNav">
        <Roundbtn img="/logo192.png" onClick={goBack} msg="back"/>
        <Roundbtn img="/logo192.png" onClick={goHome} msg="home"/>
    </div>
    );    
}

export default BottomNav;